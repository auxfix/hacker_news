import { createReducer } from '@reduxjs/toolkit';
import { getNews, getNewsFailure, getNewsSuccess } from 'feature/news/actions';
import { NewsState } from 'types';

export const newsState: NewsState = {
  news: [],
  isLoading: false,
};

export default {
  news: createReducer<NewsState>(newsState, builder => {
    builder
      .addCase(getNews, draft => {
        draft.isLoading = true;
      })
      .addCase(getNewsSuccess, (draft, { payload }) => {
        draft.news = payload;
        draft.isLoading = false;
      })
      .addCase(getNewsFailure, draft => {
        draft.isLoading = false;
      });
  }),
};
