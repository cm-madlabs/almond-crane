import React from 'react';
import { BaseTemplate } from '../../templates/base-template';
import { HeaderProps } from '../../organisms/header';
import {
  ListCoursesBody,
  ListCoursesProps,
} from '../../organisms/body/list-courses';
import { del, list } from '../../../datastores/localstorage';
import { Course } from '../../../interfaces';
import { DateTime } from 'luxon';

type ListCoursesPagePresentationalProps = {
  body: ListCoursesProps;
  header: HeaderProps;
};

export const ListCoursesPagePresentational: React.FC<ListCoursesPagePresentationalProps> = ({
  header,
  body,
}) => {
  const main: React.ReactElement = (
    <>
      <ListCoursesBody {...body} />
    </>
  );

  return <BaseTemplate header={header} main={main} />;
};

const getDateTimeNow = (): DateTime => {
  const now = DateTime.local();
  return now.set({ year: 2000, month: 1, day: 1, second: 0, millisecond: 0 });
};

export const ListCoursesPageContainer: React.FC = () => {
  const header: HeaderProps = {
    title: 'コース一覧',
    onMenuButtonClick: () => console.log('メニューがクリックされました'),
  };

  const [courses, setCourses] = React.useState<Course[]>(list());
  const [dateTimeNow, updateTime] = React.useState(getDateTimeNow());

  React.useEffect(() => {
    const timeoutId: number = setTimeout(
      () => updateTime(getDateTimeNow()),
      30000
    );
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dateTimeNow]);

  const body: ListCoursesProps = {
    courses,
    handleDelCourse: (targetCourse: Course) => {
      del(targetCourse);
      setCourses(list());
    },
    dateTimeNow,
  };

  return <ListCoursesPagePresentational header={header} body={body} />;
};
