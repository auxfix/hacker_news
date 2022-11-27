import { useCallback } from 'react';
import { useDispatch } from 'react-redux';


import { getNews } from 'feature/news/actions';


import Button from 'components/Button';


import styles from './header.module.scss';



export default function Header() {
  const dispatch = useDispatch();

  
  const handleUpdateNews= useCallback(
    () => {
        dispatch(getNews());
    },
    [dispatch],
  );

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Button onClick={handleUpdateNews}>Get more news</Button> 
      </div>
    </header>
  );
}
