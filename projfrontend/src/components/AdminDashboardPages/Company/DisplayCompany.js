import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../events/Event.css";
import Header from "../../Home/Header/Header";
import Footer from "../../Home/footer/Footer";
import { GetallCompany, uploadFile } from "../../Auth/CompanyApi";
import Companylist from "./Companylist";

function DisplayCompany() {
  //   const date = new Date();
  //   const currenttime = date.getFullYear();

  // const arr1 = [1, 2, 3, 4, 5, 6, 7, 9];

  const [getallvalues, setallValues] = useState([]);

  // const url1 = getallvalues.photo
  //   ? getallvalues.photo
  //   : "https://revanest.com/public/images/digest/1623347372664.jpg";

  useEffect(() => {
    AllCompany();
  }, []);

  const AllCompany = async () => {
    let response = await GetallCompany();
    console.log(response);

    setallValues(response);
  };
  
  return (
    <>
      <Header />
      <div className="container-fluid mt-5 " id="event-display">
        <div className="row eventlist-header-section">
          <div className="container">
            <h1> INCUBATED COMPANIES </h1>
          </div>
        </div>

        <div className="container-fluid card-section">
          <div className="row py-5">

            {getallvalues.map((valuesEvent) => {
              
              const linked = ()=>{
                window.location.href=`https://linkedin.com/company/${valuesEvent.linkedin}/`
              }
              const website = ()=>{
                window.location.href=`${valuesEvent.websitelink}`
              }
              return (
                <div className="col-12 my-4  card eventCard">
                  
                  <div className="row ">
                    <div className="col-md-3 col-12 py-5 px-5 text-center">
                    
                      <img
                        src={valuesEvent.companylogo}
                        className="img-fluid my-4"
                        alt="CompanyImage"
                        width="180px"
                        // style={{ width: "100%", height: "220px" }}
                      />
                    </div>
                    <div className="col py-5">
                      <h3>{valuesEvent.companyname}</h3>

                      <p>{valuesEvent.description}</p>
                      <div className="d-flex flex-row justify-content-around">
                        <div>
                          <p className="text-center m-0 p-0">Founders</p>
                          <p
                            className="card-text text-center"
                            style={{ color: "#fd933c" }}
                          >
                            {valuesEvent.founder}
                          </p>
                        </div>
                        <div>
                          <p className="text-center m-0 p-0">Startup Type</p>
                          <p
                            className="card-text text-center"
                            style={{ color: "#fd933c" }}
                          >
                            {valuesEvent.startuptype}
                          </p>
                        </div>
                        <div>
                          <p className="text-center m-0 p-0">Incorporated In</p>
                          <p
                            className="card-text  text-center"
                            style={{ color: "#fd933c" }}
                          >
                            {valuesEvent.startdate}
                          </p>
                        </div>
                        <div>
                          <p className="text-center m-0 p-0">Sector</p>
                          <p
                            className="card-text text-center"
                            style={{ color: "#fd933c" }}
                          >
                            {valuesEvent.sector}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 d-flex flex-column px-5 py-5">
                      <button className="btn border border-dark my-2 py-3" >
                        <a onClick={linked}>LinkedIn</a>
                      </button>
                      <button className="btn border border-dark my-2 py-3">
                        <a onClick={website}>Website</a>
                        
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DisplayCompany;
