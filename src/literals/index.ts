import { keyMirror } from '@gilbarbara/helpers';
import { Status } from 'types';

export const ActionTypes = keyMirror({
  HIDE_ALERT: undefined,
  SHOW_ALERT: undefined,
  SET_APP_OPTIONS: undefined,

  // news
  GET_NEWS_REQUEST: undefined,
  GET_NEWS_SUCCESS: undefined,
  GET_NEWS_FAILURE: undefined,
  GET_NEWS_PIECE_SUCCESS: undefined,
});

export const STATUS: Status = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
