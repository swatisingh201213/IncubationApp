
import React from 'react'
// import { Link } from "react-router-dom";

function IMS() {
    return (
        // Start Section Incubation Management System 
        <div className="pt-5 mt-5">
            <section className="about ">
                <div class="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                            <div className="about-img" data-aos="zoom-in" data-aos-delay="100">
                                <img src="/assets/AboutUS/image_aboutUS/incubation.jpg" alt="ims" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="flip-left">
                            <div className="about-text">
                                <h3 class="text-uppercase mb-4 text-orange">
                                    Incubation Managment System
                                </h3>
                                <p class="text-light text-justify">
                                    The Incubator management helps entrepreneurs access the
                                    appropriate form of financing, particular from private
                                    sources. It describes the role of the Incubator in
                                    technology commercialization for entrepreneurs at various
                                    stages of development. The increasing investment in
                                    incubator and accelerator programs, has made the government
                                    and cooperates to look forward to a one stop solution that
                                    would help in digitally transforming the entire cycle of
                                    conceptualizing, developing and managing an incubator.
                                </p>
                                <p class="text-light text-justify">
                                    REVA incubator management will definitely guide and support
                                    the start-ups by providing immense incubator equipment and
                                    platform.
                                </p>
                                {/* <Link
                                        className="btn btn-orange position-relative"
                                        activeClassName="active bg-danger"
                                        to="/login"> 
                                            READ MORE
                                    </Link> */}
                                <a href="https://www.facebook.com/REVAUniversity"> 
                                    <button class="btn btn-orange position-relative">
                                        READ MORE
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    // End Section Incubation Management System
    )
}

export default IMS
