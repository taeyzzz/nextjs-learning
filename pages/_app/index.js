import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Router from 'next/router'
import withRedux from "next-redux-wrapper";
import { Provider } from 'react-redux'

import configureStore from '../../store'

import * as ga from '../../utils/ga'
import "./global-style.scss"

const debug = process.env.NODE_ENV === 'development'

const MyApp = ({ Component, pageProps, store }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Provider store={store}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-YRLXNMBFND`}
      />
      <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-YRLXNMBFND');
      `}
    </Script>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // we can dispatch from here too
  // ctx.store.dispatch({type: 'FOO', payload: 'foo'});
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
}

export default withRedux(configureStore, { debug: false })(MyApp);
