import type { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (url: string) => fetch(url).then((response) => response.json());

const Home: NextPage = () => {
  const [newFlag, setNewFlag] = useState('');
  const { data: flags, error, mutate: reload } = useSWR('/api/flags', fetcher);

  if (error) return <p>Oops! Internet is down. 😢</p>;
  if (!flags) return <p>loading...</p>;

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
          <form
            className="bg-gray-100 rounded-lg p-4 mt-4 flex"
            onSubmit={async (e) => {
              e.preventDefault();
              await fetch(`/api/flags/${newFlag}/enable`);
              reload();
              setNewFlag('');
            }}
          >
            <input
              className="border w-full bg-gray-50 border-gray-200 py-1 px-2"
              type="text"
              required
              value={newFlag}
              onChange={(e) => setNewFlag(e.target.value)}
            />
            <button
              className="py-2 px-6 w-1/6 ml-6 font-md bg-blue-100 text-blue-600 rounded-xl"
              type="submit"
            >
              Add
            </button>
          </form>

          <ul className="grid gap-3">
            {Object.entries(flags).map(([key, value], index) => (
              <li
                key={key}
                className="grid gap-3 py-2 px-4 grid-cols-4 items-center even:bg-gray-50 even:rounded-xl"
              >
                <span>{index + 1}</span>

                <span>{key}</span>

                {value ? (
                  <button
                    className="p-2 w-32 font-md bg-green-100 text-green-600 rounded-xl"
                    onClick={async () => {
                      await fetch(`/api/flags/${key}/disable`);
                      reload();
                    }}
                  >
                    Enable
                  </button>
                ) : (
                  <button
                    className="p-2 w-32 font-md bg-gray-200 text-gray-600 rounded-xl"
                    onClick={async () => {
                      await fetch(`/api/flags/${key}/enable`);
                      reload();
                    }}
                  >
                    Disable
                  </button>
                )}

                <button
                  className="p-2 w-32 font-md bg-red-100 text-red-600 rounded-xl"
                  onClick={async () => {
                    await fetch(`/api/flags/${key}/remove`);
                    reload();
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
