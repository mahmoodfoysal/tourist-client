import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
<>
            <footer className="bg-dark text-center text-white mt-5">
                <div className="container p-4">
                    <section className="social-media">
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faTelegram} />
                        </Link>
                    </section>
                    <section className="mt-4">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="form5Example2"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Information</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>Open 24 Hours</li>
                                        <li>Phone: +880 1700-000000</li>
                                        <li>Email: medicare@gmail.com</li>
                                        <li>Location: Dhaka, Bangladesh</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Services</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>Dental Surgery</li>
                                        <li>Eyes Operation</li>
                                        <li>Orthopedic</li>
                                        <li>Neurology</li>
                                        <li>General Surgery</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Quick Contact</h5>
                                    <input className="form-control mb-2" type="email" placeholder="Enter Email" />
                                    <textarea className="form-control" placeholder="Enter Message" cols="30" rows="3"></textarea>
                                    <button className="btn btn-outline-success btn-sm mt-2">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    );
};

export default Footer;