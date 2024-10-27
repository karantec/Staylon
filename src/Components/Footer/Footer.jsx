
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer container-fluid position-relative bg-dark py-5" style={{ marginTop: '90px' }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6 pr-lg-5 mb-5">
              <Link to="/" className="navbar-brand">
                <h1 className="mb-3 text-white"><span className="text-primary">Stay</span> Lon</h1>
              </Link>
              <p>A beauty parlour, also known as a Salon beauty or beauty spa, is a business establishment that offers a range of beauty and wellness services. It is a place where individuals can go to enhance their appearance, relax, and indulge in various treatments to take care of their skin, hair, nails, and overall well-being.</p>
              <p><i className="fa fa-map-marker-alt mr-2"></i>sec4 Upper trimurti jewellers front of metro studio, No-CF-34,1st floor ,(Harshwardan plaza, Sector 4, Bokaro Steel City, Jharkhand 827004</p>
              <p><i className="fa fa-phone-alt mr-2"></i>+91 8271491393</p>
              <p><i className="fa fa-envelope mr-2"></i>staylonbeauty@gmail.com</p>
              <div className="d-flex justify-content-start mt-4">
                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div className="row">
                <div className="col-sm-6 mb-5">
                  <h5 className="text-white text-uppercase mb-4">Quick Links</h5>
                  <div className="d-flex flex-column justify-content-start">
                    <p className="text-white-50 mb-2" to="/"><i className="fa fa-angle-right mr-2"></i>Home</p>
                    <p className="text-white-50 mb-2" to="/about"><i className="fa fa-angle-right mr-2"></i>About Us</p>
                    <p className="text-white-50 mb-2" to="/service"><i className="fa fa-angle-right mr-2"></i> Services</p>
                    <p className="text-white-50 mb-2" to="/gallery"><i className="fa fa-angle-right mr-2"></i> Gallery</p>
                    <p className="text-white-50 mb-2" to="/testimonial"><i className="fa fa-angle-right mr-2"></i> Testimonial</p>
                    
                    <p className="text-white-50" to="/contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</p>
                  </div>
                </div>
                <div className="col-sm-6 mb-5">
                  <h5 className="text-white text-uppercase mb-4">Our Services</h5>
                  <div className="d-flex flex-column justify-content-start">
                    <p className="text-white-50 mb-2  " to="#"><i className="fa fa-angle-right mr-2"></i>Hair Services</p>
                    <p className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Skin Care Services</p>
                    <p className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Nail Care Services</p>
                    <p className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>MakeUp Services</p>
                    <p className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>MakeUp Services</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light border-top py-4" style={{ borderColor: 'rgba(256, 256, 256, .15) !important' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0 text-white">&copy; <Link to="#">StaylonBeauty</Link>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0 text-white">Designed by <a href="#" className="text-white">CodingDitto</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
