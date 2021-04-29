import React, { useState, useEffect } from "react";
import "../../css/patients/profile.css"
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import swal from "sweetalert";

const Profile = () => {
    const [patient, setpatient] = useState({});
    const [mydoctors, setmydoctors] = useState([]);
    const [reports, setreports] = useState([]);
    const [image, setimage] = useState("");
    const [report, setreport] = useState("");
    const [name, setname] = useState("");
    const [url,seturl] = useState(undefined);
    const [reportname,setreportname] = useState("");
    const { pid } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/patient/${pid}`)
            .then((res) => {
                setpatient(res.data.patient[0]);
                setreports(res.data.patient[0].reports);
                setmydoctors(res.data.patient[0].doctors);
            })
            .catch((error) => console.log(error));
    },[]);


    useEffect(() => {
        if (image) {
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", "xmeme-app");
            data.append("cloud_name", "xmeme-image-store");
            fetch("	https://api.cloudinary.com/v1_1/xmeme-image-store/image/upload", {
                method: "post",
                body: data
            }).then(res => res.json())
                .then(data => {
                    const newpic = {
                        pid: patient.pid,
                        pic: data.url
                    }
                    axios.put("http://localhost:8000/updatepicofpatient", newpic)
                        .then(result => {

                            swal("", "Profile picture updated", "success");
                            window.location.reload();
                            setname("");
                            setreport("");

                        })
                        .catch(err => console.log(err));
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [image])



    useEffect(() => {
        if (report) {
            const data = new FormData();
            data.append("file", report);
            data.append("upload_preset", "xmeme-app");
            data.append("cloud_name", "xmeme-image-store");
            fetch("	https://api.cloudinary.com/v1_1/xmeme-image-store/image/upload", {
                method: "post",
                body: data
            }).then(res => res.json())
                .then(data => {
                    const newreport = {
                        pid: patient.pid,
                        link: data.url,
                        name: name
                    }
                    axios.put("http://localhost:8000/updatereport", newreport)
                        .then(result => {
                            swal("", "report updated", "success");
                            window.location.reload();
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [report])


    useEffect(() => {
        if (url) {
            AddReport();
        }
    }, [url]);


    const updatePhoto = (file) => {
        setimage(file);
    }

    const updateReport = (f) => {
        setreport(f);
    }

    const listofdoctors = mydoctors.map(item => {
        return (
            <div class="row">
                <div class="col-md-6">
                    <label><Link to={`/doctor/${item.regno}`} style={{textDecoration:"underline"}}>{item.regno}</Link></label>
                </div>
                <div class="col-md-6">
                    <label>{item.name}</label>
                </div>

            </div>
        );

    })

    const reportlist = reports.map(item => {
        return (
            <div class="profile-img">
                <img src={item.link} alt="" />
                <div class="file btn btn-lg btn-primary">
                    Update {item.name} report
                <input type="file" name="file" onChange={(e) => {
                        e.preventDefault();
                        setname(item.name);
                        updateReport(e.target.files[0]);
                    }} />
                </div>
            </div>
        );
    })


    const uploadPic = (reportimage) => {
        const data = new FormData();
        data.append("file", reportimage);
        data.append("upload_preset", "xmeme-app");
        data.append("cloud_name", "xmeme-image-store");
        fetch("https://api.cloudinary.com/v1_1/xmeme-image-store/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(data => {
                seturl(data.url);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const AddReport = () => {
        const newreport = {
           pid:patient.pid,
           name:reportname,
           link:url
        }
        axios.post("http://localhost:8000/addreport", newreport)
            .then((res) => {
               swal("","Added successfully","success");
               window.location.reload();
               setreportname("");

            })
            .catch((err) => {
               swal("","All the fields are mandatory","info");
            });
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
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Phone number</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.phoneno}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Address</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.address}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Age</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.age}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Gender</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.gender}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Weigth</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.weight} kg</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Height</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.height} cm</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Temprature</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.temprature} °F</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Blood pressure</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.bp} mmHg</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Cheif complaints</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.cheif_complaints}v</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>More information</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{patient.more_info}</p>
                                    </div>
                                </div>
                                <hr/>
                                <h3>List of doctors</h3>
                                <hr/>
                                {listofdoctors}
                            </div>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <h4>Photo of patient</h4>
                        <br/>
                        <div class="profile-img">
                            <img src={patient.pic} alt="" />
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" onChange={(e) => updatePhoto(e.target.files[0])} />
                            </div>
                        </div>
                        <div style={{ border: "1px solid black" }}>
                            <form>
                            <div class="form-group">
                                            <select class="form-control" value={reportname} onChange={(e) => setreportname(e.target.value)}>
                                                <option selected>Name of report</option>
                                                <option>Blood test</option>
                                                <option>CT scan</option>
                                                <option>X-ray</option>
                                                <option>MRI</option>
                                                <option>USG</option>
                                            </select>
                                        </div>
                                <div class="file btn btn-lg btn-sucess" className="div-file" style={{marginBottom:"2rem"}}>
                                    <b style={{ color: "#51be78", marginBottom: "0.6rem" }}>Upload report</b>
                                    <br />
                                    <input type="file" name="file" className="input-file" onChange={(e) => uploadPic(e.target.files[0])}/>
                                </div>

                            </form>

                        </div>
                        <br/>
                        <h4>All reports</h4>
                        {reportlist}

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Profile;
