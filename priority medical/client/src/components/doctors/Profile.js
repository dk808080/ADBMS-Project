import React, { useEffect, useState } from "react";
import "../../css/patients/profile.css";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import swal from "sweetalert";

const Profile = () => {
    const [doctor, setdoctor] = useState({});
    const [mypatients, setmypatients] = useState([]);
    const [image, setimage] = useState("");
    const [pid, setpid] = useState("");
    const [pname, setpname] = useState("");
    const { regno } = useParams();
    const [pdata,setpdata] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/doctor/${regno}`)
            .then((res) => {
                setdoctor(res.data.doctor[0]);
                setmypatients(res.data.doctor[0].patients);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        axios
          .get("http://localhost:8000/allpatients")
          .then((res) => {
            setpdata(res.data.patients);
          })
          .catch((error) => console.log(error));
      }, []);


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
                        regno: regno,
                        pic: data.url
                    }
                    axios.put("http://localhost:8000/updatepicofdoctor", newpic)
                        .then(result => {

                            swal("", "Profile picture updated", "success");
                            window.location.reload();

                        })
                        .catch(err => console.log(err));
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [image])

    const updatePhoto = (file) => {
        setimage(file);
    }

    const AddPatient = () => {
        const newpatient = {
            regno,
            pid,
            pname
        }
        axios.post("http://localhost:8000/addpatientinlist", newpatient)
            .then(result => {

                swal("", "Patient added", "success");
                window.location.reload();

            })
            .catch(err => console.log(err));
    }


    const listofpatients = mypatients.map(item => {
        return (
            <div class="row">
                <div class="col-md-6">
                <label><Link to={`/patient/${item.pid}`} style={{textDecoration:"underline"}}>{item.pid}</Link></label>
                </div>
                <div class="col-md-6">
                    <label>{item.name}</label>
                </div>

            </div>
        );

    })

   const listofpids =  pdata.map(item=>{
        return <option>{item.pid}</option>
    })
    const listofnames =  pdata.map(item=>{
        return <option>{item.name}</option>
    })
    return (
        <div class="container emp-profile ">
            <form className="profile-form">

                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={doctor.pic} alt="" />
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"
                                    onChange={(e) => updatePhoto(e.target.files[0])} />
                            </div>
                        </div>
                        <div style={{ border: "1px solid black" }}>
                            <form>
                            <div class="form-group">
                                            <select class="form-control" value={pid} onChange={(e) => setpid(e.target.value)}>
                                                <option selected>Choose PId</option>
                                                 {listofpids}
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control" value={pname} onChange={(e) => setpname(e.target.value)}>
                                                <option selected>Choose Name</option>
                                                 {listofnames}
                                            </select>
                                        </div>
                                <div class="form-group">
                                    <button type="submit" className="btn btn-success" onClick={() => AddPatient()}> Add patient</button>
                                </div>

                            </form>

                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Registration number</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{doctor.regno}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{doctor.name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Phone number</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{doctor.phoneno}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{doctor.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Address</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{doctor.address}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Age</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{doctor.age}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Gender</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{doctor.gender}</p>
                                    </div>
                                </div>
                                <hr />

                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Degree</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{doctor.degree}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Branch</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{doctor.branch}</p>
                                    </div>
                                </div>
                                <hr/>
                                <h4>List of patients</h4>
                                <hr/>
                                {listofpatients}
                            

                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Profile;