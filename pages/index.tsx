import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Feature Flag App</title>
        <meta name="description" content="Feature Flag App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="p-4">
          <h1 className="text-xl font-bold">Feature Flag App</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
