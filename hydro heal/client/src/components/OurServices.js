import React from "react";

const OurServices = () => {
    return(
        <section class="our-service container-fluid">
        <div class="container">
            <div class="session-title row">
                <h2>Our Services</h2>
                <p>Not the answer you're looking for? Printing and typesetting inLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s Lorem</p>
            </div>
            <div class="col-sm-12 blog-cont">
                <div class="row no-margin">
                    <div class="col-lg-4 col-md-6 blog-smk">
                        <div class="blog-single">
                            <img src={process.env.PUBLIC_URL +"images/services/service-1.jpg"} alt=""/>

                            <div class="blog-single-det">

                                <h6>Deperssion</h6>

                                <a href="blog_single.html">
                                    <button class="btn btn-primary ">More Detail</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 blog-smk">
                        <div class="blog-single">

                            <img src={process.env.PUBLIC_URL +"images/services/service-2.jpg"} alt=""/>

                            <div class="blog-single-det">

                                <h6>Anxity</h6>

                                <a href="blog_single.html">
                                    <button class="btn btn-primary ">More Detail</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 blog-smk">
                        <div class="blog-single">

                            <img src={process.env.PUBLIC_URL +"images/services/service-3.jpg"} alt=""/>

                            <div class="blog-single-det">

                                <h6>Relationship Issue</h6>

                                <a href="blog_single.html">
                                    <button class="btn btn-primary">More Detail</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 blog-smk">
                        <div class="blog-single">

                            <img src={process.env.PUBLIC_URL +"/images/services/s1.jpg"} alt=""/>

                            <div class="blog-single-det">

                                <h6>Relationship Issue</h6>

                                <a href="blog_single.html">
                                    <button class="btn btn-primary">More Detail</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 blog-smk">
                        <div class="blog-single">

                            <img src={process.env.PUBLIC_URL +"images/services/s2.jpg"} alt=""/>

                            <div class="blog-single-det">

                                <h6>Paediatric Issue</h6>

                                <a href="blog_single.html">
                                    <button class="btn btn-primary">More Detail</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 blog-smk">
                        <div class="blog-single">

                            <img src={process.env.PUBLIC_URL +"/images/services/service-2.jpg"} alt=""/>

                            <div class="blog-single-det">

                                <h6>Neurology Issue</h6>

                                <a href="blog_single.html">
                                    <button class="btn btn-primary">More Detail</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

    );
}
export default OurServices;