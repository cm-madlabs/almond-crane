import React from 'react';
import { action } from '@storybook/addon-actions';

import { Header } from './index';

export default { title: 'Headers' };

export const pageHeader = () => {
  return (
    <Header
      title={'ページタイトル'}
      onMenuButtonClick={action('メニューがクリックされました')}
    />
  );
};
