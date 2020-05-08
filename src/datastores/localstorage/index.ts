import { Course } from '../../interfaces';
import { DateTime } from 'luxon';

type CourseDTO = {
  id: string;
  name: string;
  departure: string;
  arrival: string;
  notification: boolean;
  schedule?: ScheduleDTO;
  timeTable: TimeTableDTO;
  requiredMinutes: number;
};

type ScheduleDTO = {
  startTime?: number;
  endTime?: number;
};

type TimeTableDTO = {};

export const list = (): Course[] => {
  const courses: CourseDTO[] = JSON.parse(
    localStorage.getItem('courses') || '[]'
  );
  return courses.map((val) => convertCourseDTOIntoDomain(val));
};

export const add = (input: Course) => {
  const courses = list().map((val) => convertCourseDomainIntoDTO(val));
  localStorage.setItem(
    'courses',
    JSON.stringify([...courses, convertCourseDomainIntoDTO(input)])
  );
};

const convertCourseDomainIntoDTO = (input: Course): CourseDTO => {
  return {
    id: input.id,
    arrival: input.arrival,
    departure: input.departure,
    name: input.name,
    notification: input.notification,
    requiredMinutes: input.requiredMinutes,
    timeTable: input.timeTable,
    schedule: {
      startTime: input.schedule?.startTime.toMillis(),
      endTime: input.schedule?.endTime.toMillis(),
    },
  };
};

const convertCourseDTOIntoDomain = (input: CourseDTO): Course => {
  return {
    id: input.id,
    arrival: input.arrival,
    departure: input.departure,
    name: input.name,
    notification: input.notification,
    requiredMinutes: input.requiredMinutes,
    timeTable: input.timeTable,
    schedule: {
      startTime: DateTime.fromMillis(input.schedule?.startTime ?? 0),
      endTime: DateTime.fromMillis(input.schedule?.endTime ?? 0),
    },
  };
};
