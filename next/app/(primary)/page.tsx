import GetStartedSectionModule from '#da/modules/sections/GetStartedSectionModule';
import HeroSectionModule from '#da/modules/sections/HeroSectionModule';
import TrustedBySectionModule from '#da/modules/sections/TrustedBySectionModule';
import WhyUsSectionModule from '#da/modules/sections/WhyUsSectionModule';

const Home = () => (
  <>
    <HeroSectionModule />
    <WhyUsSectionModule />
    <TrustedBySectionModule />
    <GetStartedSectionModule />
  </>
);

export default Home;
