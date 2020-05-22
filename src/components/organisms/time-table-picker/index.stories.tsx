import React from 'react';
import { TimeTablePicker, TimeTablePickerProps } from './index';
import { DateTime } from 'luxon';
import { action } from '@storybook/addon-actions';

export default { title: 'Organisms/time-table-picker/' };

export const register = () => {
  const Component: React.FC = () => {
    const [time, setTime] = React.useState<DateTime | null>(
      DateTime.fromISO('2016-05-25T09:00')
    );

    const props: TimeTablePickerProps = {
      mode: 'register',
      value: time,
      onChange: ({ after }) => setTime(after),
    };

    return <TimeTablePicker {...props} />;
  };

  return <Component />;
};

export const update = () => {
  const Component: React.FC = () => {
    const [time, setTime] = React.useState<DateTime | null>(
      DateTime.fromISO('2016-05-25T09:00')
    );

    const props: TimeTablePickerProps = {
      mode: 'update',
      value: time,
      onChange: ({ after }) => setTime(after),
    };

    return <TimeTablePicker {...props} />;
  };

  return <Component />;
};

export const demo = () => {
  const Component: React.FC = () => {
    const props: TimeTablePickerProps = {
      mode: 'update',
      value: DateTime.fromISO('2016-05-25T09:15'),
      onChange: action('changed'),
    };

    return <TimeTablePicker {...props} />;
  };

  return <Component />;
};
