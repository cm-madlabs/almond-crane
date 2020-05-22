import React, { useState } from 'react';
import { TimePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';
import Button from '@material-ui/core/Button';

export type TimeTablePickerProps = {
  onChange: (date: DateTime | null) => void;
  value: DateTime | null;
  mode: 'register' | 'update';
};

export const TimeTablePicker: React.FC<TimeTablePickerProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TimePicker
        clearable={props.mode === 'update'}
        clearLabel="DELETE"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        ampm={false}
        format="mm"
        value={props.value}
        onChange={props.onChange}
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
