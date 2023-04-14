import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../components/layout';

function About() {
  return (
    <>
      <Head>
        <title>
          About Page
        </title>
      </Head>
      <Layout>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>
          About
        </h1>
        <Link href="/">Home</Link>
      </Layout>
    </>
  )
}

export default About