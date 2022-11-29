import { getNews, getNewsFailure, getNewsSuccess } from 'feature/news/actions/news';
import { news as reducer } from 'feature/news/reducers';
import { ActionTypes } from 'literals';
import { emptyAction } from 'test-utils';
import { HackerStory } from 'types';

const testNewsItem: HackerStory = {
  authorId: 'hacker.one',
  id: 242342343,
  score: 74,
  time: 1669726441,
  title: 'amazing article',
  url: 'https://en.wikipedia.org/wiki/Hacker',
  img: 'https://images/nice_image.jpg',
  karma: 34,
};

describe('reducers/feture/news', () => {
  let news = reducer.news(undefined, emptyAction);

  it('should return the initial state', () => {
    expect(reducer.news(news, emptyAction)).toMatchSnapshot();
  });

  it(`should handle ${ActionTypes.GET_NEWS_REQUEST}`, () => {
    news = reducer.news(news, getNews());
    expect(news).toMatchSnapshot();
  });

  it(`should handle ${ActionTypes.GET_NEWS_SUCCESS}`, () => {
    news = reducer.news(news, getNewsSuccess([testNewsItem]));
    expect(news).toMatchSnapshot();
  });

  it(`should handle ${ActionTypes.GET_NEWS_FAILURE}`, () => {
    news = reducer.news(news, getNewsFailure());
    expect(news).toMatchSnapshot();
  });
});
