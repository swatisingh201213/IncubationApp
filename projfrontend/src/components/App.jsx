import React from "react";
import Home from "../components/Home/Home";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./Home/Header/Header.css";
import "./Home/footer/footer.css";
import AdminRoute from "./Auth/AdminRoute";
import userlogin from "./Userlogin/Userlogin";
import AdminDashboard from "./AdminDashboardPages/AdminDashboard";
import UserProfile from "./UserPayment/UserProfile";
import Adminlogin from "./Adminlogin/Adminlogin";
import PageNotFound from "./404Page/PageNotFound";
import Incubateeslist from "./AdminDashboardPages/Incubateeslist/Incubatees";
import Adduser from "./AdminDashboardPages/Incubateeslist/Adduser";
import EditUser from "./AdminDashboardPages/Incubateeslist/EditUser";
import Events from "./AdminDashboardPages/events/Events";
import AddEvent from "./AdminDashboardPages/events/AddEvent";
import DisplayEventList from "./AdminDashboardPages/events/DisplayEventList";
import SingleEvent from "./AdminDashboardPages/events/SingleEvent";
import UpdateEvent from "./AdminDashboardPages/events/UpdateEvent";


// import About from "./Home/AboutSection/AboutSection";
import Aboutus from "./AboutUS/AboutUs";
import ChatHome from "./ChatBot/ChatHome";
import UpdateCompany from "./AdminDashboardPages/Company/UpdateCompany";
import CreateCompany from "./AdminDashboardPages/Company/CreateCompany";
import Companies from "./AdminDashboardPages/Company/Companies";
import Companylist from "./AdminDashboardPages/Company/Companylist";
import DisplayCompany from "./AdminDashboardPages/Company/DisplayCompany";
import Upload from "./AdminDashboardPages/ELearning/Upload";



function App() {
  return (
    <div>
      <ChatHome/>

      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/payment" exact component={userlogin} />
        <Route path="/user/dashboard" exact component={UserProfile} />
        <Route path="/login" exact component={Adminlogin} />
        <Route path="/Events" exact component={DisplayEventList} />
        <Route path="/Events/singleEvent/:id" exact component={SingleEvent} />
        <Route path="/Company" exact component={DisplayCompany} />
        {/* About US Routes */}
        <Route path="/aboutus" exact component={Aboutus} />

        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/admin/dashboard/events" exact component={Events} />
        <AdminRoute
          path="/admin/dashboard/incubatees"
          exact
          component={Incubateeslist}
        />
        <AdminRoute
          path="/admin/dashboard/incubatees/Adduser"
          exact
          component={Adduser}
        />
        <AdminRoute
          path="/admin/dashboard/incubatees/user/:id"
          exact
          component={EditUser}
        />
        <AdminRoute
          path="/admin/dashboard/Events/addEvent"
          exact
          component={AddEvent}
        />
        <AdminRoute
          path="/admin/dashboard/Eventslist"
          exact
          component={Events}
        />
        <AdminRoute
          path="/admin/dashboard/updateEvent/:id"
          exact
          component={UpdateEvent}
        />
        <AdminRoute
          path="/admin/dashboard/companylist"
          exact
          component={Companies}
        />
        <AdminRoute
          path="/admin/dashboard/createcompany"
          exact
          component={CreateCompany}
        />
        <AdminRoute
          path="/admin/dashboard/updatecompany/:id"
          exact
          component={UpdateCompany}
        />
        <AdminRoute
          path="/admin/dashboard/ELearning"
          exact
          component={Upload}
        />
        
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </div>
    
  );
}

export default App;
