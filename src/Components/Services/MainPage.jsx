import { Zap, Camera, Aperture, Edit, Feather, Play } from 'react-feather';

const Mainpage = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-28 mx-auto shadow-lg">
                <div className="text-center mb-24">
                    <h5 className="sm:text-3xl   pt-20 text-xl title-font font-bold text-gray-900 uppercase font-serif">
                        We Provide You the Best Services
                    </h5>
                    <p className="lg:w-1/2 w-full leading-relaxed font-bold font-serif text-black mx-auto">
                        At a Cheaper and Valuable Price
                    </p>
                </div>
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                                    <Zap />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Hair Services</h2>
                                <p className="leading-relaxed text-base font-serif text-black">
                                    Hair Cut and Styling, Hair Coloring and Highlights, Hair Treatments, Hair Extensions and Wig Styling
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                                    <Camera />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Skin Care Services</h2>
                                <p className="leading-relaxed text-base font-serif text-black">
                                    Facials, Skin Treatments, Chemical Peels, Microdermabrasion, Skin Rejuvenation
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                                    <Aperture />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Nail Services</h2>
                                <p className="leading-relaxed text-base font-serif text-black">
                                    Manicures, Pedicures, Nail Extensions and Overlays, Nail Art and Designs, Nail Repairs and Maintenance
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                                    <Edit />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Makeup & Hair Styling</h2>
                                <p className="leading-relaxed text-base font-serif text-black">
                                    Bridal Makeup, Party and Event Makeup, Special Effects Makeup, Makeup Lessons and Tutorials, Airbrush Makeup
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                                    <Feather />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Body Treatment</h2>
                                <p className="leading-relaxed text-base font-serif text-black">
                                    Massages, Body Wraps and Scrubs, Waxing and Threading, Laser Hair Removal, Spray Tanning
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                                    <Play />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Spa Services</h2>
                                <p className="leading-relaxed text-base font-serif text-black">
                                    Full Body Massages, Hot Stone Massages, Aromatherapy Massages, Spa Facials, Body Scrubs and Wraps
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mainpage;
