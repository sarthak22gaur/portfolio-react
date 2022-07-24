import illustration from '../Assets/illustration.svg';

function Home() {
  return (
    <div className='flex flex-col place-items-center m-4 mt-8'>
    <section className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 place-items-center m-4 mb-12 w-full h-full lg:mt-16  lg:pt-8 lg:flex-row lg:justify-around">
        <div className="text-white row-start-1 row-end-1 lg:row-auto h-fit text-center mt-4 lg:px-8 lg:text-left">
          <h3 className="text-2xl">
            Hello!
          </h3>
          <h1 className="text-primary-dark font-light text-3xl mt-4 lg:text-4xl">
            I'm <span className="font-bold">Sarthak Gaur</span>
          </h1>
          <p className="text-xl italic mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      <div className="object-contain mt-12 lg:mt-4 w-full row-start-2 px-8 row-end-3 lg:row-auto h-full max-w-fit max-h-fit">
        <img className="w-full h-full object-contain" src={illustration} alt="" />
      </div>
    </section>
    </div>
  );
}

export default Home;
