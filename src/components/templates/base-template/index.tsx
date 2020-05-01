import * as React from 'react';
import { Header, HeaderProps } from '../../organisms/header';
import {
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
} from '@material-ui/core';

export type BaseTemplateProps = {
  header: HeaderProps;
  main: React.ReactElement;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

export const BaseTemplate: React.FC<BaseTemplateProps> = ({ header, main }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header {...header} />
      <main className={classes.content}>
        <div> {main}</div>
      </main>
    </>
  );
};
