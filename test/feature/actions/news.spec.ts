import { getNews, getNewsFailure, getNewsSuccess } from 'feature/news/actions/news';

describe('feature/news/actions', () => {
  describe('showAlert', () => {
    it('should return getNews ction', () => {
      expect(getNews()).toMatchSnapshot();
    });

    it('should return getNews action success', () => {
      expect(getNewsSuccess([])).toMatchSnapshot();
    });
  });

  describe('should return getNews action faiure', () => {
    it('should return an action failure', () => {
      expect(getNewsFailure()).toMatchSnapshot();
    });
  });
});
