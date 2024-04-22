import React, { useState } from "react";
import "./avaliablejob.css";
import { Link } from "react-router-dom";

function AvaliableJobs({ avalaibleJob }) {
  // Pagination
  const firstCount = 0;
  const secondCount = 4;
  const [first, setFirst] = useState(firstCount);
  const [second, setSecond] = useState(secondCount);

  const limitData = avalaibleJob.slice(first, second);
  const fullLengthData = avalaibleJob.length

   // Function to handle clicking on "Previous"
   const handlePrevious = () => {
    if (first > 0) {
      setFirst(first - secondCount);
      setSecond(second - secondCount);
    }
  };
  // Function to handle clicking on "Next"
  const handleNext = () => {
    if (second < fullLengthData) {
      setFirst(first + secondCount);
      setSecond(second + secondCount);
    }
  };
  return (
    <>
      <div className="px-lg-5 container-lg available-job">
        <div className="job-wrapper px-1 py-3 p-lg-5">
          <div className="px-md-5 ">
            <div className="section-frist d-flex justify-content-between align-items-center">
              <h3 className="ava-job">
                Available Jobs <sup>({fullLengthData})</sup>
              </h3>
              <div className="nav-links select navgation-job d-flex gap-1">
                <Link className="nav-link active" to="">
                  Latest Job
                </Link>
                <Link className="nav-link not-active" to="">
                  Female Only
                </Link>
                <Link className="nav-link not-active" to="">
                  Expiring Today
                </Link>
              </div>
            </div>
            <hr />

            <div className="section-second">
              {/* Every Available Job */}
              {avalaibleJob &&
                limitData.map((item) => (
                  <Link to={`/singlejob/${item.id}`} key={item.id} className="link-underline link-underline-opacity-0">
                  <div
                    className="card-job my-2 p-4 pb-3 d-block d-md-flex text-dark justify-content-between align-items-center"
                  >
                    <div className="card-head d-flex justify-content-start gap-3 flex-fill">
                      <div className="card-img bg-secondary rounded rounded-circle p-1">
                        <img
                          src={`./assets/${item.img}`}
                          className="img-jobs rounded rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="card-main px-3 px-md-0 text-start d-flex flex-column justify-content-center">
                        <h5 className="avai-job-text">{item.jobTitle}</h5>
                        <div className="d-md-flex gap-4">
                          <p className="company-name">{item.company}</p>
                          <p className="location-date">
                          <i className="bi bi-geo-alt"></i> Kabul, Afghanistan {item.startDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-right ms-5 ms-md-0 d-flex gap-3">
                      <p className="tags nav-link text-dark">Female</p>
                      <p className="card-right-text d-none d-lg-flex gap-3">
                        {/* <Link to="" className="nav-link">
                          <i className="bi bi-info-circle text-dark"></i>
                        </Link>{" "} */}
                        <Link to="" className="nav-link">
                          <i className="bi bi-cloud-download text-dark"></i>
                        </Link>
                      </p>
                    </div>
                  </div>
                  </Link>
                ))}
              <div className="">
                <nav className="my-5">
                  <ul className="pagination d-flex justify-content-center">
                    <li
                      className={`page-item ${first===0 ? "disabled":null}`}
                      onClick={handlePrevious}
                    >
                      <b className="page-link nav-link">&lt; Previouse</b>
                    </li>

                    <li
                      className={`page-item ${second>=fullLengthData ? "disabled":null}`}
                      onClick={handleNext}
                    >
                      <b className="page-link nav-link">Next &gt;</b>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvaliableJobs;
