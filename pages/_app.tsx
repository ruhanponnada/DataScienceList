import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import {DefaultSeo} from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </>
  );
}

export default MyApp
