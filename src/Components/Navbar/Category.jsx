
import { Zap, Camera, Aperture, Edit, Feather, Play } from 'react-feather';

const Category = () => {
  return (
    <section className="text-dark">
      <div className="container py-5 shadow-lg">
        <div className="text-center mb-4">
          <h1 className="display-5 font-weight-bold text-uppercase">
            We Provide you the best services
          </h1>
          <p className="lead font-weight-bold">
            At a cheaper and valuable Price
          </p>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="border border-light p-4 rounded">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning mb-3" style={{ width: '50px', height: '50px' }}>
                <Zap className="text-warning" />
              </div>
              <h2 className="h5 font-weight-medium">Hair Services</h2>
              <p className="text-dark">
                Hair Cut and Styling, Hair coloring and highlights, Hair treatments, Hair extensions and wig styling.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="border border-light p-4 rounded">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning mb-3" style={{ width: '50px', height: '50px' }}>
                <Camera className="text-warning" />
              </div>
              <h2 className="h5 font-weight-medium">Skin Care Services</h2>
              <p className="text-dark">
                Facials, Skin treatments, Chemical peels, Microdermabrasion, Skin rejuvenation.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="border border-light p-4 rounded">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning mb-3" style={{ width: '50px', height: '50px' }}>
                <Aperture className="text-warning" />
              </div>
              <h2 className="h5 font-weight-medium">Nail Services</h2>
              <p className="text-dark">
                Manicures, Pedicures, Nail extensions and overlays, Nail art and designs, Nail repairs and maintenance.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="border border-light p-4 rounded">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning mb-3" style={{ width: '50px', height: '50px' }}>
                <Edit className="text-warning" />
              </div>
              <h2 className="h5 font-weight-medium">Makeup & Hair Styling</h2>
              <p className="text-dark">
                Bridal makeup, Party and event makeup, Special effects makeup, Makeup lessons and tutorials, Airbrush makeup.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="border border-light p-4 rounded">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning mb-3" style={{ width: '50px', height: '50px' }}>
                <Feather className="text-warning" />
              </div>
              <h2 className="h5 font-weight-medium">Body Treatment</h2>
              <p className="text-dark">
                Massages, Body wraps and scrubs, Waxing and threading, Laser hair removal, Spray tanning.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="border border-light p-4 rounded">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning mb-3" style={{ width: '50px', height: '50px' }}>
                <Play className="text-warning" />
              </div>
              <h2 className="h5 font-weight-medium">Spa Services</h2>
              <p className="text-dark">
                Full body massages, Hot stone massages, Aromatherapy massages, Spa facials, Body scrubs and wraps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
