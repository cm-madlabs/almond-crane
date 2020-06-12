import React from 'react';
import {
  makeStyles,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { TimeTablePicker } from '../time-table-picker';
import { DateTime } from 'luxon';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  hour: {
    width: '10%',
  },
});

const useTimeTable = ({
  timeTable,
  setTimeTable,
}: {
  timeTable: TimeEntries;
  setTimeTable: (timeTable: TimeEntries) => void;
}): {
  getComponent: () => React.ReactElement;
  hour: number;
}[] => {
  // const [datetime, setDateTime] = React.useState<DateTime | null>(null);
  // const [hour, setHour] = React.useState<number>(0);

  return timeTable.map((time, index) => {
    // console.log('time: ', time);

    const handleOnChange = (date: DateTime | null) => {
      const newTimeTable = timeTable.slice(0, timeTable.length);

      if (date) {
        newTimeTable.splice(index, 1, date);
      } else {
        newTimeTable.splice(index, 1);
      }

      setTimeTable(newTimeTable.sort());
    };

    const timeTablePicker = (
      <span style={{ padding: '10px' }}>
        <TimeTablePicker mode="update" value={time} onChange={handleOnChange} />
      </span>
    );

    return {
      getComponent: () => timeTablePicker,
      hour: time.hour,
    };
  });
};

type TimeEntries = DateTime[];

export type TimeTableProps = {
  timeTable: TimeEntries;
  setTimeTable: (timeTable: TimeEntries) => void;
};

export const TimeTable: React.FC<TimeTableProps> = (props) => {
  const classes = useStyles();

  const myTimeTable = useTimeTable(props);

  const rows = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
  ].map((hour) => {
    const minutes = myTimeTable
      .filter((value) => value.hour === hour)
      .map((value) => value.getComponent());
    return {
      hour,
      minutes,
    };
  });

  // const rows = [
  //   {
  //     hour: 0,
  //     minutes: [],
  //   },
  //
  //   // createData(0, []),
  //   // createData(1, []),
  //   // createData(2, []),
  //   // createData(3, []),
  //   // createData(4, []),
  //   // createData(5, []),
  // ];

  console.log('rows: ', rows);

  return (
    <>
      <div
        style={{
          textAlign: 'left',
        }}
      >
        <TimeTablePicker
          mode="register"
          value={DateTime.fromISO('2000-01-01T00:00:00')}
          onChange={(date) => {
            props.setTimeTable([...props.timeTable, date!].sort());
          }}
        />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.hour} align="center">
                時
              </TableCell>
              <TableCell>分</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.hour}>
                <TableCell component="th" scope="row" align="center">
                  {row.hour}
                </TableCell>
                <TableCell align="left">{row.minutes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
