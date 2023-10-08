import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <CartProvider>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} key={router.route} />
        </SessionProvider>
      </CartProvider>

    </>
  );
}

export default MyApp;