import { createAction } from '@reduxjs/toolkit';

import { ActionTypes } from 'literals';

import { actionPayload } from 'modules/helpers';

export const getNews = createAction(ActionTypes.GET_NEWS_REQUEST);
export const getNewsSuccess = createAction(ActionTypes.GET_NEWS_SUCCESS,
    (payload: string[],) => actionPayload(payload));
export const getNewsFailure = createAction(ActionTypes.GET_NEWS_FAILURE);

