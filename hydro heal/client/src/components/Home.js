import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import KeyFeatures from "./KeyFeatures";
import OurServices from "./OurServices";
import Aboutus from "./Aboutus";
import Ourteam from "./Ourteam";
import Footer from "./Footer";
import "./assets/css/bootstrap.min.css";
import "./assets/css/all.min.css";
import "./assets/css/animate.css";
//import "./assets/plugins/slider/css/owl.carousel.min.css";
import "./assets/plugins/slider/css/owl.theme.default.css";
import "./assets/css/style.css";

const Home = () =>{
return(
<div>
<Header/>
<Slider/>
<KeyFeatures/>
<OurServices/>
<Aboutus/>
<Ourteam/>
<Footer/>
</div>
);
}

export default Home;