import React from "react";
// import CommingSoon from "./CommingSoon";
import "./min.style.css";
function Projects() {
  return (
    <>
      <div id="bg-gradient">
        <div className="container-md contianer-fluid p-5">
          <br />
          <br />
          <br />
          <div className="content">
            <p className="lead text-light display-4" style={style.content}>
              Successfully Completed Projects
              <br />
            </p>
          </div>
          <div className="totla text-white d-flex justify-content-center mt-5 gap-4">
            <p className="h5 lead">
              Successfully Completed Projects, honors our team's perseverance
              and commitment to finishing a range of projects. <br />
              These achievements show our dedication to excellence and our
              capacity for overcoming obstacles to succeed.{" "}
            </p>
          </div>
          <br />
          <br />
        </div>
      </div>
      {/*  Our project has done compeletely */}
      <div className="container-lg container-fluid p-5">
        {/* Single Projects */}
        <div className="row bg-white my-3 p-0 rounded rounded-3">
          <div className="col-12 col-md-4 p-0">
            <img
              src="https://d3bur0e9fyg6zq.cloudfront.net/assets/img/images/our_projects/1.png"
              className="img-card"
              alt=""
            />
          </div>
          <div className="col-12 col-md-8 text-start p-5">
            <h2 className="text-bold">
              Outsourcing Recruitment and Payroll Management Services for MTN
            </h2>
            <br />
            <p className="lead">
              Jobs.af provides recruitment and payroll services to MTN
              Afghanistan. The scope of the project is to hire and manage
              payroll for 629 staff over 15 provinces within two years.
              Recruitment for the complete target will occur over phases, which
              the first phase successfully delivered.{" "}
            </p>
          </div>
        </div>
        {/* Single Projects */}
        <div className="row bg-white my-3 p-0 rounded rounded-3">
          <div className="col-12 col-md-4 p-0">
            <img
              src="https://d3bur0e9fyg6zq.cloudfront.net/assets/img/images/our_projects/2.png"
              className="img-card"
              alt=""
            />
          </div>
          <div className="col-12 col-md-8 text-start p-5">
            <h2 className="text-bold">
              Recruitment Services and Payment Management
            </h2>
            <br />
            <p className="lead">
              Jobs.af provided recruitment and payment services for Kyoto
              University of Japan to conduct online research. The scope of the
              project was to hire 240 out of 10,000 applicants. The project was
              successfully implemented and delivered with extraordinary
              outcomes. .{" "}
            </p>
          </div>
        </div>
        {/* Single Projects */}
        <div className="row bg-white my-3 p-0 rounded rounded-3">
          <div className="col-12 col-md-4 p-0">
            <img
              src="https://d3bur0e9fyg6zq.cloudfront.net/assets/img/images/our_projects/3.png"
              className="img-card"
              alt=""
            />
          </div>
          <div className="col-12 col-md-8 text-start p-5">
            <h2 className="text-bold">
              Human Resource and Payroll System for International Medical Corps
            </h2>
            <br />
            <p className="lead">
              Jobs.af implemented an HR and Payroll system to manage the
              personal information of over 1600 employees at IMC in 5 different
              provinces. In addition, the system also generated payroll lists
              and pay slips for all employees..{" "}
            </p>
          </div>
        </div>
        {/* Single Projects */}
        <div className="row bg-white my-3 p-0 rounded rounded-3">
          <div className="col-12 col-md-4 p-0">
            <img
              src="https://d3bur0e9fyg6zq.cloudfront.net/assets/img/images/our_projects/4.png"
              className="img-card"
              alt=""
            />
          </div>
          <div className="col-12 col-md-8 text-start p-5">
            <h2 className="text-bold">
              Placement Program and Employment Services
            </h2>
            <br />
            <p className="lead">
              Under this grant, NETLINKS through its Jobs.af unit ran the
              employment related services and placement project for USAID/AWDP
              program. The main objective of the project was to recruit over
              1600 jobseekers in Kabul, Herat, Mazar, Kandahar and Jalalabad,
              provide them pre-employment trainings, thus making them more
              employable. .{" "}
            </p>
          </div>
        </div>
        {/* Single Projects */}
        <div className="row bg-white my-3 p-0 rounded rounded-3">
          <div className="col-12 col-md-4 p-0">
            <img
              src="https://d3bur0e9fyg6zq.cloudfront.net/assets/img/images/our_projects/1.png"
              className="img-card"
              alt=""
            />
          </div>
          <div className="col-12 col-md-8 text-start p-5">
            <h2 className="text-bold">
              Outsourcing Recruitment and Payroll Management Services for MTN
            </h2>
            <br />
            <p className="lead">
              Jobs.af provides recruitment and payroll services to MTN
              Afghanistan. The scope of the project is to hire and manage
              payroll for 629 staff over 15 provinces within two years.
              Recruitment for the complete target will occur over phases, which
              the first phase successfully delivered.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
  content: {
    fontWeight: 500,
    color: "white",
  },
};
export default Projects;
