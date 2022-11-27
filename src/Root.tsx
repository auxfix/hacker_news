import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { selectUser } from 'selectors';
import useTreeChanges from 'tree-changes-hook';

import { useAppSelector } from 'modules/hooks';

import { name } from 'config';

import { showAlert } from 'actions';

import Header from 'components/Header';
import SystemAlerts from 'pages/SystemAlerts';
import NotFound from 'routes/NotFound';

import HackerNews from 'pages/News';
import styles from 'styles/global.module.scss';



function Root() {
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);
  const { changed } = useTreeChanges(user);

  useEffect(() => {
    if (changed('isAuthenticated', true)) {
      dispatch(showAlert('Hello! And welcome!', { variant: 'success', icon: 'bell', timeout: 10 }));
    }
  }, [dispatch, changed]);

  return (
    <BrowserRouter>

          {/* @ts-ignore */}
          <Helmet
            defaultTitle={name}
            defer={false}
            encodeSpecialCharacters
            htmlAttributes={{ lang: 'pt-br' }}
            titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
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
              <Route
                element={
                  <HackerNews/>
                }
                path="/"
              />          
              <Route element={<NotFound />} path="*" />
            </Routes>
            </main>
          <SystemAlerts />
    </BrowserRouter>
  );
}

export default Root;
