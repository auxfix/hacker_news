import { getNewsFailure, getNewsSuccess, showAlert } from 'actions';
import rundom_images from 'feature/news/assets/img/rundom_huckers_images';
import HackerApi from 'feature/news/services/api';
import { HackerStoryDTO, UserDTO } from 'feature/news/types/dto';
import { HackerStory_Dto_to_Internal } from 'feature/news/types/typeConverters';
import { getRundomArray, getRundomItemsFromArray } from 'feature/news/utils';
import { ActionTypes } from 'literals';
import { all, put, takeLatest } from 'redux-saga/effects';

const NUMBER_OF_RUNDOM_NEWS_TO_SHOW = 10;

export function* getNews() {
  const hacker_api = new HackerApi();

  try {
    const topNews: Array<number> = yield hacker_api.getTopStories();
    const rundom_10_news = getRundomItemsFromArray(topNews, NUMBER_OF_RUNDOM_NEWS_TO_SHOW);
    const rundom_image_indexes = getRundomArray(NUMBER_OF_RUNDOM_NEWS_TO_SHOW);
    const news: Array<HackerStoryDTO> = [];
    const users: Array<UserDTO> = [];

    for (const id of rundom_10_news) {
      const localNews: HackerStoryDTO = yield hacker_api.getHackerStory(id);

      if (localNews) {
        news.push(localNews);
      }
    }

    const usersIds: Array<string> = news.reduce((acc, item) => {
      if (!acc.includes(item.by)) {
        acc.push(item.by);
      }

      return acc;
    }, [] as Array<string>);

    for (const id of usersIds) {
      const localUser: UserDTO = yield hacker_api.getUser(id);

      if (localUser) {
        users.push(localUser);
      }
    }

    const newsWithAllFiledsPopulated = news.map((newsItem, index) => {
      const newsItemAuthor = users.find(user => user.id === newsItem.by);

      const internalNewsItem = HackerStory_Dto_to_Internal(newsItem);

      internalNewsItem.img = rundom_images[rundom_image_indexes[index]];

      if (newsItemAuthor) {
        internalNewsItem.karma = newsItemAuthor?.karma;
      }

      return internalNewsItem;
    });

    yield put(getNewsSuccess(newsWithAllFiledsPopulated));
  } catch {
    yield put(getNewsFailure());
    yield put(
      showAlert('Error getting news from the internet. Please try again later.', {
        variant: 'danger',
        timeout: 10,
      }),
    );
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_NEWS_REQUEST, getNews)]);
}
