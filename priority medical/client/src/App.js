import './App.css';
import {Route,BrowserRouter,Link} from "react-router-dom";
import Home from "./components/Home";
import Addpatient from "./components/patients/AddPatient";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddDoctor from "./components/doctors/AddDoctor";
import Profile from "./components/patients/Profile";
import DocProfile from "./components/doctors/Profile";
import Patients from "./components/patients/Patients";
import Doctors from "./components/doctors/Doctors";
import Requests from "./components/Requests";
import MakeRequest from "./components/MakeRequest";
import FulFillRequest from "./components/FulFillRequest";
import Sent from "./components/Sent";
import Received from "./components/Received";
import ReceivedPatient from "./components/ReceivedPatient";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/addpatient" exact>
        <Header/>
        <Addpatient/>
        <Footer/>
      </Route>
      <Route path="/patient/:pid" exact>
        <Header/>
        <Profile/>
        <Footer/>
      </Route>
      <Route path="/patients" exact>
        <Header/>
        <Patients/>
        <Footer/>
      </Route>
      <Route path="/doctor/:regno" exact>
        <Header/>
       <DocProfile/>
        <Footer/>
      </Route>
      <Route path="/adddoctor" exact>
        <Header/>
        <AddDoctor/>
        <Footer/>
      </Route>
      <Route path="/doctors" exact>
        <Header/>
        <Doctors/>
        <Footer/>
      </Route>
      <Route path="/requests" exact>
        <Header/>
        <Requests/>
        <Footer/>
      </Route>
      <Route path="/makerequest" exact>
        <Header/>
        <MakeRequest/>
        <Footer/>
      </Route>
      <Route path="/fulfillrequest/:pid" exact>
        <Header/>
        <FulFillRequest/>
        <Footer/>
      </Route>
      <Route path="/sent" exact>
        <Header/>
        <Sent/>
        <Footer/>
      </Route>
      <Route path="/received" exact>
        <Header/>
        <Received/>
        <Footer/>
      </Route>
      <Route path="/receivedpatient/:pid" exact>
        <Header/>
        <ReceivedPatient/>
        <Footer/>
      </Route>
      </BrowserRouter>
      
     
    </div>

  );
}

export default App;
