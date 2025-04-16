import ProdiggyLogoComponent from "#da/components/logos/ProdiggyLogoComponent";

const Home = () => (
  <div>
    <ProdiggyLogoComponent />
    <h1>{ `Page: ${process.env.VERSION}` }</h1>
  </div>
);

export default Home;
