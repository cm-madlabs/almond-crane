import React from 'react';
import { action } from '@storybook/addon-actions';

import { ConfirmButton, DeleteButton, AddButton, DetailButton } from './';

export default {title: 'Buttons' };

export const confirmButton = () => {
  return <ConfirmButton disabled={false} onClick={action('クリックされました') }>登録</ConfirmButton>
}

export const deleteButton = () => {
  return <DeleteButton disabled={false} onClick={action('クリックされました') }>削除</DeleteButton>
}


export const addButton = () => {
  return <AddButton disabled={false} onClick={action('クリックされました') }>追加</AddButton>
}

export const detailButton = () => {
  return <DetailButton disabled={false} onClick={action('クリックされました') }>詳細</DetailButton>
}
