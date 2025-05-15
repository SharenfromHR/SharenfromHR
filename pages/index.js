import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6">
      <Head>
        <title>Sharen from HR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">Welcome to Sharen from HR</h1>
      <p className="text-lg max-w-xl mb-8">Equity education with attitude. Sharen explains your share plans, minus the HR waffle.</p>
      <form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confession">
          Anonymous Share Plan Confession:
        </label>
        <textarea id="confession" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Tell Sharen what you did..."></textarea>
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      <p className="text-sm text-gray-500">This is not financial advice. It's better — it's Sharen.</p>
    </div>
  );
}
