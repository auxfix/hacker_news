import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';

export const selectApp = createSelector(
  (state: RootState) => state.app,
  app => app,
);

export const selectUser = createSelector(
  (state: RootState) => state.user,
  user => user,
);
