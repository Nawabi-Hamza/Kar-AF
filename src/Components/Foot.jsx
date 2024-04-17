import React from "react";

function Foot() {
  const currentDate = new Date().getFullYear();
  return (
    <div id="bg-gradient">
      <div className="container-md container-fluid mt-5 text-white p-5">
        {/* start div row */}
        <div className="row">
          <div className="col-12 col-lg-3">
            <h1>Kar AF</h1>
            <p>Kar Plaza | Shahr-e-Naw, Lane 3, Kabul, Afghanistan</p>
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-6 h3 col-lg-3">
                  First Column
              </div>
              <div className="col-6 h3 col-lg-3">
                  Second Column
              </div>
              <div className="col-6 h3 col-lg-3">
                  Third Column
              </div>
              <div className="col-6 h3 col-lg-3">
                  Fourth Column
              </div>
            </div>
          </div>
        </div>
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
