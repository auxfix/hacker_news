import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';

export const selectHackerNews = createSelector(
    (state: RootState) => state.news.news,
    news => news,
);

export const selectNewsAreLoading = createSelector(
    (state: RootState) => state.news.isLoading,
    isLoading => isLoading,
);

