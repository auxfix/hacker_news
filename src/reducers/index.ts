import alerts, { alertsState } from './alerts';
import news, { newsState } from 'feature/news/reducers';

export const initialState = {
  alerts: alertsState,
  news: newsState,
};

export default {
  ...alerts,
  ...news
};
