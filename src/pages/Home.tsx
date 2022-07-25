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
    </PageWrapper>
  );
}

export default Home;
