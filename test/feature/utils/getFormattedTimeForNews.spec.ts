import { getFormattedTimeForNews } from 'feature/news/utils';

describe('getFormattedTimeForNews', () => {
  it('should return proper fromatted date', () => {
    const { monthDateYear, weekDay } = getFormattedTimeForNews(1669726441);

    expect(weekDay).toBe('Tuesday');
    expect(monthDateYear).toBe('November 29 2022');
  });
});
