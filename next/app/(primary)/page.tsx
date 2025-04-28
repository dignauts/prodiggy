import NavigationListComponent from '#da/components/lists/NavigationListComponent';

const Home = () => (
  <div>
    <NavigationListComponent items={[{ name: 'Link', to: '/link' }]} />
  </div>
);

export default Home;
