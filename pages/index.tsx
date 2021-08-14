import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Feature Flag App</title>
        <meta name="description" content="Feature Flag App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">Feature Flag App</h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
