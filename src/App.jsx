import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Service from "./Components/Services/Service";
import NotFound from "./Components/NotFound"; // Import the NotFound component
import Appointment from "./Components/Booking/Appointment";
import Gallery from "./Components/Gallery";
import Testimonials from "./Components/Testimonials";
import HomePage from "./Components/Home/HomePage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        {/* Define your existing routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Service />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/testimonial" element={<Testimonials />} />
        {/* 404 Route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
