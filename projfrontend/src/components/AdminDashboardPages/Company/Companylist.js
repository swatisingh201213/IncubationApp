import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AdminDashboard.css";
import { DeleteCompany, GetallCompany } from "../../Auth/CompanyApi";



function Companylist() {
  // const [values, setValues] = useState([]);
  const [getallvalues, setallValues] = useState([]);
  // destructuring the values
  // const [eventname, venu, organized, sdate, edate, description] = setallValues;

  useEffect(() => {
    // // get all users data into the table
    // Axios.get("/user")
    //   .then((response) => {
    //     // console.log(response);
    //     setValues(response.data);
    //   })
    //   .catch(() => {
    //     console.log("Error");
    //   });

    // get all user
    //  const fetchData=async()=>{
    //    let data = await GetallEvent();
    //    setallValues(data);
    //  }
    //   fetchData();
    AllCompanies();
  }, []);

  const AllCompanies = async () => {
    let response = await GetallCompany();
    console.log(response);
    setallValues(response);
  };

  //delete event  operation
  const deleteCompanyData = async (id) => {
    // await deleteuser(id);
    await DeleteCompany(id);
    // AllUsers();
    AllCompanies();
  };

  return (
    <>
      {/* start of incubatees table  */}
      <div
        className="table-responsive table-striped table-hover"
        // style={{ overflowX: "auto", height: "600px", overflow: "scroll" }}
        // style={{ height: "600px", overflow: "scroll" }}
      >
        <table className="table table-fixed-user">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Company Name</th>
              <th>Founder</th>
              <th>Startup Types</th>
              <th>Start Date</th>
              <th>Sector</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {getallvalues.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.companyname}</td>
                  <td>{val.founder}</td>
                  <td>{val.startuptype}</td>
                  <td>{val.startdate}</td>
                  <td>{val.sector}</td>
                  
                  <td className="btn-flex-for-small-screen">
                    <Link to={`/admin/dashboard/updatecompany/${val._id}`}>
                      <button
                        type="button"
                        className="btn btn-Update-table"
                        style={{ marginRight: "3px" }}
                      >
                        Update
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="btn btn-delete-table"
                      style={{ marginLeft: "0px" }}
                      onClick={() => deleteCompanyData(val._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>

    // {/* End of  incubatees table  */}
  );
}

export default Companylist;
