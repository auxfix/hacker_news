import { all, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import HackerApi from 'feature/news/services/api';

import { getNewsSuccess, getNewsFailure } from 'feature/news/actions';
import { getRundomItemsFromArray, getRundomArray } from 'feature/news/utils';
import { HackerStoryDTO, UserDTO } from 'feature/news/types/dto';
import { HackerStory_Dto_to_Internal } from 'feature/news/types/typeConverters';
import rundom_images from 'feature/news/assets/img/rundom_huckers_images';

const NUMBER_OF_RUNDOM_NEWS_TO_SHOW = 10;

export function* getNews() {
  const hacker_api = new HackerApi();

  try {
    const topNews: Array<number> = yield hacker_api.getTopStories();
    const rundom_10_news = getRundomItemsFromArray(topNews, NUMBER_OF_RUNDOM_NEWS_TO_SHOW);
    const rundom_image_indexes = getRundomArray(NUMBER_OF_RUNDOM_NEWS_TO_SHOW);
    const news: Array<HackerStoryDTO> = [];
    const users: Array<UserDTO> = [];

    for (let id of rundom_10_news) {
        let localNews: HackerStoryDTO = yield hacker_api.getHackerStory(id);
        if(!!localNews) {
          news.push(localNews);
        }
    }

    const usersIds: Array<string> = news.reduce((acc, item) =>{
        if(!acc.includes(item.by)) acc.push(item.by);

        return acc;
    },[] as Array<string>)

    for (let id of usersIds) {
        let localUser: UserDTO = yield hacker_api.getUser(id);
        if(!!localUser) {
          users.push(localUser);
        }
    }

    const newsWithAllFiledsPopulated = news.map(((newsItem, index) => {
        const newsItemAuthor = users.find(user => user.id === newsItem.by);

        const internalNewsItem = HackerStory_Dto_to_Internal(newsItem);

        internalNewsItem.img = rundom_images[rundom_image_indexes[index]];

        if(!!newsItemAuthor) {
            internalNewsItem.karma = newsItemAuthor?.karma;
        }
        return internalNewsItem;
    }))

    yield put(getNewsSuccess(newsWithAllFiledsPopulated));

  } catch (_) {
    yield put(getNewsFailure());
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_NEWS_REQUEST, getNews),
  ]);
}