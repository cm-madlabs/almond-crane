import React from 'react';
import {
  Grid,
  TextField,
  Switch,
  FormLabel,
  Button,
  makeStyles,
} from '@material-ui/core';
import { TimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { TimeTable } from '../../time-table';
import { DateTime } from 'luxon';

export type DetailCourseBodyProps = {
  mode: 'register' | 'update';
  notification: {
    enabled: boolean;
    handleChange: () => void;
  };
  schedule: {
    startTime: {
      value: MaterialUiPickersDate;
      onChange: (date: MaterialUiPickersDate) => void;
    };
    endTime: {
      value: MaterialUiPickersDate;
      onChange: (date: MaterialUiPickersDate) => void;
    };
  };
  actions: {
    onCancelClick: () => void;
    onSaveClick: (event: React.FormEvent<HTMLFormElement>) => void;
  };
  name: {
    value: string;
    onChange: (value: string) => void;
  };
  departure: {
    value: string;
    onChange: (value: string) => void;
  };
  arrival: {
    value: string;
    onChange: (value: string) => void;
  };
  requiredMinutes: {
    value: number;
    onChange: (value: number) => void;
  };
  timeTable: {
    value: DateTime[];
    onChange: (value: DateTime[]) => void;
  };
};

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
  switch: {
    textAlign: 'right',
  },
}));

export const DetailCourseBody: React.FC<DetailCourseBodyProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <form onSubmit={props.actions.onSaveClick} autoComplete="off">
        <Grid item xs={12} className={classes.switch}>
          <FormLabel>通知</FormLabel>
          <Switch
            checked={props.notification.enabled}
            onChange={props.notification.handleChange}
            name="notification"
          />
        </Grid>
        <Grid container spacing={2} justify="center" className={classes.root}>
          <Grid item xs={4}>
            <TextField
              name="name"
              label="ルート名"
              variant="outlined"
              fullWidth
              required
              value={props.name.value}
              onChange={(event) => props.name.onChange(event.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="departure"
              label="出発地"
              variant="outlined"
              fullWidth
              required
              value={props.departure.value}
              onChange={(event) => props.departure.onChange(event.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="arrival"
              label="目的地"
              variant="outlined"
              fullWidth
              required
              value={props.arrival.value}
              onChange={(event) => props.arrival.onChange(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item xs={4}>
                <TextField
                  label="目的地までの時間[分]"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={props.requiredMinutes.value}
                  onChange={(event) =>
                    props.requiredMinutes.onChange(Number(event.target.value))
                  }
                  inputProps={{ min: '1', max: '1000', step: '1' }}
                />
              </Grid>
              <Grid item xs={4}>
                <TimePicker
                  clearable
                  ampm={false}
                  label="開始時刻"
                  value={props.schedule.startTime.value}
                  onChange={props.schedule.startTime.onChange}
                  disabled={!props.notification.enabled}
                  style={{
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TimePicker
                  clearable
                  ampm={false}
                  label="終了時刻"
                  value={props.schedule.endTime.value}
                  onChange={props.schedule.endTime.onChange}
                  disabled={!props.notification.enabled}
                  style={{
                    width: '100%',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TimeTable
              timeTable={props.timeTable.value}
              setTimeTable={props.timeTable.onChange}
            ></TimeTable>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} justify="center">
              <Grid item xs={6}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={props.actions.onCancelClick}
                >
                  キャンセル
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  {props.mode === 'register' ? '新規作成' : '更新'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
