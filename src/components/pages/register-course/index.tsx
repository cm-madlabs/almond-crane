import React from 'react';
import { BaseTemplate } from '../../templates/base-template';
import { HeaderProps } from '../../organisms/header';
import {
  DetailCourseBody,
  DetailCourseBodyProps,
} from '../../organisms/body/detail-course';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import { add } from '../../../datastores/localstorage';
import { v4 as uuidv4 } from 'uuid';

type RegisterCoursePagePresentationalProps = {
  body: DetailCourseBodyProps;
  header: HeaderProps;
};

export const RegisterCoursePagePresentational: React.FC<RegisterCoursePagePresentationalProps> = ({
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

export const RegisterCoursePageContainer: React.FC = () => {
  const header: HeaderProps = {
    title: '新規登録',
    onMenuButtonClick: () => console.log('メニューがクリックされました'),
  };

  const history = useHistory();

  const [enabled, setEnabled] = React.useState<boolean>(true);
  const handleChange = () => setEnabled((prevState) => !prevState);

  const [startTime, setStartTime] = React.useState<MaterialUiPickersDate>(
    DateTime.fromISO('2016-05-25T08:00')
  );
  const [endTime, setEndTime] = React.useState<MaterialUiPickersDate>(
    DateTime.fromISO('2016-05-25T09:00')
  );
  const [name, setName] = React.useState<string>('出勤');
  const [departure, setDeparture] = React.useState<string>('自宅');
  const [arrival, setArrival] = React.useState<string>('会社');
  const [requiredMinutes, setRequiredMinutes] = React.useState<number>(30);

  const body: DetailCourseBodyProps = {
    mode: 'register',
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
        add({
          id: uuidv4(),
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

  return <RegisterCoursePagePresentational header={header} body={body} />;
};
