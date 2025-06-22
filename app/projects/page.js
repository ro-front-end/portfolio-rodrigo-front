import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

function Projects() {
  const projects = getProjects();

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center px-4">
      <Image
        className="blur-md absolute inset-0 z-0 object-cover"
        fill
        src="/bg-2.png"
        alt="Abstract background for projects page"
        quality={30}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-8">
          My Projects
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <li
              key={project.id}
              className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-500 ease-in-out"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.url}>
                <Image
                  className="w-full h-64 object-cover rounded-3xl"
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  quality={30}
                />
              </a>

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-b-3xl group-hover:bg-opacity-80 transition duration-300">
                <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl text-center mb-2">
                  {project.title}
                </h3>
                {/* <p className="text-gray-300 text-xs sm:text-sm md:text-base text-center">
                  {project.description}
                </p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
