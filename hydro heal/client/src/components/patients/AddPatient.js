import React, { useState, useEffect } from "react"
import "../../css/patients/addpatient.css";
import axios from "axios";
import swal from 'sweetalert'; 
import {useHistory} from "react-router-dom";

const Addpatient = () => {
    const history = useHistory();
    const [name, setname] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState();
    const [gender, setgender] = useState("Male");
    const [address, setaddress] = useState("");
    const [weight, setweight] = useState("");
    const [height, setheight] = useState("");
    const [temprature, settemprature] = useState("");
    const [bp, setbp] = useState("");
    const [cheif_complaints, setcheif_complaints] = useState("");
    const [more_info, setmore_info] = useState("");
    const [url, seturl] = useState(undefined);
    const [image, setimage] = useState("");
    useEffect(() => {
        if (url) {
            uploadFields();
        }
    }, [url]);

    const uploadPic = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "xmeme-app");
        data.append("cloud_name", "xmeme-image-store");
        fetch("	https://api.cloudinary.com/v1_1/xmeme-image-store/image/upload", {
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

    const uploadFields = () => {
        const newpatient = {
            name,
            phoneno,
            email,
            age,
            gender,
            address,
            weight,
            height,
            temprature,
            bp,
            cheif_complaints,
            more_info,
            pic: url
        }
        axios.post("http://localhost:5000/addpatient", newpatient)
            .then((res) => {
               swal("","Added successfully","success");
               setgender("");
               setheight("");
               setimage("");
               setmore_info("");
               setphoneno("");
               seturl("");
               setweight("");
               setname("");
               setaddress("");
               settemprature("");
               setbp("");
               setemail("");
               setage("");
               setcheif_complaints("")
               history.push("/patients");

            })
            .catch((err) => {
               swal("","All the fields are mandatory except photo","info");
            });
    }
    const postData = () => {
        if (image) {
            uploadPic();
        }
        else {
            uploadFields();
        }
    }

    return (
        <div class="container register">
            <div class="row">
                <div class="col-md-1 register-left">
                </div>
                <div class="col-md-9 register-right">

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 class="register-heading">Add new patient</h3>
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name" value="" value={name}
                                            onChange={(e) => setname(e.target.value)} />
                                    </div>
                                    <div class="form-group row">
                                        <input type="text" maxlength="10" class="form-control col-md-7" placeholder="Phone number" value="" value={phoneno}
                                            onChange={(e) => setphoneno(e.target.value)} style={{marginRight:"0.5rem",marginLeft:"0.9rem"}}/>
                                             <input type="number" class="form-control col-md-3" placeholder="Age" value="" value={age}
                                            onChange={(e) => setage(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" name="email" class="form-control" placeholder="Email" value="" value={email}
                                            onChange={(e) => setemail(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Address" value="" value={address}
                                            onChange={(e) => setaddress(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <div class="maxl">
                                            <label class="radio inline" style={{ marginRight: "0.5rem" }} >
                                                <input type="radio" name="gender" value="male"  onClick={() => setgender('Male')}  />
                                                <span> Male </span>
                                            </label>
                                            <label class="radio inline" style={{ marginRight: "0.5rem" }}>
                                                <input type="radio" name="gender" value="female" onClick={() => setgender('Female')}/>
                                                <span> Female </span>
                                            </label>
                                            <label class="radio inline" style={{ marginRight: "0.5rem" }}>
                                                <input type="radio" name="gender" value="other" onClick={() => setgender('Other')}/>
                                                <span>   Other </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="file btn btn-lg btn-sucess" className="div-file">
                                        <b style={{ color: "#51be78", marginBottom: "0.6rem" }}> Upload photo</b>
                                        <br />
                                        <input type="file" name="file" className="input-file" onChange={(e) => setimage(e.target.files[0])}/>
                                    </div>
                                </div>
                                <div class="col-md-6">

                                    <div class="form-group row" style={{ marginBottom: "0" }}>
                                        <input type="text" class="form-control col-md-5" placeholder="Weight in kg" value=""
                                            style={{ marginRight: "0.8rem",marginLeft:"0.9rem" }} value={weight}
                                            onChange={(e) => setweight(e.target.value)} />
                                        <input type="text" class="form-control col-md-5" placeholder="Height in cm" value="" value={height}
                                            onChange={(e) => setheight(e.target.value)} />
                                    </div>
                                    <div class="form-group row" style={{ marginBottom: "0" }}>
                                        <input type="text" class="form-control col-md-5" placeholder="Temprature in °F" value=""
                                            style={{ marginRight: "0.8rem" ,marginLeft:"0.9rem"}}
                                            value={temprature}
                                            onChange={(e) => settemprature(e.target.value)} />
                                        <input type="text" class="form-control col-md-5" placeholder="BP in mm Hg" value="" value={bp}
                                            onChange={(e) => setbp(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="cheif_compaints" class="form-control" placeholder="Cheif complaints" value=""
                                            value={cheif_complaints}
                                            onChange={(e) => setcheif_complaints(e.target.value)} />
                                    </div>

                                    <div class="form-group">
                                        <textarea type="text" name="moreinfo" class="form-control" placeholder="More info.." value=""
                                            value={more_info}
                                            onChange={(e) => setmore_info(e.target.value)} />
                                    </div>
                                    <input type="submit" class="btnRegister" value="ADD" onClick={()=>postData()}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Addpatient;