import '../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Script src="https://kit.fontawesome.com/38d696846e.js" id="scriptBeforeInteractive"/>
      <Head>
        <title>Altair Rostam | Full-Stack Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
