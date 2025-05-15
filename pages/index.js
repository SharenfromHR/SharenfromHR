import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharen from HR</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#f3e7ff] to-[#c5dfff] text-gray-800 font-sans flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold drop-shadow-lg">
          HR, Sharen speaking. What have you done now?
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-700">
          Your unofficial guide to company equity… and survival.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a href="#ask-sharen" className="px-6 py-3 bg-white border border-gray-300 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Ask Sharen
          </a>
          <a href="/confess" className="px-6 py-3 bg-black text-white border border-black rounded-full font-semibold shadow hover:bg-gray-900 transition">
            Submit a Confession
          </a>
        </div>
      </main>
    </>
  );
}
