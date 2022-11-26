import { HackerStory } from "types";
import styles from './newsItem.module.scss';

interface NewsProps {
    newsItem: HackerStory;
}

export default function NewsItem(props: NewsProps){
    const { newsItem } = props;
    return (
     <div className={styles.container}key={newsItem.id}>
        <div>{newsItem.id}</div>
        <div>{newsItem.title}</div>
        <div>{newsItem.url}</div>
        <div>{newsItem.score}</div>
        <div>{newsItem.timestamp}</div>
    </div>
   )
}