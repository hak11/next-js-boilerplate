import '../styles/general.css'
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Head from 'next/head'

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
	Sentry.init({
		dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
		integrations: [
			new Integrations.BrowserTracing(),
		],
		tracesSampleRate: 1.0,
	});
}

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};


export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Head>
				<title>Aplikasi</title>
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}