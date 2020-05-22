import React from 'react';
import { DetailCourseBody, DetailCourseBodyProps } from './index';
import { DateTime } from 'luxon';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { action } from '@storybook/addon-actions';

export default { title: 'Organisms/Body/RegisterCourses' };

export const register = () => {
  const Component: React.FC = () => {
    const [enabled, setEnabled] = React.useState<boolean>(true);
    const [startTime, setStartTime] = React.useState<MaterialUiPickersDate>(
      DateTime.fromISO('2016-05-25T09:00')
    );
    const [endTime, setEndTime] = React.useState<MaterialUiPickersDate>(
      DateTime.fromISO('2016-05-25T19:00')
    );
    const [name, setName] = React.useState<string>('');
    const [arrival, setArrival] = React.useState<string>('');
    const [departure, setDeparture] = React.useState<string>('');
    const [requiredMinutes, setRequiredMinutes] = React.useState<number>(1);
    const handleChange = () => setEnabled((prevState) => !prevState);

    const props: DetailCourseBodyProps = {
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
          console.log('arrival: ', arrival);
          console.log('requiredMinutes: ', requiredMinutes);
          console.log('startTime: ', startTime);
          console.log('endTime: ', endTime);
          console.log('enabled: ', enabled);
        },
        onCancelClick: action('clicked cancel button'),
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

    return <DetailCourseBody {...props} />;
  };

  return <Component />;
};

export const update = () => {
  const Component: React.FC = () => {
    const [enabled, setEnabled] = React.useState<boolean>(true);
    const [startTime, setStartTime] = React.useState<MaterialUiPickersDate>(
      DateTime.fromISO('2016-05-25T09:00')
    );
    const [endTime, setEndTime] = React.useState<MaterialUiPickersDate>(
      DateTime.fromISO('2016-05-25T19:00')
    );
    const [name, setName] = React.useState<string>('');
    const [arrival, setArrival] = React.useState<string>('');
    const [departure, setDeparture] = React.useState<string>('');
    const [requiredMinutes, setRequiredMinutes] = React.useState<number>(1);
    const handleChange = () => setEnabled((prevState) => !prevState);

    const props: DetailCourseBodyProps = {
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
          console.log('arrival: ', arrival);
          console.log('requiredMinutes: ', requiredMinutes);
          console.log('startTime: ', startTime);
          console.log('endTime: ', endTime);
          console.log('enabled: ', enabled);
        },
        onCancelClick: action('clicked cancel button'),
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

    return <DetailCourseBody {...props} />;
  };

  return <Component />;
};
