import React, { useState, useEffect } from "react"
import "../../css/patients/addpatient.css";
import axios from "axios";
import swal from 'sweetalert';
import {useHistory} from "react-router-dom";

const AddDoctor = () => {
    const history = useHistory();
    const [name, setname] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState();
    const [gender, setgender] = useState("Male");
    const [address, setaddress] = useState("");
    const [branch, setbranch] = useState("");
    const [degree, setdegree] = useState("");
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
        const newdoc = {
            name,
            phoneno,
            email,
            age,
            gender,
            address,
            branch,
            degree,
            pic: url
        }
        axios.post("http://localhost:5000/adddoctor", newdoc)
            .then((res) => {
               swal("","Added successfully","success");
               setgender("");
               setimage("");
               setdegree("");
               setphoneno("");
               seturl("");
               setname("");
               setaddress("");
               setbranch("");
               setemail("");
               setage("");
               history.push("/doctors");

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
                            <h3 class="register-heading">Add new doctor</h3>
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" maxlength="10" class="form-control" placeholder="Phone number" value={phoneno} onChange={(e) => setphoneno(e.target.value)}/>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Address" value="" value={address} onChange={(e) => setaddress(e.target.value)}/>
                                    </div>
                                    <div class="form-group">
                                        <div class="maxl">
                                            <label class="radio inline" style={{ marginRight: "0.5rem" }} >
                                                <input type="radio" name="gender" value={gender} onClick={() => setgender('Male')}/>
                                                <span> Male </span>
                                            </label>
                                            <label class="radio inline" style={{ marginRight: "0.5rem" }}>
                                                <input type="radio" name="gender" value={gender}  onClick={() => setgender('Female')}/>
                                                <span> Female </span>
                                            </label>
                                            <label class="radio inline" style={{ marginRight: "0.5rem" }}>
                                                <input type="radio" name="gender" value={gender}  onClick={() => setgender('Other')}/>
                                                <span>   Other </span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6">
                                 
                                <div class="form-group">
                                        <input type="text" name="txtEmpPhone" class="form-control" placeholder="Age" value={age} onChange={(e) => setage(e.target.value)} />
                                    </div>
                                  
                                    <div class="form-group">
                                            <select class="form-control" value={degree} onChange={(e) => setdegree(e.target.value)}>
                                                <option selected>Degree</option>
                                                <option>MBBS</option>
                                                <option>MD</option>
                                                <option>MS</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control" value={branch} onChange={(e) => setbranch(e.target.value)}>
                                                <option selected>Branch</option>
                                                <option>branch 1</option>
                                                <option>branch 2</option>
                                                <option>branch 3</option>
                                            </select>
                                        </div>
                                        <div class="file btn btn-lg btn-sucess" className="div-file">
                                       <b style={{color:"#51be78",marginBottom:"0.6rem"}}> Upload photo</b>
                                        <br/>
							         <input type="file" name="file" className="input-file" onChange={(e) => setimage(e.target.files[0])}/>
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

export default AddDoctor;