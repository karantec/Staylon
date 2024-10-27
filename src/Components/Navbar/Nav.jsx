
import { Link } from 'react-router-dom';
import Header from './Header';

const Nav = () => {
  return (
    <div>
    <Header/>
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
        <Link to="/" className="navbar-brand ml-lg-3">
          <h3 className="m-0 text-primary"><span className="text-dark">StayLon</span> Beauty</h3>
        </Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
          <div className="navbar-nav m-auto py-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/services" className="nav-item nav-link">Services</Link>
            <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Our Segments</Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/appointment" className="dropdown-item">Appointment</Link>
                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          <Link to="/appointment" className="btn btn-primary d-none d-lg-block">Book Now</Link>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Nav;
