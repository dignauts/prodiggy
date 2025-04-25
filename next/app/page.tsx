import ProdiggyLogoComponent from '#da/components/logos/ProdiggyLogoComponent';
import LinkComponent from '#da/components/main/LinkComponent';

const Home = () => (
  <div>
    <ProdiggyLogoComponent />
    <LinkComponent
      color='navigation'
      fontWeight={500}
      to="/456y7u"
      variant='p4'
    >
      ABC
    </LinkComponent>
  </div>
);

export default Home;
