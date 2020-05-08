import React from 'react';
import { RegisterCourseBody, RegisterCourseBodyProps } from './index';
import { DateTime } from 'luxon';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { action } from '@storybook/addon-actions';

export default { title: 'Organisms/Body/RegisterCourses' };

export const demo = () => {
  const Component: React.FC = () => {
    const [enabled, setEnabled] = React.useState<boolean>(true);
    const [startTime, setStartTime] = React.useState<MaterialUiPickersDate>(
      DateTime.fromISO('2016-05-25T09:00')
    );
    const [endTime, setEndTime] = React.useState<MaterialUiPickersDate>(
      DateTime.fromISO('2016-05-25T19:00')
    );
    const [arrival, setArrival] = React.useState<string>('');
    const [requiredMinutes, setRequiredMinutes] = React.useState<number>(1);
    const handleChange = () => setEnabled((prevState) => !prevState);

    const props: RegisterCourseBodyProps = {
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
          console.log('arrival: ', arrival);
          console.log('requiredMinutes: ', requiredMinutes);
          console.log('startTime: ', startTime);
          console.log('endTime: ', endTime);
          console.log('enabled: ', enabled);
        },
        onCancelClick: action('clicked cancel button'),
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

    return <RegisterCourseBody {...props} />;
  };

  return <Component />;
};
