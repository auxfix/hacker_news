import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import { name } from 'config';
import HackerNews from 'pages/News';
import SystemAlerts from 'pages/SystemAlerts';
import NotFound from 'routes/NotFound';
import styles from 'styles/global.module.scss';

function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{name}</title>
      </Helmet>
      <main className={styles.main}>
        <Routes>
          <Route element={<HackerNews />} path="/" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>
      <SystemAlerts />
    </BrowserRouter>
  );
}

export default Root;
