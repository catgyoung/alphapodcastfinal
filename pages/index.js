import Footer from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>alpha – bold voices. brilliant minds.</title>
      </Head>

      <header className="bg-pink-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight font-serif">alpha</div>
          <nav className="space-x-6 text-sm font-medium uppercase">
            <Link href="/"><span className="cursor-pointer">home</span></Link>
            <Link href="/about"><span className="cursor-pointer">about</span></Link>
            <Link href="/episodes"><span className="cursor-pointer">episodes</span></Link>
          </nav>
        </div>
      </header>

      <section className="bg-pink-600 text-white text-center py-32">
        <h1 className="text-5xl font-serif font-bold mb-4">alpha</h1>
        <p className="text-lg mb-6">bold voices. brilliant minds. breaking barriers.</p>
        <Link href="/about">
          <button className="bg-white text-pink-600 font-semibold py-2 px-6 rounded hover:bg-pink-100 transition">
            ABOUT ALPHA
          </button>
        </Link>
      </section>

      <section className="text-center py-16 bg-white">
        <h2 className="text-xl font-semibold mb-2">latest episode</h2>
        <p className="text-gray-500">coming soon</p>
      </section>

      <section className="bg-gray-100 py-16 px-4 rounded-md shadow-md text-center">
        <h2 className="text-xl font-semibold mb-2 lowercase">be the first to know</h2>
        <p className="text-gray-600 mb-6">alpha launches fall 2025 — sign up below for updates:</p>
        <form
          action="https://formspree.io/f/xgvzkvgy"
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 items-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="px-4 py-2 border border-gray-300 rounded w-full"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded font-semibold hover:bg-pink-700 transition"
          >
            Notify Me
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}
<Footer />




