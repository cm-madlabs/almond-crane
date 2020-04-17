import * as React from 'react';
import { Button } from '@material-ui/core';

type Props = {
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
}

export const ConfirmButton: React.FC<Props> = ({
                                                 onClick,
                                                 children = 'Confirm',
                                                 disabled = false
                                               }: Props) => {
  return (
    <Button onClick={onClick} variant="contained" color="default"
                      disabled={disabled}>{children}</Button>
  );
};

export const DeleteButton: React.FC<Props> = ({
                                                onClick,
                                                children = 'Delete',
                                                disabled = false
                                              }: Props) => {
  return (
    <Button onClick={onClick} variant="contained" color="secondary"
                      disabled={disabled}>{children}</Button>
  );
};


export const AddButton: React.FC<Props> = ({
                                             onClick,
                                             children = 'Add',
                                             disabled = false
                                           }: Props) => {
  return (
    <Button onClick={onClick} variant="contained" color="primary"
                      disabled={disabled}>{children}</Button>
  );
};

export const DetailButton: React.FC<Props> = ({
                                             onClick,
                                             children = 'Detail',
                                             disabled = false
                                           }: Props) => {
  return (
    <Button onClick={onClick} variant="outlined" color="default"
            disabled={disabled}>{children}</Button>
  );
};
