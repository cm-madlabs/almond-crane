import React from 'react';
import { TimePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';
import Button from '@material-ui/core/Button';

export type TimeTablePickerProps = {
  onChange: (props: {
    before: DateTime | null;
    after: DateTime | null;
  }) => void;
  value: DateTime | null;
  mode: 'register' | 'update';
};

export const TimeTablePicker: React.FC<TimeTablePickerProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [before, setBefore] = React.useState<DateTime | null>(props.value);

  return (
    <>
      <TimePicker
        clearable={props.mode === 'update'}
        clearLabel="DELETE"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        ampm={false}
        format="mm"
        value={before}
        onChange={(after) => {
          props.onChange({ before, after });
          setBefore(after);
        }}
        inputVariant="outlined"
        TextFieldComponent={(minute: any) => (
          <Button
            color="primary"
            variant="contained"
            onClick={() => setIsOpen(true)}
          >
            {minute.value}
          </Button>
        )}
      />
    </>
  );
};
