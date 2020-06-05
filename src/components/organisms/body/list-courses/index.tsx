import React, { FC } from 'react';
import { AddButton } from '../../../atoms/button';
import { Course } from '../../../../interfaces';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { DeleteButton } from '../../../atoms/button';

export type ListCoursesProps = {
  // FIXME: 適切なオブジェクトに直す
  courses: Course[];
  handleDelCourse: (targetCourse: Course) => void;
};

export type ListCoursesPresentationalProps = {
  handleAddCourse: () => void;
  courses: Course[];
  handleDelCourse: (course: Course) => void;
  getRemainedMin: (cource: Course) => number;
  handleOnClickCourse: (course: Course) => void;
};

const useListCourses = () => {
  let history = useHistory();

  const handleAddCourse = () => {
    history.push('/courses/add');
  };

  const getRemainedMin: ListCoursesPresentationalProps['getRemainedMin'] = (
    _cource
  ) => 10;

  const handleOnClickCourse: ListCoursesPresentationalProps['handleOnClickCourse'] = (
    cource
  ) => {
    history.push(`/courses/${cource.id}`);
  };

  return { handleAddCourse, getRemainedMin, handleOnClickCourse };
};

export const ListCoursesPresentational: FC<ListCoursesPresentationalProps> = ({
  handleAddCourse,
  courses,
  handleDelCourse,
  getRemainedMin,
  handleOnClickCourse,
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <List component="nav">
          {courses.map((r) => {
            return (
              <ListItem
                button
                key={r.id}
                onClick={() => handleOnClickCourse(r)}
              >
                <ListItemText
                  primary={
                    <>
                      <h4>{r.name}</h4>
                      <p>{`${r.departure} => ${r.arrival}`}</p>
                    </>
                  }
                  secondary={`残り${getRemainedMin(r)}分`}
                />
                <DeleteButton
                  onClick={(event) => {
                    handleDelCourse(r);
                    event?.stopPropagation();
                  }}
                  disabled={false}
                >
                  削除
                </DeleteButton>
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={12}>
        <AddButton disabled={false} onClick={handleAddCourse}>
          ルートを追加
        </AddButton>
      </Grid>
    </Grid>
  );
};

export const ListCoursesBody: FC<ListCoursesProps> = ({
  courses,
  handleDelCourse,
}) => {
  const props: ListCoursesPresentationalProps = {
    ...useListCourses(),
    courses,
    handleDelCourse,
  };

  return <ListCoursesPresentational {...props} />;
};
