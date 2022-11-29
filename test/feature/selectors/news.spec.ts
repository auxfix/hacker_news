import { selectHackerNews, selectNewsAreLoading } from 'feature/news/selectros';
import { configStore } from 'store';

describe('selectors/news', () => {
  const { store } = configStore();

  it('should return the hacker news', () => {
    expect(selectHackerNews(store.getState())).toMatchSnapshot();
  });

  it('should return loading status', () => {
    expect(selectNewsAreLoading(store.getState())).toMatchSnapshot();
  });
});
