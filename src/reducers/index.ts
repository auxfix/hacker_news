import { news, newsState } from 'feature/news/reducers';

import alerts, { alertsState } from './alerts';

export const initialState = {
  alerts: alertsState,
  news: newsState,
};

export default {
  ...alerts,
  ...news,
};
