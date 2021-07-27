import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { API } from "../Auth/helper/backend.js";
import { Link, Redirect, withRouter, useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./UserProfile.css";
import { signout, isAuthenticated } from "../Auth/helper/index.js";
import Footer from "../Home/footer/Footer.jsx";

// signout method

function UserProfile() {
  let history = useHistory();
  const {
    user: { name, email },
  } = isAuthenticated();
  return (
    <>
      <div className="container-fluid user-navbar">
        <div className="row ">
          <Navbar
            className=" navbar navbar-padding "
            id="main-nav"
            variant="dark"
            fixed="top"
            expand="lg"
          >
            <Navbar.Brand className="small-screen-logo1">
              <Link to="#Home">
                <img
                  src="/assets/logo.png"
                  width="60"
                  height="70"
                  className="d-inline-block align-top"
                  alt="REVA NEST logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="main-navbar1" id="navbarScroll">
              <Nav
                className="ml-auto"
                style={{ minHeight: "90px" }}
                navbarScroll
              >
                <Nav.Item className="nav-link1">
                  <Link to="#dash">
                    <i className="far fa-user px-1"></i> {name}
                  </Link>
                </Nav.Item>
                {isAuthenticated() && (
                  <Nav.Item className="nav-link1">
                    <Link to="#dash">
                      <i class="fas fa-sign-out-alt px-2"></i>
                      <span
                        onClick={() => {
                          signout(() => {
                            history.push("/payment");
                          });
                        }}
                      >
                        log out
                      </span>
                    </Link>
                  </Nav.Item>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <div className="conatainer" id="main-payment-section">
        <h2>user can only do payment</h2>
      </div>

      <Footer />
    </>
  );
}
export default UserProfile;
