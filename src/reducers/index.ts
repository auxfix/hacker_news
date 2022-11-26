import alerts, { alertsState } from './alerts';
import app, { appState } from './app';
import github, { githubState } from './github';
import user, { userState } from './user';
import news, { newsState } from 'feature/news/reducers';

export const initialState = {
  alerts: alertsState,
  app: appState,
  github: githubState,
  user: userState,
  news: newsState,
};

export default {
  ...alerts,
  ...app,
  ...github,
  ...user,
  ...news
};
