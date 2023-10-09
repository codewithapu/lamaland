import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '../context/CartContext';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <CartProvider>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} key={router.route} />
        </SessionProvider>
      </CartProvider>

    </>
  );
}

export default MyApp;