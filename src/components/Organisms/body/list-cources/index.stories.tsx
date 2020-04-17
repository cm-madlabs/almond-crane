import React from 'react';
import { ListCoursesPresentational, ListCoursesPresentationalProps } from './index';
import { action } from '@storybook/addon-actions';
import { Course } from '../../../../interfaces';

export default {title: 'Organisms/body'};


const courses: Course[] = [
  {
    arrival: 'Arrival', departure: 'Departure', id: 'uuid', name: 'name', notification: true
    , requiredMinutes: 19, schedule: {}, timeTable: {}
  },
  {
    arrival: 'Arrival', departure: 'Departure', id: 'uuid', name: 'name', notification: true
    , requiredMinutes: 19, schedule: {}, timeTable: {}
  },
  {
    arrival: 'Arrival', departure: 'Departure', id: 'uuid', name: 'name', notification: true
    , requiredMinutes: 19, schedule: {}, timeTable: {}
  },
  {
    arrival: 'Arrival', departure: 'Departure', id: 'uuid', name: 'name', notification: true
    , requiredMinutes: 19, schedule: {}, timeTable: {}
  },
  {
    arrival: 'Arrival', departure: 'Departure', id: 'uuid', name: 'name', notification: true
    , requiredMinutes: 19, schedule: {}, timeTable: {}
  }
];

export const listCourses = () => {

  const props: ListCoursesPresentationalProps = {
    handleAddCourse: action('ルート追加ボタンがクリックされました'),
    courses,
    getRemainedMin: (_cource) => (10),
    handleOnClickCourse: action('ルートがクリックされました')
  };

  return <ListCoursesPresentational {...props} />;
};

