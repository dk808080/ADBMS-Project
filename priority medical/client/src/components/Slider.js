import React from "react";

const Slider = () => {
    return(
        <div class="slider">
        <div class="owl-carousel ">
           
            <div class="item">
                <div class="slider-img"><img src={process.env.PUBLIC_URL +"images/slider/slider-2.jpg"} alt=""/></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions">
                                <h1 class="slider-title">It's time for better help.</h1>
                                <p class="slider-text hidden-xs">We can help you conquer a wide range of psychological and emotional problems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            </div>
        </div>
    );
}

export default Slider;