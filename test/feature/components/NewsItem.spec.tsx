import React from 'react';
import NewsItem from 'feature/news/components/NewsItem';
import { render, screen } from 'test-utils';
import { HackerStory } from 'types';

describe('NewsItem', () => {
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

  it('should render properly', () => {
    render(<NewsItem newsItem={testNewsItem} />);

    expect(screen.getByTestId('NewsItem')).toMatchSnapshot();
    expect(screen.getByTestId('score')).toHaveTextContent(testNewsItem.score.toString());
    expect(screen.getByTestId('author')).toHaveTextContent(testNewsItem.authorId);
    expect(screen.getByTestId('title')).toHaveTextContent(testNewsItem.title);
    expect(screen.getByTestId('karma')).toHaveTextContent(testNewsItem.karma?.toString());
    expect(screen.getByTestId('link')).toHaveAttribute('href', testNewsItem.url);
  });
});
