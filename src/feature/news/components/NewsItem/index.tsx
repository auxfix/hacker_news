import { getFormattedTimeForNews } from 'feature/news/utils';
import { HackerStory } from 'types';

import styles from './newsItem.module.scss';

interface NewsProps {
  newsItem: HackerStory;
}

export default function NewsItem(props: NewsProps) {
  const { newsItem } = props;

  const { monthDateYear, weekDay } = getFormattedTimeForNews(newsItem.time);

  return (
    <div key={newsItem.id} className={styles.container}>
      <img alt="News cover" className={styles.image} src={newsItem.img} />
      <div className={styles.info}>
        <div className={styles.time}>
          <span>{weekDay}</span>
          <span>{monthDateYear}</span>
        </div>
        <h1 className={styles.title}>{newsItem.title}</h1>
        <div className={styles.infoblock}>
          <div className={styles.text}>
            <span>Story score:</span>
            <span>{newsItem.score}</span>
          </div>
          <div className={styles.text}>
            <span>Author:</span>
            <span>{newsItem.authorId}</span>
          </div>
          <div className={styles.text}>
            <span>Author Karma:</span>
            <span>{newsItem.karma}</span>
          </div>
        </div>

        <a className={styles.readmore} href={newsItem.url} rel="noreferrer" target="_blank">
          Read more
        </a>
      </div>
    </div>
  );
}
