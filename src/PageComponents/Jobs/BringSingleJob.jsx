import React from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Variables";
import NotFound from "../../Pages/404";
import "./SingleJob.css"
export function BringSingleJob({ data }) {
  return (
    <>
      {data ? (
        <>
          <div className="d-flex py-5">
            <Link to="/" className="nav-link h5 text-danger">
              <i className="bi bi-arrow-left"></i>&nbsp;See All Jobs
            </Link>
          </div>
          <div className="container-fluid bg-white border bg-danger  single-job">
            <div className="head">
              <img
                src={`${baseUrl}/assets/${data.img}`}
                className="singleJobpage-img rounded rounded-circle"
                alt=""
              />
              <h2 className="fw-normal-c">{data.jobTitle}</h2>
              <p className="text-muted responsive-text-sm">{data.details} </p>
              <Link className="nav-link">
                {/* <button className="btn"></button> */}
                <button id="btn-fill">Apply Now</button>
              </Link>
            </div>
            <div className="row single-job-body px-2 px-md-5 mt-5">
              <hr className="text-gradient-danger" />
              <div className="single-job-banner text-muted text-start mb-3">
                <span>
                  <i className="bi bi-mortarboard-fill"></i> &nbsp;{" "}
                  {data.dataAnalysis.minimumEducation}
                </span>
                <span>
                  <i className="bi bi-geo-alt-fill"></i> &nbsp;{" "}
                  {data.province.length > 1 ? "(Multi Location)- " : null}
                  {data.province.length > 1
                    ? data.province.map((item) => (
                        <em className="ms-2" key={item}>{item},</em>
                      ))
                    : data.province[0]}
                </span>
                <span>
                  <i className="bi bi-clock-fill"></i> &nbsp; Full Time
                </span>
                <span>
                  <i className="bi bi-eye-fill"></i> &nbsp; 19
                </span>
              </div>
              <hr className="text-gradient-danger" />
              <div className="row text-start py-4">
                {/* col-4 started */}
                <div className="col-lg-4 order-lg-last mb-5">
                  <div className="right-side-single-job text-muted">
                    <span>Post Date</span>
                    <span>{data.dataAnalysis.postDate}</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Closing Date</span>
                    <span>{data.dataAnalysis.postDate}</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Number of Vacancies</span>
                    <span>{data.dataAnalysis.numberOfVacancies}</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Salary Range</span>
                    <span>{data.dataAnalysis.salaryRange}</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Years of Experience</span>
                    <span>{data.dataAnalysis.experience} Year</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Probation Period</span>
                    <span>{data.dataAnalysis.probationPeriod}</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Contract Type</span>
                    <span>{data.dataAnalysis.contractType}</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Contract Duration</span>
                    <span>{data.dataAnalysis.contractDuration}</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Contract Extensible</span>
                    <span>{data.dataAnalysis.contractExtensible}</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Minimum Education</span>
                    <span>{data.dataAnalysis.minimumEducation}</span>
                  </div>
                  <div className="right-side-single-job text-muted">
                    <span>Gender</span>
                    <span>{data.dataAnalysis.gender}</span>
                  </div>
                </div>
                {/* col-4 finished */}
                {/* /////////////////////////////////////////////////// */}
                {/* col-8 started */}
                <div className="col-lg-8 order-lg-first ">
                  {/* start content */}
                  <div className="a">
                    <h5 className="fw-normal-c">
                      About {data.aboutCompany.title} Company{" "}
                    </h5>
                    <p className="text-muted">
                      {data.aboutCompany.discription}
                    </p>
                  </div>
                  <div className="a">
                    <h5 className="fw-normal-c">Job Summary </h5>
                    <p className="text-muted">{data.jobSummary}</p>
                  </div>
                  <div className="a">
                    <h5 className="fw-normal-c">Duties & Responsibilities</h5>
                    {/* <p className="text-muted"> */}
                    <ul className="text-muted">
                      {data.dutiesAndResposibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {/* </p> */}
                  </div>
                  <div className="a">
                    <h5 className="fw-normal-c">Job Requirements</h5>
                    {/* <p className="text-muted"> */}
                    <ul className="text-muted">
                      {data.jobRequirement.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {/* </p> */}
                  </div>
                  <div className="a">
                    <h5 className="fw-normal-c">Submission Guideline</h5>
                    {/* <p className="text-muted"> */}
                    <ul className="text-muted">
                      {data.submition.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {/* </p> */}
                  </div>
                  <div className="a">
                    <h5 className="fw-normal-c">Functional Area</h5>
                    <p className="text-muted">
                      {data.functionalArea.map((item) => (
                        <button id="btn-fill" key={item} className="me-2" disabled={true}>
                          {item}
                        </button>
                      ))}
                    </p>
                  </div>
                  <div className="a">
                    <h5 className="fw-normal-c">Contries</h5>
                    <p className="text-muted">
                      {data.countries.map((item) => (
                        <button id="btn-fill" key={item} className="me-2" disabled={true}>
                          {item}
                        </button>
                      ))}
                    </p>
                  </div>
                  <div className="a">
                    <h5 className="fw-normal-c">Provinces</h5>
                    <p className="text-muted">
                      {data.province.map((item) => (
                        <button
                          id="btn-fill"
                          className="me-2 mb-2"
                          disabled={true}
                          key={item}
                        >
                          {item}
                        </button>
                      ))}
                    </p>
                  </div>
                  <div className="a">
                    <h5 className="fw-normal-c">Submission Email</h5>
                    <p className="text-muted">
                      {data.email.map((item) => (
                        <Link
                          to={`${item}`}
                          key={item}
                          className="me-2 text-danger"
                          disabled={true}
                        >
                          {item}
                        </Link>
                      ))}
                    </p>
                  </div>
                  <Link to="" className="a d-grid nav-link">
                    <button
                      id="btn-outline-fill"
                      className="btn text-danger py-2 w-100"
                    >
                      Apply
                    </button>
                  </Link>
                  {/* Finished content */}
                </div>
                {/* col-8 finished */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
