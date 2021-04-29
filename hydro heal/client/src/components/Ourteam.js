import React from "react";

const Ourteam = () => {
    return (
    <div class="our-team">
    <div class="container">

       
        <div class="session-title row">
            <h2>Our Team</h2>
            <p>Not the answer you're looking for? Printing and typesetting inLorem Ipsum </p>
        </div>

        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="card-1 team-member">
                    <img src={process.env.PUBLIC_URL + "images/team/t1.jpg"} alt="Team Member 1"/>

                    <p><b>Dr.Siva Kumar</b> <br/> (CEO & Chairman)</p>
                    <ul class="row">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                      
                    </ul>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="card-1 team-member">
                    <img src={process.env.PUBLIC_URL + "images/team/t2.jpg"} alt="Team Member 1"/>

                    <p><b>Dr. Mathue Samuel</b> <br/> (Chief Doctor)</p>
                    <ul class="row">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                      
                    </ul>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card-1 team-member">
                    <img src={process.env.PUBLIC_URL + "images/team/t3.jpg"} alt="Team Member 1"/>

                    <p><b>Samuani Simi</b> <br/> (Chief Doctor)</p>
                    <ul class="row">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                        
                    </ul>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card-1 team-member">
                    <img src={process.env.PUBLIC_URL + "images/team/t4.jpg"} alt="Team Member 1"/>

                    <p><b>Niuise Paule</b> <br/> (Chief Doctor)</p>
                    <ul class="row">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                      
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>);
}
export default Ourteam;