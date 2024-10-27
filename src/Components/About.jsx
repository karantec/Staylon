
import Gallery from "./Gallery";
import Galler from "./Home/Galler";
import Category from "./Navbar/Category";
import Gall from "./Navbar/Gall";

const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 pb-5 pb-lg-0">
            <img className="img-fluid w-100" src="img/about.jpg" alt="About Us" />
          </div>
          <div className="col-lg-6">
            <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">About Us</h6>
            <h1 className="mb-4">Your Best Spa, Beauty & Skin Care Center</h1>
            <h2 className="pl-4 border-left border-primary">
            Staylon BeautyParlour , We known for our services
            </h2>
            <p className="pl-4  text-dark border-left border-primary ">
            A beauty parlour, also known as a Salon beauty or beauty spa, is a business establishment that offers a range of beauty and wellness services. It is a place where individuals can go to enhance their appearance, relax, and indulge in various treatments to take care of their skin, hair, nails, and overall well-being.Beauty parlours are staffed by trained professionals such as hairstylists, estheticians, nail technicians, makeup artists, and massage therapists. They provide expert advice, personalized consultations, and skilled services to meet the unique needs and preferences of each client..
            </p>
            <div className="row pt-3">
              <div className="col-6">
                <div className="bg-light text-center p-4">
                  <h3 className="display-4 text-primary" data-toggle="counter-up">50</h3>
                  <h6 className="text-uppercase">Spa Specialist</h6>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-light text-center p-4">
                  <h3 className="display-4 text-primary" data-toggle="counter-up">999</h3>
                  <h6 className="text-uppercase">Happy Clients</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Galler/>
      <Category/>
    

    </div>
  );
};

export default About;
