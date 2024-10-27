import Category from "./Category";
import Hero from "./Hero";
import Mainpage from "./MainPage";

const Service = () => {
  return (
    <div className="pt-5 mt-9">
    <Hero/> {/* Add top padding here */}
        <Mainpage />
        <Category />
    </div>
  );
}

export default Service;
