import React, { FC } from 'react';
import { AddButton } from '../../../atoms/button/index';
import { Course } from '../../../../interfaces';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory, } from "react-router-dom";

export type ListCoursesProps = {
  // FIXME: 適切なオブジェクトに直す
  courses: Course[]
}

export type ListCoursesPresentationalProps = {
  handleAddCourse: () => void
  courses: Course[]
  getRemainedMin: (cource: Course) => number;
  handleOnClickCourse: (course: Course) => void;
}

const useListCourses = () => {
  let history = useHistory();

  const handleAddCourse = () => {
    history.push("/courses/add")
  };

  const getRemainedMin: ListCoursesPresentationalProps['getRemainedMin'] = (_cource) => (10)

  const handleOnClickCourse: ListCoursesPresentationalProps['handleOnClickCourse'] = (cource) => {
    history.push(`/courses/${cource.id}`)
  }

  return {handleAddCourse, getRemainedMin, handleOnClickCourse};
};

export const ListCoursesPresentational: FC<ListCoursesPresentationalProps> = ({handleAddCourse, courses, getRemainedMin, handleOnClickCourse}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <List component="nav">
          {
            courses.map(r => {
              return (
                <ListItem button key={r.id} onClick={() => (handleOnClickCourse(r))}>
                  <ListItemText primary={`${r.departure} => ${r.arrival}`} secondary={`残り${getRemainedMin(r)}分`}/>
                </ListItem>
              )
            })
          }
        </List>
      </Grid>
      <Grid item xs={12}>
        <AddButton disabled={false} onClick={handleAddCourse}>ルートを追加</AddButton>
      </Grid>
    </Grid>
  );
};

export const ListCourses: FC<ListCoursesProps> = ({courses}) => {

  const props: ListCoursesPresentationalProps = {...useListCourses(), courses};

  return <ListCoursesPresentational {...props} />;
};

