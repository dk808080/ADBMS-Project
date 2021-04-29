import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/all.min.css";
import "./assets/css/animate.css";
//import "./assets/plugins/slider/css/owl.carousel.min.css";
import "./assets/plugins/slider/css/owl.theme.default.css";
import "./assets/css/style.css";
import {Link} from "react-router-dom";
const Header = () =>{
return(
    <header class="container-fluid">
    <div class="container">
        <div class="row top-row">
            <div class="col-md-4 logo">
                <img src={process.env.PUBLIC_URL + "images/logo.png"}  style = {{height:"100px"}} alt=""/>
                <a data-toggle="collapse" data-target="#menu-jk" href="#menu-jk"><i class="fas d-block d-md-none small-menu fa-bars"></i></a>
            </div>
            <div class="col-md-8 navse">
                <div class="row">
                    <div class="col-lg-4 d-none d-lg-block cinfo">
                        <div class="cdetl">
                            <div class="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="detail">
                                <b>Location</b>
                                <p>Jodhpur, Rajasthan</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-none d-md-block cinfo">
                        <div class="cdetl">
                            <div class="icon">
                                <i class="far fa-envelope"></i>
                            </div>
                            <div class="detail">
                                <b>Email</b>
                                <p>support@hydroheal.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-none d-md-block cinfo">
                        <div class="cdetl">
                            <div class="icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="detail">
                                <b>Call Us</b>
                                <p>8949788365</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div id="menu-jk" class="nav-sectionmk  row" style={{backgroundColor:"#cc5500"}}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/patients">Patients</a></li>
                <li><a href="/doctors">Doctors</a></li>
                <li><a href="/received">Received</a></li>
                <li><a href="/sent">Sent</a></li>
                <li><a href="/requests">Requests</a></li>
                <li class="aply">
                    <Link to="/addpatient"><button class="btn btn-sm btn-light">Add new patient</button></Link>
                </li>
                <li class="aply">
                   <Link to="/adddoctor"><button class="btn btn-sm btn-light">Add new doctor</button></Link> 
                </li>
                <li class="aply">
                   <Link to="/makerequest"><button class="btn btn-sm btn-light">Make request</button></Link> 
                </li>
            </ul>
        </div>
        <div class="modal fade" id="myModal" role="dialog">
       <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
    </div>
</header>
);
}

export default Header;