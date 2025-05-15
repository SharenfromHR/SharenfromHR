
import Head from 'next/head';

export default function Home() {
  const openChat = () => {
    const iframe = document.querySelector("iframe[src*='chatbase']");
    if (iframe) {
      iframe.contentWindow.postMessage({ event: "openChat" }, "*");
    }
  };

  return (
    <>
      <Head>
        <title>Sharen from HR</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 text-gray-800 font-body flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/sparkle.png')] bg-cover opacity-10 pointer-events-none"></div>
        <h1 className="text-4xl md:text-6xl font-display font-bold drop-shadow-lg z-10">
          HR, Sharen speaking. What have you done now?
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-700 z-10">
          Your unofficial guide to company equity… and survival.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center z-10">
          <button
            onClick={openChat}
            className="px-6 py-3 bg-white border border-gray-300 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-pink-100 hover:text-pink-800"
          >
            Ask Sharen
          </button>
          <a
            href="/confess"
            className="px-6 py-3 bg-black text-white border border-black rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800"
          >
            Confess to Sharen
          </a>
        </div>
      </main>
    </>
  );
}
