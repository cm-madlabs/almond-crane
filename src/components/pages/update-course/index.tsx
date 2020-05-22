import React from 'react';
import { BaseTemplate } from '../../templates/base-template';
import { HeaderProps } from '../../organisms/header';
import {
  DetailCourseBody,
  DetailCourseBodyProps,
} from '../../organisms/body/detail-course';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { useHistory, useParams } from 'react-router-dom';
import { get, update } from '../../../datastores/localstorage';

type UpdateCoursePagePresentationalProps = {
  body: DetailCourseBodyProps;
  header: HeaderProps;
};

export const UpdateCoursePagePresentational: React.FC<UpdateCoursePagePresentationalProps> = ({
  header,
  body,
}) => {
  const main: React.ReactElement = (
    <>
      <DetailCourseBody {...body} />
    </>
  );

  return <BaseTemplate header={header} main={main} />;
};

export const UpdateCoursePageContainer: React.FC = () => {
  const header: HeaderProps = {
    title: '新規登録',
    onMenuButtonClick: () => console.log('メニューがクリックされました'),
  };

  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const data = get(id);

  const [enabled, setEnabled] = React.useState<boolean>(data.notification);
  const handleChange = () => setEnabled((prevState) => !prevState);

  const [startTime, setStartTime] = React.useState<MaterialUiPickersDate>(
    data.schedule?.startTime ?? null
  );
  const [endTime, setEndTime] = React.useState<MaterialUiPickersDate>(
    data.schedule?.endTime ?? null
  );
  const [name, setName] = React.useState<string>(data.name);
  const [departure, setDeparture] = React.useState<string>(data.departure);
  const [arrival, setArrival] = React.useState<string>(data.arrival);
  const [requiredMinutes, setRequiredMinutes] = React.useState<number>(
    data.requiredMinutes
  );

  const body: DetailCourseBodyProps = {
    mode: 'update',
    notification: {
      enabled,
      handleChange,
    },
    schedule: {
      startTime: {
        value: startTime,
        onChange: setStartTime,
      },
      endTime: {
        value: endTime,
        onChange: setEndTime,
      },
    },
    actions: {
      onSaveClick: (event) => {
        event.preventDefault();
        update({
          id,
          arrival,
          departure,
          name,
          notification: enabled,
          requiredMinutes,
          timeTable: [], //TODO:後から追加
          schedule: { endTime: endTime!, startTime: startTime! },
        });
        history.push('/courses');
      },
      onCancelClick: () => history.goBack(),
    },
    name: {
      value: name,
      onChange: setName,
    },
    departure: {
      value: departure,
      onChange: setDeparture,
    },
    arrival: {
      value: arrival,
      onChange: setArrival,
    },
    requiredMinutes: {
      value: requiredMinutes,
      onChange: setRequiredMinutes,
    },
  };

  return <UpdateCoursePagePresentational header={header} body={body} />;
};
