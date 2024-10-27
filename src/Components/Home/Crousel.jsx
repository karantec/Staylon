import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  const slides = [
    
    {
      imgSrc: "https://techsquadteam.com/assets/profile/blogimages/c3ea1ee8884886d08081a95dbe4a560b.jpg",
      title: "Facial Treatment",
      description: "Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam"
    },
   
    {
      imgSrc: "https://img.bebeautiful.in/www-bebeautiful-in/content/2.30%20bridal%20kit%20%281%29_1.jpg", // Add your actual image path
      title: "Bridal Makeup",
      description: "Get the perfect bridal look with our expert makeup artists. From natural to glam, we tailor each look to suit your style and personality."
    },
    {
      imgSrc: "https://cdn0.weddingwire.in/article/2962/3_2/960/jpg/122692-indian-hairstyles-for-women.jpeg", // Add your actual image path
      title: "Hair Styling",
      description: "Transform your hair with our professional styling services. Whether it's a haircut, blow-dry, or special occasion styling, we have you covered."
    },
    
  ];

  return (
    <div className="container-fluid p-0 mb-5 pb-5">
      <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li key={index} data-target="#header-carousel" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item position-relative ${index === 0 ? 'active' : ''}`} style={{ minHeight: '100vh' }}>
              <img className="position-absolute w-100 h-100" src={slide.imgSrc} style={{ objectFit: 'cover' }} alt={slide.title} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{ letterSpacing: '3px' }}>Spa & Beauty Center</h6>
                  <h3 className="display-3 text-capitalize text-white mb-3">{slide.title}</h3>
                  <p className="mx-md-5 px-5">{slide.description}</p>
                  <a className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Make Appointment</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
