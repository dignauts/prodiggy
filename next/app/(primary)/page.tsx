import NavigationListComponent from '#da/components/lists/NavigationListComponent';
import ProdiggyLogoComponent from '#da/components/logos/ProdiggyLogoComponent';

const Home = () => (
  <div>
    <ProdiggyLogoComponent />
    <NavigationListComponent items={[{ name: 'Link', to: '/link' }]} />
  </div>
);

export default Home;
