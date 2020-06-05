import React from 'react';
import {
  ListCoursesPresentational,
  ListCoursesPresentationalProps,
} from './index';
import { action } from '@storybook/addon-actions';
import { Course } from '../../../../interfaces';

export default { title: 'Organisms/body' };

const coursesSample: Course[] = [
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    timeTable: [],
  },
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    timeTable: [],
  },
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    timeTable: [],
  },
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    timeTable: [],
  },
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    timeTable: [],
  },
];

const [courses, setCourses] = React.useState<Course[]>(coursesSample);

export const listCourses = () => {
  const props: ListCoursesPresentationalProps = {
    handleAddCourse: action('ルート追加ボタンがクリックされました'),
    courses,
    handleDelCourse: action('削除ボタンが押されました'),
    getRemainedMin: (_cource) => 10,
    handleOnClickCourse: action('ルートがクリックされました'),
  };

  return <ListCoursesPresentational {...props} />;
};
