import Image, { StaticImageData } from "next/image";
import image1 from "../../../public/images/infoevv.jpg";
import image2 from "../../../public/images/ars.jpeg";
import image3 from "../../../public/images/portofolio.jpeg";
import Layout from "@/components/Layouts";

type ProjectProps = {
  id: number;
  name: string;
  category: string;
  url: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  technologies: string[];
  description: string;
};

const projects: ProjectProps[] = [
  {
    id: 1,
    name: "InfoEV",
    category: "Website",
    url: "https://www.infoev.id/",
    imageSrc: image1,
    imageAlt: "InfoEV",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    description: "Website informasi kendaraan listrik yang menyediakan data dan artikel terkait perkembangan EV di Indonesia."
  },
  {
    id: 2, 
    name: "Portofolio",
    category: "Website",
    url: "https://example.com/project2",
    imageSrc: image2,
    imageAlt: "Portofolio",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Website portfolio personal yang menampilkan proyek-proyek, keahlian, dan pengalaman profesional."
  },
  {
    id: 3,
    name: "Arsip surat",
    category: "Website",
    url: "https://example.com/project2",
    imageSrc: image3,
    imageAlt: "arsip surat",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Sertifikasi BNSP - website arsip surat untuk pengelolaan surat"
  }
];

export default function Projects() {
  const projectsMetadata = {
    title: 'Proyek',
    description: 'Kumpulan proyek yang telah saya kerjakan',
    openGraph: {
      title: 'Proyek',
      description: 'Kumpulan proyek yang telah saya kerjakan'
    },
    twitter: {
      card: 'summary',
      title: 'Proyek',
      description: 'Kumpulan proyek yang telah saya kerjakan'
    }
  };

  return (
    <Layout metadata={projectsMetadata}>
      <div className="bg-gradient-to-b from-white via-indigo-50 to-white min-h-screen py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight animate-fade-in">Proyek</h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up">Kumpulan proyek yang telah saya kerjakan</p>
          </div>
          
          <div className="flex items-center justify-between space-x-4 mb-12">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Proyek Saya</h2>
            <a href="#" className="group text-sm font-medium whitespace-nowrap text-indigo-600 hover:text-purple-500 flex items-center transition-all duration-300 hover:translate-x-2">
              Lihat Semua
              <span aria-hidden="true" className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300"> →</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-indigo-50"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                  >
                    <div className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Lihat Detail Proyek
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                      <a href={project.url}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {project.name}
                      </a>
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-800 transform group-hover:scale-105 transition-transform duration-300">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 border border-indigo-100 hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-200 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
