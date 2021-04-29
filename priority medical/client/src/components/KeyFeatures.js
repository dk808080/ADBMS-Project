import React from "react";

const KeyFeatures = () => {
    return(
        <div id="features" class="features container-fluid">
        <div class="container">
            <div class="session-title">
                <h2>Key Features of our Hospital</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, inventore</p>
            </div>
            <div class="ker-featur-row row">
                <div data-aos="fade-right" data-aos-duration="1500" class="col-md-4 featurecol feature-left">
                    <div class="single-feature">

                        <div class="detail">
                            <h6>100% Safety</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatem, inventore</p>
                        </div>
                        <div class="icon">
                            <i class="far fa-bell"></i>
                        </div>


                    </div>
                    <div class="single-feature">

                        <div class="detail">
                            <h6>Friendly Doctors</h6>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.
                                Voluptatem, inventore</p>
                        </div>
                        <div class="icon">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>

                </div>
                <div class="col-md-4 featur-image">
                    <img src={process.env.PUBLIC_URL + "images/boct.jpg"} alt=""/>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" class="col-md-4 featurecol feature-right">

                    <div class="single-feature">
                        <div class="icon">
                            <i class="far fa-images"></i>
                        </div>
                        <div class="detail">
                            <h6>Clean Environment</h6>
                            <p>Lorem ipsum dolor sit amet, consec tetur adipi sicing elit.
                                Voluptatem, inventore</p>
                        </div>
                    </div>
                    <div class="single-feature">
                        <div class="icon">
                            <i class="fab fa-audible"></i>
                        </div>
                        <div class="detail">
                            <h6>Medical Research</h6>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.
                                Voluptatem, inventore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default KeyFeatures;