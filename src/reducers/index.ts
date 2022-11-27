import alerts, { alertsState } from './alerts';
import app, { appState } from './app';
import user, { userState } from './user';
import news, { newsState } from 'feature/news/reducers';

export const initialState = {
  alerts: alertsState,
  app: appState,
  user: userState,
  news: newsState,
};

export default {
  ...alerts,
  ...app,
  ...user,
  ...news
};
