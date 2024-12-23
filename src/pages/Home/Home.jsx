import Banner from "./Banner";
import Jobs from "./Jobs";
import Success from "./Success";

const Home = () => {
  return (
    <div className="space-y-10 pb-10">
      <Banner></Banner>
      <Success></Success>
      <Jobs></Jobs>
    </div>
  );
};

export default Home;
