import React,{useEffect,useState} from "react";
import axios from "axios";
import "../../css/patients/patients.css"
import {Link} from "react-router-dom";
const Doctors= () => {
    const[data,setdata] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:5000/alldoctors")
          .then((res) => {
            setdata(res.data.doctors);
          })
          .catch((error) => console.log(error));
      }, []);

      const doctorlist = data.map(item=>{
          return(
            <div className="col-lg-4">
            <div className="our-team-main">

                <div className="team-front">
                    <h3>Registration number : {item.regno}</h3>
                    <p>Name : {item.name}</p>
                </div>

                <div className="team-back">
                <Link to={`/doctor/${item.regno}`}><button type="button" class="btn btn-info">View the profile</button></Link>
                </div>

            </div>
        </div>
          );
      })
    return (
        <div className="patients-body">
            <h1 className="text-center patients-h1" >All the doctors</h1>


            <div className="container">
                <div className="row">
                    {doctorlist}
              </div>
            </div>
            </div>
    );
}

export default Doctors;