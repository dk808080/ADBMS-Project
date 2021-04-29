import React, { useState, useEffect } from "react";
import "../css/makerequest.css";
import axios from "axios";
import {useParams,useHistory} from "react-router-dom";

const FulFillRequest = () => {
    const history = useHistory();

    const [cname, setcname] = useState(false);
    const [cphoneno, setcphoneno] = useState(false);
    const [cpic, setcpic] = useState(false);
    const [cemail, setcemail] = useState(false);
    const [cage, setcage] = useState(false);
    const [cgender, setcgender] = useState(false);
    const [cweight, setcweight] = useState(false);
    const [cheight, setcheight] = useState(false);
    const [caddress, setcaddress] = useState(false);
    const [ctemprature, setctemprature] = useState(false);
    const [ccheif_complaints, setccheif_complaints] = useState(false);
    const [cmore_info, setcmore_info] = useState(false);
    const [cbp, setcbp] = useState(false);
    const [creports, setcreports] = useState(false);
    const [cdoctors, setcdoctors] = useState(false);

    const [patient, setpatient] = useState({});
    const [mydoctors, setmydoctors] = useState([]);
    const [myreports, setmyreports] = useState([]);

    const { pid } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/patient/${pid}`)
            .then((res) => {
                setpatient(res.data.patient[0]);
                setmyreports(res.data.patient[0].reports);
                setmydoctors(res.data.patient[0].doctors);
            })
            .catch((error) => console.log(error));
    },[]);

    const sendData = () => {
        const tobesent = {};
        tobesent.pid = pid;
        if(cname===true)
        {
           tobesent.name = patient.name;
        }
        if(cphoneno===true)
        {
           tobesent.phoneno= patient.phoneno;
        }
        if(cpic===true)
        {
           tobesent.pic = patient.pic;
        }
        if(cemail===true)
        {
            tobesent.email = patient.email;
        }
        if(cage===true)
        {
            tobesent.age = patient.age;
        }
        if(cgender===true)
        {
            tobesent.gender = patient.gender;
        }
        if(cweight===true)
        {
            tobesent.weight = patient.weight;
        }
        if(cheight===true)
        {
            tobesent.height = patient.height;
        }
        if(caddress===true)
        {
            tobesent.address = patient.address;
        }
        if(ctemprature===true)
        {
            tobesent.temprature = patient.temprature;
        }
        if(cbp===true)
        {
            tobesent.bp = patient.bp;
        }
        if(ccheif_complaints===true)
        {
            tobesent.cheif_complaints = patient.cheif_complaints;
        }
        if(cmore_info===true)
        {
            tobesent.more_info = patient.more_info;
        }
        if(creports===true)
        {
            const arr = [];
            for(let k in myreports)
            {
                const obj = {
                    name : k.name,
                    link : k.link
                }
                arr.push(obj);
            }
            tobesent.reports = arr;
        }
        if(cdoctors===true)
        {
            tobesent.doctors = mydoctors;
        }
        /*const tobesent = {
            pid,
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
            pic,
            reports,
            doctors
        }*/
        axios.post(`http://localhost:5000/senddata`,tobesent)
        .then(res =>{
            alert(res);
          history.push("/requests");
        })
        .catch(err=>console.log(err));
    }

    return (
        <div className="body-makerequest">
            <form>
                <div class="container-makerequest">
                    <ul class="ks-cboxtags">
                        <li><input type="checkbox" id="checkboxOne" value="cname" 
                         onChange={()=>setcname(!cname)}/><label for="checkboxOne">name</label></li>
                        <li><input type="checkbox" id="checkboxTwo" value="cphoneno" 
                         onChange={()=>setcphoneno(!cphoneno)}/><label for="checkboxTwo">phoneno</label></li>
                        <li><input type="checkbox" id="checkboxThree" value="cpic" 
                         onChange={()=>setcpic(!cpic)}/><label for="checkboxThree">pic</label></li>
                        <li><input type="checkbox" id="checkboxFour" value="cemail"
                         onChange={()=>setcemail(!cemail)} /><label for="checkboxFour">email</label></li>
                        <li><input type="checkbox" id="checkboxFive" value="cage" 
                         onChange={()=>setcage(!cage)}/><label for="checkboxFive">age</label></li>
                        <li><input type="checkbox" id="checkboxSix" value="cgender"
                         onChange={()=>setcgender(!cgender)} /><label for="checkboxSix">gender</label></li>
                        <li><input type="checkbox" id="checkboxSeven" value="cweight" 
                         onChange={()=>setcweight(!cweight)}/><label for="checkboxSeven">weight</label></li>
                        <li><input type="checkbox" id="checkboxEight" value="cheight" 
                         onChange={()=>setcheight(!cheight)}/><label for="checkboxEight">height</label></li>
                        <li><input type="checkbox" id="checkboxNine" value="caddress"
                         onChange={()=>setcaddress(!caddress)} /><label for="checkboxNine">address</label></li>
                        <li><input type="checkbox" id="checkboxTen" value="ctemprature" 
                         onChange={()=>setctemprature(!ctemprature)}/><label for="checkboxTen">temprature</label></li>
                        <li><input type="checkbox" id="checkboxEleven" value="cbp" 
                         onChange={()=>setcbp(!cbp)}/><label for="checkboxEleven">bp</label></li>
                        <li><input type="checkbox" id="checkboxTwelve" value="ccheif_complaints" 
                         onChange={()=>setccheif_complaints(!ccheif_complaints)}/><label for="checkboxTwelve">cheif_complaints</label></li>
                        <li><input type="checkbox" id="checkboxThriteen" value="cmore_info" 
                         onChange={()=>setcmore_info(!cmore_info)}/><label for="checkboxThriteen">more_info</label></li>
                        <li><input type="checkbox" id="checkboxFourteen" value="creport" 
                         onChange={()=>setcreports(!creports)}/><label for="checkboxFourteen">reports</label></li>
                        <li><input type="checkbox" id="checkboxFifteen" value="cdoctors"
                         onChange={()=>setcdoctors(!cdoctors)} /><label for="checkboxFifteen">doctors</label></li>
                   
                    </ul>
                </div>
                <div class="form-group">
                    <button type="submit" className="btn btn-success" onClick={() => sendData()}> Send </button>
                </div>
            </form>
        </div>
    );
}

export default FulFillRequest;