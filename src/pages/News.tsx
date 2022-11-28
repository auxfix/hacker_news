import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'components/Loader';
import { getNews } from 'feature/news/actions';
import NewsItem from 'feature/news/components/NewsItem';
import { selectHackerNews, selectNewsAreLoading } from 'feature/news/selectros';
import { useAppSelector } from 'modules/hooks';
import styles from 'styles/global.module.scss';

function HackerNews() {
  const dispatch = useDispatch();
  const news = useAppSelector(selectHackerNews);
  const isLoading = useAppSelector(selectNewsAreLoading);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styles.centered}>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {news.map(newsItem => (
        <NewsItem key={newsItem.id} newsItem={newsItem} />
      ))}
    </div>
  );
}

export default HackerNews;
