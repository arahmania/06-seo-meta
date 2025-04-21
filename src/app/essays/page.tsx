import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Layout from "@/components/Layouts";

const posts = [
  {
    id: 1,
    title: 'Belajar Next.js dari Nol',
    href: '#',
    description: 'Panduan lengkap untuk memulai dengan Next.js, framework React yang powerful untuk membangun aplikasi web modern dengan performa tinggi dan SEO yang baik.',
    imageUrl: '/images/next.jpeg',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    author: {
      name: 'Annisa Rahmania',
      imageUrl: '/images/project2.jpg',
    },
  },
  {
    id: 2,
    title: 'Laravel 12 Apa yang baru ya?',
    href: '#',
    description: 'Mengulas fitur-fitur terbaru dari Laravel 12, termasuk peningkatan performa, fitur keamanan baru, dan tools development yang lebih powerful untuk pengembangan aplikasi PHP modern.',
    imageUrl: '/images/laravel.jpg',
    date: 'Mar 15, 2024',
    datetime: '2024-03-15',
    author: {
      name: 'Annisa Rahmania',
      imageUrl: '/images/project2.jpg',
    },
  },
  {
    id: 3,
    title: 'Jago Tailwind dalam semalam',
    href: '#',
    description: 'Tips dan trik untuk menguasai Tailwind CSS dengan cepat, dari konsep dasar hingga teknik advanced untuk membuat desain web yang responsif dan modern.',
    imageUrl: '/images/tail.jpeg',
    date: 'Mar 14, 2024',
    datetime: '2024-03-14',
    author: {
      name: 'Annisa Rahmania',
      imageUrl: '/images/project2.jpg',
    },
  },
];

export default function Essays() {
  const essaysMetadata = {
    title: 'Essai',
    description: 'Kumpulan tulisan dan artikel tentang pengalaman, pembelajaran, dan pandangan saya seputar teknologi informasi.',
    openGraph: {
      title: 'Essai',
      description: 'Kumpulan tulisan dan artikel tentang pengalaman, pembelajaran, dan pandangan saya seputar teknologi informasi.'
    },
    twitter: {
      card: 'summary',
      title: 'Essai',
      description: 'Kumpulan tulisan dan artikel tentang pengalaman, pembelajaran, dan pandangan saya seputar teknologi informasi.'
    }
  };

  return (
    <Layout metadata={essaysMetadata}>
      <div className="bg-gradient-to-b from-white to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-indigo-800 sm:text-5xl flex items-center justify-center gap-4">
              Essai
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Kumpulan tulisan dan artikel tentang pengalaman, pembelajaran, dan pandangan saya seputar teknologi informasi.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80 transform hover:scale-105 transition duration-300 hover:shadow-xl"
              >
                <img alt="" src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover transform hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-indigo-500/30 ring-inset hover:ring-indigo-500 transition-all duration-300" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img alt="" src={post.author.imageUrl} className="size-6 flex-none rounded-full bg-white/10 hover:ring-2 hover:ring-indigo-400 transition-all duration-300" />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white hover:text-indigo-300 transition-colors duration-300">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-2">{post.description}</p>
                <div className="mt-3 flex items-center text-sm text-indigo-300 group">
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">Baca selengkapnya</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}