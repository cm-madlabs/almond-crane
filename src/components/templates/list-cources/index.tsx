import * as React from 'react';
import { ListCoursesBody } from '../../Organisms/body/list-cources';
import { Header } from '../../Organisms/header';
import { Grid } from '@material-ui/core';
import { Course } from '../../../interfaces';

export type Props = {
  title: string;
  onMenuButtonClick: React.MouseEventHandler;
  courses: Course[];
};

type listCoursesPresentationalProps = {
  title: string;
  onMenuButtonClick: React.MouseEventHandler;
  courses: Course[];
};

export const ListCoursesPresentational: React.FC<listCoursesPresentationalProps> = ({
  title,
  onMenuButtonClick,
  courses,
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header title={title} onMenuButtonClick={onMenuButtonClick} />
      </Grid>
      <Grid item xs={12}>
        <ListCoursesBody courses={courses} />
      </Grid>
    </Grid>
  );
};

export const ListCoursesTemplate: React.FC<Props> = (props) => {
  // const classes = useStyles();
  return <ListCoursesPresentational {...props} />;
};
