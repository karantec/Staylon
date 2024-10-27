
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className="container-fluid bg-light d-none d-lg-block">
      <div className="row py-2 px-lg-5">
        <div className="col-lg-6 text-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <small>
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              +91 8271491393
            </small>
            <small className="px-3">|</small>
            <small>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              staylon@gmail.com
            </small>
          </div>
        </div>
        <div className="col-lg-6 text-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-primary px-2" href="https://www.facebook.com/profile.php?id=100092486060047" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="text-primary px-2" href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
         
            <a className="text-primary px-2" href="https://www.instagram.com/staylon85?utm_source=qr&igsh=eXY4bHl6NDY4djV6" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
