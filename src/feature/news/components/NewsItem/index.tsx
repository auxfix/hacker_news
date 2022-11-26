import { HackerStory } from "types";
import styles from './newsItem.module.scss';

interface NewsProps {
    newsItem: HackerStory;
}

export default function NewsItem(props: NewsProps){
    const { newsItem } = props;
    return (
     <div className={styles.container} key={newsItem.id}>
        <div><span>{'id: '}</span>{newsItem.id}</div>
        <div><span>{'title: '}</span>{newsItem.title}</div>
        <div><span>{'url: '}</span>{newsItem.url}</div>
        <div><span>{'score: '}</span>{newsItem.score}</div>
        <div><span>{'time: '}</span>{newsItem.time}</div>
        <div><span>{'karma: '}</span>{newsItem.karma}</div>
        <img src={newsItem.img}/>
    </div>
   )
}