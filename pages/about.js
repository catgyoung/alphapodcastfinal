import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About – alpha</title>
      </Head>

      <header className="bg-pink-600 text-white py-6 mb-10">
  <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
    <div className="text-2xl font-bold tracking-tight font-serif">alpha</div>
    <nav className="space-x-6 text-sm font-medium uppercase">
      <Link href="/"><span className="cursor-pointer">home</span></Link>
      <Link href="/about"><span className="cursor-pointer">about</span></Link>
      <Link href="/episodes"><span className="cursor-pointer">episodes</span></Link>
    </nav>
  </div>
</header>

      <main className="max-w-6xl mx-auto px-6 py-10 font-sans text-lg leading-relaxed">

        {/* About Alpha */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-pink-600 font-bold text-sm uppercase text-center">About Alpha</h2>
            <h3 className="text-2xl font-bold text-center">
              alpha is for the firsts. The onlys. The originals.
            </h3>
            <p>
              This isn’t just a podcast. It’s a call to the women who’ve walked into rooms not built for them – and stayed.
              To those who’ve felt the weight of being brilliant and underestimated at the same time. To the ones who’ve led quietly,
              taught fearlessly, and built relentlessly.
            </p>
            <p>
              alpha is here to reflect what they’ve known all along: they’ve always belonged.
            </p>
            <p>
              Named for the beginning – the first – alpha is a platform created to center the voices of women in science,
              technology, engineering, and math. Through honest conversations, unapologetic storytelling, and shared
              experience, alpha brings visibility to the power, purpose, and persistence of women who are shaping the future of their fields.
            </p>
            <p>Welcome to alpha.</p>
          </div>
        </section>

        {/* About Catharine */}
        <section className="mb-32 text-center">
          <h2 className="text-pink-600 font-bold text-sm uppercase mb-8">About Catharine</h2>
          <div className="flex flex-col items-center space-y-6">
            <Image
              src="/Catharine_Bio_Podcast.jpeg"
              alt="Catharine Young"
              width={360}
              height={480}
              className="rounded-lg object-cover"
            />
            <h3 className="text-2xl font-bold">
              I’m a scientist. An immigrant. A mother. A builder.
            </h3>
            <div className="w-full lg:w-3/4 text-left space-y-6">
              <p>
                I’ve worked across research, policy, advocacy, and global health, from the lab to the White House, and I’ve carried both ambition and heartbreak along the way.
              </p>
              <p>
                In every space I’ve been, I’ve met women who are pushing science forward and leading with clarity. Women who are transforming their fields while holding far more than what’s written in their titles.
              </p>
              <p>alpha was born from those conversations.</p>
              <p>
                It came from seeing just how much brilliance was already out there — and how few platforms reflected it back. From hearing women in STEM name the stakes of their work, their leadership, their vision, and knowing that those stories weren’t optional. They were essential.
              </p>
              <p>
                My work has always lived at the intersection of science and systems change. I’ve helped launch global initiatives, advised policy at the highest levels, and built coalitions across sectors and countries. But alpha is different. It’s not about institutions. It’s about connection. 
              </p>
              <p>
                This isn’t about giving women in STEM a voice. It’s about building the kind of platform their voices were always meant for.
              </p>
            </div>
          </div>
        </section>

        {/* Email Sign-Up */}
<section className="bg-gray-100 py-16 px-4 rounded-md shadow-md text-center">
  <h2 className="text-xl font-semibold mb-2 lowercase">be the first to know</h2>
  <p className="mb-6 text-gray-600">
    alpha launches fall 2025 — sign up below for updates:
  </p>

  <form
    action="https://formspree.io/f/xgvzkvgy"
    method="POST"
    className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 items-center"
  >
    <input
      type="email"
      name="email"
      placeholder="enter your email"
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
</main>
</>
);
}

