import React from 'react';
import { BaseTemplate } from '../../templates/base-template';
import { HeaderProps } from '../../organisms/header';
import {
  ListCoursesBody,
  ListCoursesProps,
} from '../../organisms/body/list-courses';
import { list } from '../../../datastores/localstorage';

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

  const courses = list();

  const body: ListCoursesProps = {
    courses,
  };

  return <ListCoursesPagePresentational header={header} body={body} />;
};
