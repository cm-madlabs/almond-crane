import React from 'react';
import { TimeTable } from './index';
import { DateTime } from 'luxon';

export default { title: 'Organisms/TimeTable' };

export const demo = () => {
  function Component() {
    const [timeTable, setTimeTable] = React.useState<DateTime[]>([
      DateTime.fromISO('2020-05-25T01:00:00.000+09:00'),
      DateTime.fromISO('2020-05-25T01:20:00.000+09:00'),
      DateTime.fromISO('2020-05-25T02:20:00.000+09:00'),
      DateTime.fromISO('2020-05-25T05:20:00.000+09:00'),
      DateTime.fromISO('2020-05-25T12:20:00.000+09:00'),
      DateTime.fromISO('2020-05-25T22:20:00.000+09:00'),
    ]);

    return <TimeTable setTimeTable={setTimeTable} timeTable={timeTable} />;
  }

  return <Component />;
};
