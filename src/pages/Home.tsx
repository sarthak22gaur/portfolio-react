import illustration from "../Assets/illustration.svg";
import homeillustration from "../Assets/homeillustration.svg";
import homealt from "../Assets/homealt.svg";
import {
  PageWrapper,
  HeroSectionWrapper,
  HeroContentWrapper,
  HeroIllustrationWrapper,
} from "../components/Wrappers";

function Home() {
  return (
    <PageWrapper>
      <HeroSectionWrapper>
        <HeroContentWrapper>
          <h3 className="text-2xl">Hello!</h3>
          <h1 className="text-primary-dark font-light text-3xl mt-4 lg:text-4xl">
            I'm <span className="font-bold">Sarthak Gaur</span>
          </h1>
          <p className="text-xl italic mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
    </PageWrapper>
  );
}

export default Home;
