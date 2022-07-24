import soccer from "../Assets/soccer.svg";

import { SiLinkedin, SiGithub } from "react-icons/si";
import TechStack from "../components/TechStack";

function About() {
  return (
    <div className="flex flex-col place-items-center m-4 mt-8">
      <section className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 place-items-center m-4 mb-12 w-full h-full lg:mt-16  lg:pt-8 lg:flex-row lg:justify-around">
        <div className="object-contain mt-12 lg:mt-4 w-full row-start-2 px-8 row-end-3 lg:row-auto h-full max-w-fit max-h-fit">
          <img className="w-full h-full object-contain" src={soccer} alt="" />
        </div>
        <div className="text-white row-start-1 row-end-1 lg:row-auto h-fit text-center mt-4 lg:px-8 lg:text-left">
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
            technologies, I indulge mysefl in one of these 👇🏻
          </p>
          <ul className="my-4 text-xl text-gray-500">
            <li>Playing/watching soccer ⚽</li>
            <li>Reading books 📚</li>
          </ul>

          <div className="flex gap-8 mt-8 text-primary-dark">
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
        </div>
      </section>

      <section className="flex flex-col justify-center items-center p-4 mx-4 my8 lg:my-16 text-white">
        <h1 className="border-primary-dark border-b-2  rounded-md p-4 font-bold text-3xl lg:text-4xl">
          Tools I use
        </h1>
        <TechStack />
      </section>
    </div>
  );
}

export default About;
