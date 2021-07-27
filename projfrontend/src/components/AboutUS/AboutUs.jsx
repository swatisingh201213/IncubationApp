import React from "react";

import IMS from "../AboutUS/IMS/IMS";
import "../AboutUS/AboutUs.css";

import AdmissionProcess from "../AboutUS/AdmissionProcess/AdmissionProcess";

import Objectives from "../AboutUS/Objectives/Objectives";
import REVANest from "../AboutUS/REVANest/REVANest";
import Header from "../Home/Header/Header";
import Footer from "../Home/footer/Footer";

function AboutUS() {
  return (
    <div>
      <Header />
      <IMS />
      <AdmissionProcess />
      <Objectives />
      <REVANest />
      <Footer />
    </div>
  );
}

export default AboutUS;
