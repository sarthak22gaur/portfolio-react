import { ProjectCard } from "../components/ProjectCard";
import minimal from "../Assets/minimal.png";
import homeillustration from "../Assets/homeillustration.svg";

import {
  PageWrapper,
  HeroSectionWrapper,
  HeroContentWrapper,
  HeroIllustrationWrapper,
} from "../components/Wrappers";

import { SiLinkedin, SiGithub } from "react-icons/si";
import soccer from "../Assets/soccer.svg";

import TechStack from "../components/TechStack";




function Home() {
  return (
    <PageWrapper>
      <HeroSectionWrapper>
        <HeroContentWrapper>
          <h3 className="text-2xl">Hello! my name is</h3>
          <h1 className="text-primary-dark font-semibold text-4xl mt-4 lg:text-8xl">
            Sarthak Gaur
          </h1>
          <p className="text-xl italic mt-4">
            and i build experiences for the web.
          </p>
        </HeroContentWrapper>
        <HeroIllustrationWrapper>
          <img
            className="w-full h-full object-contain"
            src={homeillustration}
            alt=""
          />
        </HeroIllustrationWrapper>
      </HeroSectionWrapper>


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

      <HeroSectionWrapper>
        <HeroIllustrationWrapper>
          <img className="w-full h-full object-contain" src={soccer} alt="" />
        </HeroIllustrationWrapper>
        <HeroContentWrapper>
          <h3 className="text-2xl font-light">A FEW THINGS ABOUT ME 😃</h3>
          <h1 className="font-light text-3xl mt-8 lg:text-4xl">
            I'm pursuing
            <span className="leading-relaxed font-bold text-primary-dark">
              {" "}
              MSc in Computer Science{" "}
            </span>
            at the
            <span className="leading-relaxed font-bold text-primary-dark">
              {" "}
              University of Texas at Dallas
            </span>
          </h1>
          <p className="text-xl text-gray-500 italic mt-12">
            When I'm not building stuff for the web or trying out new
            tech, I indulge myself in one of these 👇🏻
          </p>
          <ul className="my-4 text-xl text-gray-500">
            <li>Playing/watching soccer ⚽</li>
            <li>Reading books 📚</li>
          </ul>

          <div className="flex gap-8 justify-center lg:justify-start mt-8 text-primary-dark">
            <a href="/">
              <i>
                <SiLinkedin size="28" />
              </i>
            </a>
            <a href="/">
              <i>
                <SiGithub size="28" />
              </i>
            </a>
          </div>
        </HeroContentWrapper>
      </HeroSectionWrapper>

      <section className="flex flex-col justify-center items-center p-4 mx-4  lg:my-8 text-white">
        <h1 className="border-primary-dark border-b-2  rounded-md p-4 font-bold text-3xl lg:text-4xl">
          Tools I use
        </h1>
        <TechStack />
      </section>
    </PageWrapper>
  );
}

export default Home;
