import soccer from "../Assets/soccer.svg";

import TechStack from "../components/TechStack";

function About() {
  return (
    <div className="w-full flex flex-col place-items-center">
      <section className="flex flex-col place-items-center m-4 mb-12 w-full h-full lg:mt-16  lg:pt-8 lg:flex-row lg:justify-around">
        <div className="mt-4 w-full h-full max-w-md max-h-fit">
          <img className="w-full h-full" src={soccer} alt="" />
        </div>
        <div className="text-white h-fit text-center lg:text-left p-4">
          <h3 className="text-2xl">Hi!</h3>
          <h1 className="text-primary-dark font-light text-3xl mt-4 lg:text-4xl">
            I'm <span className="font-bold uppercase">Sarthak Gaur</span>
          </h1>
          <p className="text-xl italic mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center lg:items-baseline p-4 mx-4 my8 lg:my-16 text-white">
        <h1 className="px-4 font-bold text-3xl lg:text-4xl">Tools I work with</h1>
        <TechStack />
      </section>
    </div>
  );
}

export default About;
