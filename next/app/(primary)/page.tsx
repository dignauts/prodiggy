import GetStartedSectionModule from '#da/modules/sections/GetStartedSectionModule';
import HeroSectionModule from '#da/modules/sections/HeroSectionModule';
import ModulesSectionModule from '#da/modules/sections/ModulesSectionModule';
import PricingSectionModule from '#da/modules/sections/PricingSectionModule';
import TestimonialsSectionModule from '#da/modules/sections/TestimonialsSectionModule';
import TrustedBySectionModule from '#da/modules/sections/TrustedBySectionModule';
import WhyUsSectionModule from '#da/modules/sections/WhyUsSectionModule';

const Home = () => (
  <>
    <HeroSectionModule />
    <WhyUsSectionModule />
    <TrustedBySectionModule />
    <PricingSectionModule />
    <ModulesSectionModule />
    <TestimonialsSectionModule />
    <GetStartedSectionModule />
  </>
);

export default Home;
