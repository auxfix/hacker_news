import { Helmet } from 'react-helmet-async';
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
      <Helmet
        defaultTitle={name}
        defer={false}
        encodeSpecialCharacters
        htmlAttributes={{ lang: 'en-us' }}
        titleAttributes={{ itemprop: 'name', lang: 'en-us' }}
        titleTemplate={`%s | ${name}`}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
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
