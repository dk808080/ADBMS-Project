import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../css/patients/patients.css";

const Requests = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/requestedlist")
            .then((res) => {
                setdata(res.data.patients);
            })
            .catch((error) => console.log(error));
    }, []);

    const patientlist = data.map(item => {
        return (
            <div className="col-lg-3" style={{backgroundColor:"#fff",maxHeight:"200px",overflow:"scroll",margin:"1rem"}}>
               
                    <div>
                    <Link to={`/patient/${item.pid}`}><h5 style={{color:"teal"}}>Patient Id : {item.pid}</h5></Link>
                        
                    </div>
                    <div>
                        <p>Requested information </p>
                        {
                            item.requesteddata.map((key) => {
                                return <p>{key}</p>;
                            })
                        }
                    </div>
                    <div class="form-group">
                    <Link to={`/fulfillrequest/${item.pid}`}><button type="submit" className="btn" style={{marginTop:"10px"}}>Fulfill request</button></Link>
                </div>

            </div>
        );
    })
    return (
        <div className="patients-body">
            <h1 className="text-center patients-h1"> Information requested to Priority Medical</h1>
            <div className="container">
                <div className="row">
                    {patientlist}
                </div>
            </div>
           
        </div>
    );
}

export default Requests;