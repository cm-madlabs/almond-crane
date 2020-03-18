import * as React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

type Props = {
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    }
  })
);

export const PageTitle: React.FC<Props> = (
  {
    children
  }: Props) => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.title}>
      {children}
    </Typography>
  );
};

