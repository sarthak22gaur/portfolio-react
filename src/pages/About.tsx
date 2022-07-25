import soccer from "../Assets/soccer.svg";
import homealt from "../Assets/homealt.svg";
import {
  PageWrapper,
  HeroSectionWrapper,
  HeroContentWrapper,
  HeroIllustrationWrapper,
} from "../components/Wrappers";

import { SiLinkedin, SiGithub } from "react-icons/si";
import TechStack from "../components/TechStack";

function About() {
  return (
    <PageWrapper>
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

export default About;
