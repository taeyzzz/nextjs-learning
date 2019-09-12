import React from 'react'
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from 'react-redux'

import configureStore from '../store'

const debug = process.env.NODE_ENV === 'development'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    // ctx.store.dispatch({type: 'FOO', payload: 'foo'});
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(configureStore, { debug })(MyApp);
