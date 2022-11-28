import hackerNews from 'feature/news/sagas';
import { all, fork } from 'redux-saga/effects';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(hackerNews)]);
}
