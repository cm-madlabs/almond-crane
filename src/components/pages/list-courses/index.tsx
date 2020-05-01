import React from 'react';
import { BaseTemplate } from '../../templates/base-template';
import { HeaderProps } from '../../organisms/header';
import {
  ListCoursesBody,
  ListCoursesProps,
} from '../../organisms/body/list-courses';
import { Course } from '../../../interfaces';

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

export const ListCoursesPageContainer: React.FC = () => {
  const header: HeaderProps = {
    title: 'コース一覧',
    onMenuButtonClick: () => console.log('メニューがクリックされました'),
  };

  const courses: Course[] = [
    {
      id: '1',
      name: 'ルート１',
      departure: '出発地',
      arrival: '目的地',
      notification: true,
      schedule: {},
      timeTable: {},
      requiredMinutes: 10,
    },
    {
      id: '2',
      name: '会社 → 自宅',
      departure: '会社 (岩本町オフィス)',
      arrival: '岩本町',
      notification: true,
      schedule: {},
      timeTable: {},
      requiredMinutes: 10,
    },
    {
      id: '3',
      name: '自宅 → 会社',
      departure: '自宅',
      arrival: 'XXX駅',
      notification: true,
      schedule: {},
      timeTable: {},
      requiredMinutes: 5,
    },
  ];

  const body: ListCoursesProps = {
    courses,
  };

  return <ListCoursesPagePresentational header={header} body={body} />;
};
