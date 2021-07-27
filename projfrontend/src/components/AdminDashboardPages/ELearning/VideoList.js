import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



function VideoList() {
  



  return (
    <>
      {/* start of incubatees table  */}
      <div
        className="table-responsive  table-hover"
        // style={{ overflowX: "auto", height: "600px", overflow: "scroll" }}
        // style={{ height: "600px", overflow: "scroll" }}
      >
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Video Name</th>
              <th>Uploader</th>
              <th>Upload Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
           
                <tr >
                  <td>Hello</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                  <td><button className="btn bg-danger text-light">
                      Delete
                      </button></td>
                </tr>
              
          </tbody>
        </table>
      </div>
    </>

    // {/* End of  incubatees table  */}
  );
}

export default VideoList;
