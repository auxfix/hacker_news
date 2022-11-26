import { createReducer } from '@reduxjs/toolkit';

import { getNewsSuccess, getNewsFailure } from 'feature/news/actions';

import { NewsState } from 'types';

export const newsState: NewsState = {
  news: [],
};

export default {
  news: createReducer<NewsState>(newsState, builder => {
    builder
    .addCase(getNewsSuccess, (draft, { payload }) => {
      draft.news = payload;
    })
    .addCase(getNewsFailure, (draft) => {
      draft.news = [];
    });
  }),
};
