import { getProjects } from "@/lib/projects";

function ProjectsIdPage({ params }) {
  const projectId = parseInt(params.projectId);
  const projects = getProjects();
  const project = projects.find((project) => project.id === projectId);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Proyecto no encontrado
      </div>
    );

  return (
    <div>
      Project:{project.id} {project.title}
    </div>
  );
}

export default ProjectsIdPage;
