import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
  // Define the images array with paths and alt text
  const images = [
    { src: "/images/1.jpg", alt: "Gallery Image 1" },
    { src: "/images/2.jpg", alt: "Gallery Image 2" },
    { src: "/images/3.jpg", alt: "Gallery Image 3" },
    { src: "/images/4.jpg", alt: "Gallery Image 4" },
    { src: "/images/5.jpg", alt: "Gallery Image 5" },
    { src: "/images/6.jpg", alt: "Gallery Image 6" },
    { src: "/images/7.jpg", alt: "Gallery Image 7" },
    { src: "/images/8.jpg", alt: "Gallery Image 8" },
    { src: "/images/9.jpg", alt: "Gallery Image 9" },
    { src: "/images/10.jpg", alt: "Gallery Image 10" },
    { src: "/images/11.jpg", alt: "Gallery Image 11" },
    { src: "/images/12.jpg", alt: "Gallery Image 12" },
    { src: "/images/13.jpg", alt: "Gallery Image 13" },
    { src: "/images/14.jpg", alt: "Gallery Image 14" },
    { src: "/images/15.jpg", alt: "Gallery Image 15" },
    { src: "/images/16.jpg", alt: "Gallery Image 16" },
    { src: "/images/18.jpg", alt: "Gallery Image 18" },
    { src: "/images/19.jpg", alt: "Gallery Image 19" },
    { src: "/images/20.jpg", alt: "Gallery Image 20" },
    { src: "/images/21.jpg", alt: "Gallery Image 20" },
    { src: "/images/22.jpg", alt: "Gallery Image 20" }
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container my-4">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <img
              src={image.src}
              alt={image.alt}
              style={imageStyle}
              className="img-fluid"
              onClick={() => handleImageClick(image.src)}
              role="button"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying the clicked image */}
      {selectedImage && (
        <div className="modal show" style={{ display: 'block' }} onClick={handleClose}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <img src={selectedImage} alt="Selected" className="img-fluid" />
              <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;