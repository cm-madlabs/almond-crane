import React, { FC } from 'react';
import { AddButton } from '../../../atoms/button';
import { Course } from '../../../../interfaces';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { DeleteButton } from '../../../atoms/button';
import { DateTime } from 'luxon';

export type ListCoursesProps = {
  // FIXME: 適切なオブジェクトに直す
  courses: Course[];
  handleDelCourse: (targetCourse: Course) => void;
  dateTimeNow: DateTime;
};

export type ListCoursesPresentationalProps = {
  handleAddCourse: () => void;
  courses: Course[];
  handleDelCourse: (course: Course) => void;
  getRemainedMin: (cource: Course) => number;
  handleOnClickCourse: (course: Course) => void;
};

const useListCourses = (dateTimeNow: DateTime) => {
  let history = useHistory();

  const handleAddCourse = () => {
    history.push('/courses/add');
  };

  const getRemainedMin: ListCoursesPresentationalProps['getRemainedMin'] = (
    course
  ) => {
    const next = course.timeTable.filter((time) => {
      // 時刻表のDatetimeが現在時刻のDatetimeが超えている直近のタイムを採用
      const diff =
        (time.toSeconds() - dateTimeNow.toSeconds()) / 60 -
        course.requiredMinutes;
      if (diff > 0) {
        return true;
      } else {
        return false;
      }
    });
    if (next.length < 1) {
      return -1;
    }
    // ソートされている前提なので先頭のタイムを採用
    return (
      (next[0].toSeconds() - dateTimeNow.toSeconds()) / 60 -
      course.requiredMinutes
    );
  };

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
                  secondary={`残り${getRemainedMin(
                    r
                  )}分で移動を開始してください(徒歩${r.requiredMinutes}分想定)`}
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
  dateTimeNow,
}) => {
  const props: ListCoursesPresentationalProps = {
    ...useListCourses(dateTimeNow),
    courses,
    handleDelCourse,
  };

  return <ListCoursesPresentational {...props} />;
};
