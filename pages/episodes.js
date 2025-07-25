import Head from 'next/head';
import Link from 'next/link';

export default function episodes() {
  return (
    <>
      <Head>
        <title>episodes – alpha</title>
      </Head>

      {/* Full-width Pink Header with Navigation */}
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

      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">episodes</h2>
        <p className="text-gray-600">coming soon. launching fall 2025.</p>
      </main>
    </>
  );
}
