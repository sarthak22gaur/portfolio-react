import { ProjectCard } from "../components/ProjectCard";
import minimal from "../Assets/minimal.png";

function Projects() {
  return (
    <section className="flex flex-col justify-center items-center p-4 mx-4 my8 lg:my-16 text-white">
      <h1 className="border-primary-dark border-b-2 mb-8  rounded-md p-4 font-bold text-3xl lg:text-4xl">
        A few things I've built
      </h1>

      <div className="text-white m-4 mt-8 p-4 flex flex-wrap gap-8 justify-center items-start ">
        <ProjectCard
          Title="Launching Soon"
          Description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?"
          Livelink="skgr.xyz"
          Repolink="github.com"
          Image={minimal}
          Tech={["Nodejs", "Nextjs", "Firebase", "Planetscale"]}
        />
        <ProjectCard
          Title="Launching Soon"
          Description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae? Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?"
          Livelink="/"
          Repolink="/"
          Image={minimal}
          Tech={["Nodejs", "Nextjs", "Firebase", "Planetscale"]}
        />
      </div>
    </section>
  );
}

export default Projects;
