import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../css/patients/patients.css";

const Received = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/receivedlist")
            .then((res) => {
                setdata(res.data.patients);
            })
            .catch((error) => console.log(error));
    }, []);

   const func1 = (item) => {
        const infoarr = [];
        if(item.name)
        {
           infoarr.push("name");
        }
        if(item.phoneno)
        {
           infoarr.push("phoneno");
        }
        if(item.pic!=="https://res.cloudinary.com/xmeme-image-store/image/upload/v1619277065/nopic_rm6tcb.jpg")
        {
            infoarr.push("pic");
        }
        if(item.email)
        {
            infoarr.push("email");
        }
        if(item.age)
        {
            infoarr.push("age");
        }
        if(item.gender)
        {
            infoarr.push("gender");
        }
        if(item.weight)
        {
            infoarr.push("weight");
        }
        if(item.height)
        {
            infoarr.push("height");
        }
        if(item.address)
        {
            infoarr.push("address");
        }
        if(item.temprature)
        {
            infoarr.push("temprature");
        }
        if(item.bp)
        {
            infoarr.push("bp");
        }
        if(item.cheif_complaints)
        {
            infoarr.push("cheif_complaints");
        }
        if(item.more_info)
        {
            infoarr.push("more_info");
        }
        if(item.reports.length!==0)
        {
            infoarr.push("reports");
        }
        if(item.doctors.length!==0)
        {
            infoarr.push("doctors")
        }
        return infoarr;
    }
    const patientlist = data.map(item => {
        return (
            <div className="col-lg-4">
            <div className="our-team-main">

                <div className="team-front">
                    <h3>Patient Id : {item.pid}</h3>
                    <p>Name : {item.name}</p>
                </div>

                <div className="team-back">
                <Link to={`/receivedpatient/${item.pid}`}> <button type="button" class="btn btn-info">View the profile</button></Link>
                </div>

            </div>
        </div>
        );
    })
    return (
        <div className="patients-body">
        <h1 className="text-center patients-h1" >Received from Priority Medical</h1>
        <div className="container">
            <div className="row">
                {patientlist}
            </div>
        </div>
        </div>
    );
}
export default Received;