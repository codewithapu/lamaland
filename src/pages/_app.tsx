import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wrap N Go',
  description: "Get What You're Craving",
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
