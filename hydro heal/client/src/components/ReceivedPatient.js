import React, { useState, useEffect } from "react";
import "../css/patients/profile.css"
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ReceivedPatient = () => {
    const [patient, setpatient] = useState({});
    const [mydoctors, setmydoctors] = useState([]);
    const [reports, setreports] = useState([]);
    const { pid } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/receivedpatient/${pid}`)
            .then((res) => {
                console.log(res);
                setpatient(res.data.patient);
                setreports(res.data.patient.reports);
                setmydoctors(res.data.patient.doctors);
            })
            .catch((error) => console.log(error));
    }, []);



    const reportlist = reports.map(item => {
        return (
            <div class="profile-img">
                <img src={item.link} alt="" />
            </div>
        );
    })
    const listofdoctors = mydoctors.map(item => {
        return (
            <div class="row">
                <div class="col-md-6">
                    <label><Link to={`/doctor/${item.regno}`} style={{ textDecoration: "underline" }}>{item.regno}</Link></label>
                </div>
                <div class="col-md-6">
                    <label>{item.name}</label>
                </div>

            </div>
        );

    })
    const getname = () => {
        if (patient.name) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Name</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.name}</p>
                </div>
            </div>);
        }
    }

    const getphoneno = () => {
        if (patient.phoneno) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Phone number</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.phoneno}</p>
                </div>
            </div>);
        }
    }

    const getemail = () => {
        if (patient.email) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Email</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.email}</p>
                </div>
            </div>);
        }
    }

    const getaddress = () => {
        if (patient.address) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Address</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.address}</p>
                </div>
            </div>);
        }
    }
    const getage = () => {
        if (patient.age) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Age</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.age}</p>
                </div>
            </div>);
        }
    }
    const getgender = () => {
        if (patient.gender) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Gender</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.gender}</p>
                </div>
            </div>);
        }
    }
    const getweight = () => {
        if (patient.weight) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Weigth</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.weight} kg</p>
                </div>
            </div>);
        }
    }
    const getheight = () => {
        if (patient.getheight) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Height</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.height} cm</p>
                </div>
            </div>);
        }
    }
    const gettemprature = () => {
        if (patient.temprature) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Temprature</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.temprature} °F</p>
                </div>
            </div>);
        }
    }
    const getbp = () => {
        if (patient.bp) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Blood pressure</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.bp} mmHg</p>
                </div>
            </div>);
        }
    }
    const getcc = () => {
        if (patient.cheif_complaints) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>Cheif complaints</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.cheif_complaints}v</p>
                </div>
            </div>);
        }
    }
    const getmi = () => {
        if (patient.more_info) {
            return (<div class="row">
                <div class="col-md-6">
                    <label>More information</label>
                </div>
                <div class="col-md-6">
                    <p>{patient.more_info}</p>
                </div>
            </div>);
        }
    }
    const getreports = () => {
        if (reports.length !== 0) {
            return (<div>
                <br />
                <h4>All reports</h4>
                {reportlist}
            </div>);
        }
    }
    const getdrs = () => {
        console.log(mydoctors);
        if (mydoctors.length !== 0) {

            return (<div>
                <hr />
                <h3>List of doctors</h3>
                <hr />
                {listofdoctors}
            </div>);
        }

    }
    const getpic = () => {
        if (patient.pic !== "https://res.cloudinary.com/xmeme-image-store/image/upload/v1619277065/nopic_rm6tcb.jpg") {
            return (<div>
                <h4>Photo of patient</h4>

                <br />
                <div class="profile-img">
                    <img src={patient.pic} alt="" />
                </div>
            </div>);
        }

    }
    return (
        <div class="container emp-profile ">
            <form className="profile-form">

                <div class="row">

                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Patient Id</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.pid}</p>
                                    </div>
                                </div>

                                {getname()}

                                {getphoneno()}

                                {getemail()}

                                {getaddress()}

                                {getage()}

                                {getgender()}

                                {getweight()}

                                {getheight()}

                                {gettemprature()}

                                {getbp()}

                                {getcc()}

                                {getmi()}
                                {getdrs()}
                            </div>

                        </div>
                    </div>
                    <div class="col-md-4">
                        {getpic()}

                        {getreports()}

                    </div>
                </div>
            </form>
        </div>
    );
}

export default ReceivedPatient;
