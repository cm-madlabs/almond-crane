import React from 'react';
import { BaseTemplate } from './index';
import { action } from '@storybook/addon-actions';
import { HeaderProps } from '../../organisms/header';

export default { title: 'templates/list-courses' };

export const baseTemplate: React.FC = () => {
  const header: HeaderProps = {
    title: 'デフォルトテンプレート',
    onMenuButtonClick: action('メニューが押されました'),
  };

  const main: React.ReactElement = (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </>
  );

  return <BaseTemplate header={header} main={main} />;
};
