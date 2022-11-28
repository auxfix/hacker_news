import { selectHackerNews, selectNewsAreLoading } from 'feature/news/selectros';
import { configStore } from 'store';

describe('selectors', () => {
  const { store } = configStore();

  describe('selectApp', () => {
    it('should return the hacker news', () => {
      expect(selectHackerNews(store.getState())).toMatchSnapshot();
    });
  });

  describe('selectGitHub', () => {
    it('should return loading status', () => {
      expect(selectNewsAreLoading(store.getState())).toMatchSnapshot();
    });
  });
});
