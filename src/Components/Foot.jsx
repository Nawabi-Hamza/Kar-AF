import React from "react";
import { Link } from "react-router-dom"


function Foot() {
  const currentDate = new Date().getFullYear();
  return (
    <div id="bg-gradient">
      <div className="container-lg container-fluid text-start mt-5 text-white p-3 p-md-5">
        <br /><br /><br />
        {/* start div row */}
        <div className="row">
          <div className="col-12 col-lg-3">
            <h1 className="mb-5">Kar AF</h1>
            <p className="lead mb-5">Kar Plaza | Shahr-e-Naw, Lane 3, Kabul, Afghanistan</p>
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-6 col-lg-3">
                  <h4 className="my-5 text-bold">Quick Links</h4>
                  <Link className="foot-link" to='/'>About Us</Link>
                  <Link className="foot-link" to='/'>Advertise with Us</Link>
                  <Link className="foot-link" to='/'>Privacy Policy</Link>
              </div>
              <div className="col-6 col-lg-3">
                  <h4 className="my-5 text-bold">For Companies</h4>
                  <Link className="foot-link" to='/'>Post a job</Link>
                  <Link className="foot-link" to='/'>Post RFP</Link>
                  <Link className="foot-link" to='/'>Post Training</Link>
              </div>
              <div className="col-6 col-lg-3">
                  <h4 className="my-5 text-bold">For Jobseekers</h4>
                  <Link className="foot-link" to='/'>Browse Jobs</Link>
                  <Link className="foot-link" to='/'>Browse Companies</Link>
                  <Link className="foot-link" to='/'>Build Resume</Link>
              </div>
              <div className="col-6 col-lg-3">
                  <h4 className="my-5 text-bold">Contact</h4>
                  <Link className="foot-link" to='/'>info@kar.af</Link>
                  <Link className="foot-link" to='/'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div><br /><br /><br/>
        <hr />
        <div className="d-md-flex justify-content-between text-light">
          <h6>© 2023 - {currentDate} Kar.af | All Rights Reserved</h6>
          <h6>Powered by: Hamza Nawabi</h6>
        </div>
        {/* End div row */}
      </div>
    </div>
  );
}

export default Foot;
