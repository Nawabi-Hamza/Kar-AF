import React, { useState } from "react";
import "./avaliablejob.css";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";

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
            <hr className="text-danger" />

            <div className="section-second">
              {/* Every Available Job */}
              {avalaibleJob &&
                limitData.map((item) => (
                  <JobCard data={item}/>
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
