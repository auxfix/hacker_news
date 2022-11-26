import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectHackerNews, selectNewsAreLoading } from 'feature/news/selectros';


import { useAppSelector } from 'modules/hooks';


import { getNews } from 'feature/news/actions';

import Loader from 'components/Loader';


function HackerNews() {
  const dispatch = useDispatch();
  const news = useAppSelector(selectHackerNews);
  const isLoading = useAppSelector(selectNewsAreLoading);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);


  const handleUpdateNews= useCallback(
    () => {
        dispatch(getNews());
    },
    [dispatch],
  );

  if(isLoading) {
    return <Loader/>;
  }

  return (
    <div>
        <div><button onClick={handleUpdateNews}>Get more news</button></div>
        {news.map(newsItem => (
           <div key={newsItem.id}>
            <div>{newsItem.id}</div>
            <div>{newsItem.title}</div>
            <div>{newsItem.url}</div>
            <div>{newsItem.score}</div>
            <div>{newsItem.timestamp}</div>
           </div> 
        ))}
    </div>
  );
}

export default HackerNews;
