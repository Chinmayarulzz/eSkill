import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function Hello() {
  return (
    <>
        <Head>
            <title>
                Hello Page
            </title>
        </Head>
        <h1>
            Hello World
        </h1>
        <Link href="/">Home</Link>
        <Image
          src="/vercel.svg"
          height={256}
          width={256}
          alt="Chinmaya Patel"
        />
    </>
  )
}

export default Hello