import { all, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import { getNewsSuccess, getNewsFailure } from 'feature/news/actions';
import HackerApi from 'feature/news/services/api';
import { getRundomItemsFromArray } from 'feature/news/utils';
import { HackerStoryDTO, UserDTO } from 'feature/news/types/dto';
import { HackerStory_Dto_to_Internal } from 'feature/news/types/typeConverters';


export function* getNews() {
  const hacker_api = new HackerApi();

  try {
    const topNews: Array<number> = yield hacker_api.getTopStories();
    const rundom_10_news = getRundomItemsFromArray(topNews, 10);
    const news: Array<HackerStoryDTO> = [];
    const users: Array<UserDTO> = [];

    for (let id in rundom_10_news) {
        let localNews: HackerStoryDTO = yield hacker_api.getHackerStoy(id);
        if(!!localNews) {
          news.push(localNews);
        }
    }

    const usersIds: Array<number> = news.reduce((acc, item) =>{
        if(!acc.includes(item.id)) acc.push(item.id);

        return acc;
    },[] as Array<number>)

    for (let id in usersIds) {
        let localUser: UserDTO = yield hacker_api.getUser(id);
        if(!!localUser) {
          users.push(localUser);
        }
    }

    const newsWithAllFiledsPopulated = news.map((newsItem => {
        const newsItemAuthor = users.find(user => user.id === newsItem.by);

        const internalNewsItem = HackerStory_Dto_to_Internal(newsItem);
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