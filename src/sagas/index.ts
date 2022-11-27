import { all, fork } from 'redux-saga/effects';

import hackerNews from 'feature/news/sagas';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(hackerNews)]);
}
