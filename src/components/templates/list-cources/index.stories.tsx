import React from 'react';
import { ListCoursesTemplate, Props } from './index';
import { action } from '@storybook/addon-actions';
import { Course } from '../../../interfaces';

export default { title: 'templates/list-courses' };

const courses: Course[] = [
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    schedule: {},
    timeTable: {},
  },
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    schedule: {},
    timeTable: {},
  },
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    schedule: {},
    timeTable: {},
  },
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    schedule: {},
    timeTable: {},
  },
  {
    arrival: 'Arrival',
    departure: 'Departure',
    id: 'uuid',
    name: 'name',
    notification: true,
    requiredMinutes: 19,
    schedule: {},
    timeTable: {},
  },
];

export const listCoursesTemplate = () => {
  const props: Props = {
    title: 'ルート',
    onMenuButtonClick: action('メニューが押されました'),
    courses,
  };

  return <ListCoursesTemplate {...props} />;
};
