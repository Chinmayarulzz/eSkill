import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';

function Hello() {
  return (
    <>
        <Head>
            <title>
                Hello Page
            </title>
        </Head>
        <Layout>
          <h1>
            Hello World
          </h1>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Image
              src="/vercel.svg"
              height={256}
              width={256}
              alt="Chinmaya Patel"
            />
          </div>
        </Layout>
    </>
  )
}

export default Hello