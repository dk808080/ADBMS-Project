import React,{useState,useEffect} from "react";
import axios from "axios";
import "../../css/patients/patients.css";
import {Link} from "react-router-dom";

const Patients = () => {
    const[data,setdata] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:8000/allpatients")
          .then((res) => {
            setdata(res.data.patients);
          })
          .catch((error) => console.log(error));
      }, []);

      const patientlist = data.map(item=>{
          return(
            <div className="col-lg-4">
            <div className="our-team-main">

                <div className="team-front">
                    <h3>Patient Id : {item.pid}</h3>
                    <p>Name : {item.name}</p>
                </div>

                <div className="team-back">
                <Link to={`/patient/${item.pid}`}> <button type="button" class="btn btn-info">View the profile</button></Link>
                </div>

            </div>
        </div>
          );
      })
    return (
        <div className="patients-body">
            <h1 className="text-center patients-h1" >All the patients</h1>
            <div className="container">
                <div className="row">
                    {patientlist}
                </div>
            </div>
            </div>
    );
}

export default Patients;