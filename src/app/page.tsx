import { CloudArrowUpIcon, CircleStackIcon, CommandLineIcon, LanguageIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import Layout from "@/components/Layouts";

const features = [
  {
    name: 'Bahasa Pemrograman',
    icon: LanguageIcon,
    skills: ['html', 'css', 'js', 'php', 'python', 'java', 'react']
  },
  {
    name: 'Framework',
    icon: CloudArrowUpIcon,
    skills: ['nextjs', 'tailwind', 'bootstrap', 'laravel']
  },
  {
    name: 'Database',
    icon: CircleStackIcon,
    skills: ['mysql']
  },
  {
    name: 'Tools',
    icon: CommandLineIcon,
    skills: ['figma', 'vscode', 'git', 'github']
  },
];

async function getProfileData() {
  return {
    name: "Annisa Rahmania Putri",
    intro: "Merupakan Mahasiswa Aktif semester 8 dari Kampus Politeknik Negeri Malang Pada Program Studi D4 Teknik Informatika. Saya merupakan mahasiswa aktif dengan akademik dan kemampuan interpersonal yang baik. Memiliki kemampuan pada web development, pengolahan data dan design, mempunyai kemampuan komunikasi dan time manajemen yang baik, serta terlibat aktif dalam kegiatan kemahasiswaan kampus. Saya sangat berminat untuk memulai lingkup profesional di bidang Web Development, Data Analyst ataupun Design, dan juga sangat terbuka untuk kesempatan lainnya.",
    skills: ["Fullstack Developer", "Data Analyst", "UI/UX Designer"],
    social: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/annisarahmania/",
        logo: "instagram"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/annisarahmania/",
        logo: "linkedin"
      },
      {
        name: "Github",
        url: "https://www.github.com/annisarahmania/",
        logo: "github"
      },
      {
        name: "Gmail",
        url: "mailto:annisarahmania@gmail.com",
        logo: "gmail"
      }
    ],
    image: "/images/pasfoto.jpg",
  };
}

export default async function Home() {
  const profileData = await getProfileData();
  
  const homeMetadata = {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
    openGraph: {
      title: 'Tentang Saya',
      description: 'Halaman tentang saya.'
    },
    twitter: {
      card: 'summary',
      title: 'Tentang Saya',
      description: 'Halaman tentang saya.'
    }
  };

  return (
    <Layout metadata={homeMetadata}>
      <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white py-16 px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto flex flex-col gap-y-16">
            <div className="w-full">
              <div className="text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-transparent to-indigo-100 opacity-30 blur-3xl -z-10" />
                <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 animate-fade-in">Tentang Saya</h2>
                <p className="mt-4 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-slide-up">
                  {profileData.name}
                </p>

                <div className="mt-8">
                  <Image
                    alt="Profile photo"
                    src={profileData.image}
                    width={200}
                    height={200}
                    className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition duration-300"
                  />
                </div>

                <p className="mt-8 text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                  {profileData.intro}
                </p>
                <div className="mt-10 flex justify-center gap-6">
                  {profileData.skills.map((skill, index) => (
                    <span key={index} className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-indigo-200 transform hover:-translate-y-1 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex justify-center gap-6">
                  {profileData.social.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-300" />
                      <img
                        src={`https://skillicons.dev/icons?i=${item.logo}`}
                        alt={item.name}
                        className="w-12 h-12 relative transform group-hover:scale-110 transition duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl mt-16">
          <div className="mx-auto text-center">
            <p className="mt-4 text-4xl font-bold text-indigo-800 mb-12">Teknologi Dan Keahlian</p>
            <dl className="max-w-2xl mx-auto grid grid-cols-1 gap-8 text-left">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-12 transform hover:translate-x-2 transition duration-300">
                  <dt className="text-xl font-bold text-indigo-700 flex items-center">
                    <feature.icon className="h-8 w-8 text-indigo-500 mr-3" />
                    {feature.name}
                  </dt>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="w-full flex justify-center">
                      <a href="https://skillicons.dev">
                        <img
                          src={`https://skillicons.dev/icons?i=${feature.skills.join(',')}`}
                          alt={`${feature.name} skills`}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
