import React from "react";

function AdmissionProcess() {
  return (
    <div className="how-to-apply">
      <div className="py-5">
        <h1 className="text-white text-center fs-20">ADMISSION PROCESS</h1>
      </div>
      <div className="container bg-white mx-auto text-center bg-transparent border-0">
        <div className="row border-0 text-light">
          <div className="col ">
            <h1><sup className="h5 m-0 p-0">Step </sup>1</h1>
            <img src="/assets/AboutUS/image_aboutUS/step1.png" alt="step1"/>
            <p className="text-center py-3">Submit Application Form</p>

          </div>
          <div className="col-xl col-md-6 col-lg col-12 ">
            <h1 ><sup className="h5 m-0 p-0">Step </sup>2</h1>
            <img src="/assets/AboutUS/image_aboutUS/step2.png" alt="step2"/>
            <p className="text-center py-3">Review Application</p>
          </div>
          <div className="col-xl col-md-6 col-lg col-12">
            <h1><sup className="h5 m-0 p-0">Step </sup>3</h1>
            <img src="/assets/AboutUS/image_aboutUS/step3.png" alt="step3"/>
            <p className="text-center py-3">Evaluation of B-Plan</p>
          </div>
          <div className="col-xl col-md-6 col-lg col-12">
            <h1><sup className="h5 m-0 p-0">Step </sup>4</h1>
            <img src="/assets/AboutUS/image_aboutUS/step4.png" alt="step4"/>
            <p className="text-center py-3">MOU & Admission Formalities</p>

          </div>
          <div className="col-xl col-md-6 col-lg col-12">
            <h1><sup className="h5 m-0 p-0">Step </sup>5</h1>
            <img src="/assets/AboutUS/image_aboutUS/step5.png" alt="step5"/>
            <p className="text-center py-3">TBI Support Services</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionProcess;
