import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
import { Metadata } from 'next'

import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps, router }) {
  // const baseUrl = "https://eduburner.in";
  return (
    <>
      {/* <meta property="og:image" content={`${baseUrl}/og.png`} />
      <meta property="og:title" content="Explore the next generation of learning experience" />
      <meta property="og:description" content="exclusively for the learners" /> */}
      <SessionProvider session={pageProps.session}>

        <Component {...pageProps} key={router.route} />

      </SessionProvider>
    </>

  );
}

export default MyApp;