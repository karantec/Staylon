import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="container mx-auto px-4 py-5">
            <h2 className="text-center text-2xl font-bold mb-4 uppercase">Categories of Services</h2>
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="https://booksy.com/l/wp-content/uploads/2022/01/2274-e1641986301391-995x777.jpg" alt="Category 1" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">Hair Services</h5>
                            <p className="card-text">Beauty parlours offer various haircut options for both men and women.</p>
                            <Link to="/events?category=1" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="https://content.jdmagicbox.com/comp/kurukshetra/s9/9999p1744.1744.180904030534.r9s9/catalogue/harman-beauty-parlour-and-skin-care-ladwa-kurukshetra-beauty-parlours-mfcs1gg5rc.jpg" alt="Category 2" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">Skin Care Services</h5>
                            <p className="card-text">Skin care services are a vital component of beauty parlour offerings.</p>
                            <Link to="/events?category=2" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="https://cucumbabeautysalon.com/wp-content/uploads/2021/10/imahe-800-3.jpg" alt="Category 3" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">Nail Care Services</h5>
                            <p className="card-text">Pedicures are similar to manicures but focus on the feet.</p>
                            <Link to="/events?category=3" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="https://5.imimg.com/data5/GI/HB/DI/SELLER-54443168/wedding-bridal-makeup-service-500x500.png" alt="Category 4" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">MakeUp Services</h5>
                            <p className="card-text">Bridal makeup is one of the most sought-after makeup services.</p>
                            <Link to="/events?category=4" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" alt="Category 5" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">Body Treatment</h5>
                            <p className="card-text">Body treatments focus on the pampering and rejuvenation of the body.</p>
                            <Link to="/events?category=5" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>

                {/* Card 6 */}
               
            </div>
        </div>
    );
};

export default Category;
