import { HackerStory } from "types";
import { getFormattedTimeForNews } from 'feature/news/utils';
import styles from './newsItem.module.scss';

interface NewsProps {
    newsItem: HackerStory;
}

export default function NewsItem(props: NewsProps){
    const { newsItem } = props;

    const { weekDay, monthDateYear } = getFormattedTimeForNews(newsItem.time);
    return (
     <div className={styles.container} key={newsItem.id}>
        <img className={styles.image} src={newsItem.img}/>
        <div className={styles.info}>
            <div className={styles.time}>
                <span>{weekDay}</span>
                <span>{monthDateYear}</span>
            </div>
            <h1 className={styles.title}>{newsItem.title}</h1>
            <div className={styles.infoBlock}>
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


            <a href={newsItem.url} 
               className={styles.readMore}
               target="_blank"
               >Read more</a>
        </div>
        
    </div>
   )
}