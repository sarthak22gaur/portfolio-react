import illustration from '../Assets/illustration.svg';

function Home() {
  return (
    <section className="flex flex-col place-items-center m-4  h-full w-full lg:mt-16 p-4 lg:pt-8 lg:flex-row lg:justify-around">
        <div className="text-white h-fit text-center lg:text-left p-4">
          <h3 className="text-2xl">
            Hi!
          </h3>
          <h1 className="text-primary-dark font-light text-3xl mt-4 lg:text-4xl">
            I'm <span className="font-bold">Sarthak Gaur</span>
          </h1>
          <p className="text-xl italic mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      <div className="mt-4 w-full h-full max-w-md max-h-fit">
        <img className="w-full h-full" src={illustration} alt="" />
      </div>
    </section>
  );
}

export default Home;
