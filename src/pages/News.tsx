import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectHackerNews, selectNewsAreLoading } from 'feature/news/selectros';


import { useAppSelector } from 'modules/hooks';


import { getNews } from 'feature/news/actions';

import Loader from 'components/Loader';

import NewsItem from 'feature/news/components/NewsItem';


function HackerNews() {
  const dispatch = useDispatch();
  const news = useAppSelector(selectHackerNews);
  const isLoading = useAppSelector(selectNewsAreLoading);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);



  if(isLoading) {
    return <Loader/>;
  }

  return (
    <div>
        {news.map(newsItem => (
            <NewsItem newsItem={newsItem}/>
        ))}
    </div>
  );
}

export default HackerNews;
