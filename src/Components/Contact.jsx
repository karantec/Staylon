import React from 'react';

const Contact = () => {
    return (
        <>
            {/* Jumbotron Start */}
            <div className="jumbotron jumbotron-fluid bg-jumbotron" style={{ marginBottom: '90px' }}>
                <div className="container text-center py-5">
                    <h3 className="text-white display-3 mb-4">Contact</h3>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href="/">Home</a></p>
                        <i className="far fa-circle px-3"></i>
                        <p className="m-0">Contact</p>
                    </div>
                </div>
            </div>
            {/* Jumbotron End */}

            {/* Contact Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                                <iframe
                                    className="position-absolute w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14616.334976657268!2d86.142228!3d23.672963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4224c00000001%3A0x41747cce54aa8af4!2sSTAYLON%20BEAUTY%20AND%20SPA%20SALON!5e0!3m2!1sen!2sin!4v1730039158051!5m2!1sen!2sin"
                                    frameBorder="0"
                                    style={{ border: '0' }}
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex="0"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                                <h1 className="mb-4">Contact For Any Query</h1>
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" noValidate>
                                    <div className="form-row">
                                        <div className="col-sm-6 control-group">
                                            <input
                                                type="text"
                                                className="form-control border-0 p-4"
                                                id="name"
                                                placeholder="Your Name"
                                                required
                                                data-validation-required-message="Please enter your name"
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="col-sm-6 control-group">
                                            <input
                                                type="email"
                                                className="form-control border-0 p-4"
                                                id="email"
                                                placeholder="Your Email"
                                                required
                                                data-validation-required-message="Please enter your email"
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control border-0 p-4"
                                            id="subject"
                                            placeholder="Subject"
                                            required
                                            data-validation-required-message="Please enter a subject"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className="form-control border-0 py-3 px-4"
                                            rows="3"
                                            id="message"
                                            placeholder="Message"
                                            required
                                            data-validation-required-message="Please enter your message"
                                        ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>
    );
};

export default Contact;
