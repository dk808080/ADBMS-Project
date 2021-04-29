import React, { useState, useEffect } from "react";
import "../css/makerequest.css";
import axios from "axios";

const MakeRequest = () => {
    const [pid,setpid] = useState("");
    const [name, setname] = useState(false);
    const [phoneno, setphoneno] = useState(false);
    const [pic, setpic] = useState(false);
    const [email, setemail] = useState(false);
    const [age, setage] = useState(false);
    const [gender, setgender] = useState(false);
    const [weight, setweight] = useState(false);
    const [height, setheight] = useState(false);
    const [address, setaddress] = useState(false);
    const [temprature, settemprature] = useState(false);
    const [cheif_complaints, setcheif_complaints] = useState(false);
    const [more_info, setmore_info] = useState(false);
    const [bp, setbp] = useState(false);
    const [reports, setreports] = useState(false);
    const [doctors, setdoctors] = useState(false);


    const makeRequest = () => {
        const requesteddata = [];
        if(name===true)
        {
            requesteddata.push("name");
        }
        if(phoneno===true)
        {
            requesteddata.push("phoneno");
        }
        if(pic===true)
        {
            requesteddata.push("pic");
        }
        if(email===true)
        {
            requesteddata.push("email");
        }
        if(age===true)
        {
            requesteddata.push("age");
        }
        if(gender===true)
        {
            requesteddata.push("gender");
        }
        if(weight===true)
        {
            requesteddata.push("weight");
        }
        if(height===true)
        {
            requesteddata.push("height");
        }
        if(address===true)
        {
            requesteddata.push("address");
        }
        if(temprature===true)
        {
            requesteddata.push("temprature");
        }
        if(bp===true)
        {
            requesteddata.push("bp");
        }
        if(cheif_complaints===true)
        {
            requesteddata.push("cheif_complaints");
        }
        if(more_info===true)
        {
            requesteddata.push("more_info");
        }
        if(reports===true)
        {
            requesteddata.push("reports");
        }
        if(doctors===true)
        {
            requesteddata.push("doctors");
        }
        const askeddata = {
            pid,
            requesteddata
        }
        axios.post(`http://localhost:5000/askfordata`,askeddata)
        .then(res =>{
          res.json({message:res.data.message});
        })
        .catch(err=>console.log(err));
    }

    return (
        <div className="body-makerequest">
            <form>
                <div class="form-group">
                    <input class="form-control" value={pid} onChange={(e) => setpid(e.target.value)}/>
                
                </div>
                <div class="container-makerequest">
                    <ul class="ks-cboxtags">
                        <li><input type="checkbox" id="checkboxOne" value="name" 
                         onChange={()=>setname(!name)}/><label for="checkboxOne">name</label></li>
                        <li><input type="checkbox" id="checkboxTwo" value="phoneno" 
                         onChange={()=>setphoneno(!phoneno)}/><label for="checkboxTwo">phoneno</label></li>
                        <li><input type="checkbox" id="checkboxThree" value="pic" 
                         onChange={()=>setpic(!pic)}/><label for="checkboxThree">pic</label></li>
                        <li><input type="checkbox" id="checkboxFour" value="email"
                         onChange={()=>setemail(!email)} /><label for="checkboxFour">email</label></li>
                        <li><input type="checkbox" id="checkboxFive" value="age" 
                         onChange={()=>setage(!age)}/><label for="checkboxFive">age</label></li>
                        <li><input type="checkbox" id="checkboxSix" value="gender"
                         onChange={()=>setgender(!gender)} /><label for="checkboxSix">gender</label></li>
                        <li><input type="checkbox" id="checkboxSeven" value="weight" 
                         onChange={()=>setweight(!weight)}/><label for="checkboxSeven">weight</label></li>
                        <li><input type="checkbox" id="checkboxEight" value="height" 
                         onChange={()=>setheight(!height)}/><label for="checkboxEight">height</label></li>
                        <li><input type="checkbox" id="checkboxNine" value="address"
                         onChange={()=>setaddress(!address)} /><label for="checkboxNine">address</label></li>
                        <li><input type="checkbox" id="checkboxTen" value="temprature" 
                         onChange={()=>settemprature(!temprature)}/><label for="checkboxTen">temprature</label></li>
                        <li><input type="checkbox" id="checkboxEleven" value="bp" 
                         onChange={()=>setbp(!bp)}/><label for="checkboxEleven">bp</label></li>
                        <li><input type="checkbox" id="checkboxTwelve" value="cheif_complaints" 
                         onChange={()=>setcheif_complaints(!cheif_complaints)}/><label for="checkboxTwelve">cheif_complaints</label></li>
                        <li><input type="checkbox" id="checkboxThriteen" value="more_info" 
                         onChange={()=>setmore_info(!more_info)}/><label for="checkboxThriteen">more_info</label></li>
                        <li><input type="checkbox" id="checkboxFourteen" value="report" 
                         onChange={()=>setreports(!reports)}/><label for="checkboxFourteen">reports</label></li>
                        <li><input type="checkbox" id="checkboxFifteen" value="doctors"
                         onChange={()=>setdoctors(!doctors)} /><label for="checkboxFifteen">doctors</label></li>
                   
                    </ul>
                </div>
                <div class="form-group">
                    <button type="submit" className="btn btn-success" onClick={() => makeRequest()}> Make request</button>
                </div>
            </form>
        </div>
    );
}

export default MakeRequest;