import React from 'react';
import axios from 'axios';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './Upload.css';
import "bootstrap/dist/css/bootstrap.min.css";

import VideoList from "./VideoList";
import "../AdminDashboard.css";


import Sidebar from "../sidebar";
import { isAuthenticated } from "../../Auth/helper";
const {
  user: { name },
} = isAuthenticated();
const nav = () => {
  window.location = "/#/dashboard";
};
class Upload extends React.Component {
  state = {
    selectedVideos: null,
    loaded: 0,
  };

  maxSelectFile(event) {
    let files = event.target.files;
    if (files.length > 1) {
      toast.error("Maximum 1 file is allowed");
      event.target.value = null;
      return false;
    } else {
      let err = "";
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 8589934592) {
          // 1gb
          err += files[i].name + ", ";
        }
      }
      if (err !== "") {
        // error caught
        event.target.value = null;
        toast.error(err + " is/are too large. Please select file size < 50Mb");
      }
    }
    return true;
  }

  fileChangeHandler(event) {
    const files = event.target.files;
    if (this.maxSelectFile(event)) {
      this.setState({
        selectedVideos: files,
        loaded: 0,
      });
    }
  }

  fileUploadHandler(event) {
    const data = new FormData();
    for (let i = 0; i < this.state.selectedVideos.length; i++) {
      data.append("file", this.state.selectedVideos[i]);
    }
    axios
      .post(
        "http://localhost:4000/api/upload",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("jwt")).token,
          },
        },
        {
          onUploadProgress: (ProgressEvent) => {
            this.setState({
              loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
            });
          },
        }
      )
      .then((res) => {
        toast.success("Upload Successful");
      })
      .catch((err) => {
        toast.error(`Upload Fail with status: ${err.statusText}`);
      });
  }

  render() {
    if (!localStorage.getItem("jwt")) return <Redirect to="/signIn" />;
    return (
      <React.Fragment>
        <div>
          <div className="d-flex" id="wrapper">
            <Sidebar />

            <div id="page-content-wrapper" className="bg-light">
              <nav
                className="navbar navbar-expand-lg   py-4 px-4"
                style={{ backgroundColor: "#EFEFEF" }}
              >
                <div className="d-flex align-items-center ">
                  <i className="fa fa-bars mr-3 fs-4 me-3" id="menu-toggle"></i>
                  <h2 className="fs-2 m-0"> Dashboard</h2>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-user "></i>
                </button>

                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link  fw-bold"
                        href="#DSD"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#000000" }}
                      >
                        <i className="fa fa-user mx-1 fa-2x"></i>
                        {name}
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#DS">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* ////////////////////////////////////////// */}
              {/* page contents starts from here  */}
              {/* ////////////////////////////////////////// */}
              <div className="container-fluid  mt-5">
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "12px",
                    marginRight: "12px",
                  }}
                >
                  <h4>Video list </h4>
                  <button
                    type="button"
                    className="btn btn-info-adduser"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    New Video
                  </button>
                  <div
                    class="modal fade "
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <ToastContainer />
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            Upload Videos
                          </h5>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="form-group files">
                              <label>Upload Your Videos Here</label>
                              <input
                                type="file"
                                name="file"
                                className="form-control"
                                multiple="multiple"
                                accept="video/*"
                                onChange={this.fileChangeHandler.bind(this)}
                              />
                              <div className="bg-dark py-2 ">
                                <Progress
                                  max="100"
                                  color="success"
                                  value={this.state.loaded}
                                  className="text-dark"
                                >
                                  {isNaN(Math.round(this.state.loaded, 2))
                                    ? 0
                                    : Math.round(this.state.loaded, 2)}
                                  %
                                </Progress>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-info-adduser"
                            onClick={this.fileUploadHandler.bind(this)}
                          >
                            Upload
                          </button>
                          <button
                            type="button"
                            class="btn btn-info-adduser"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <VideoList />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Upload;
