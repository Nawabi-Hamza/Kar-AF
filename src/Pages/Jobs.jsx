import React, { useState } from "react";
import { data } from "./DemoData";
import JobCard from "../PageComponents/Index/JobCard";
// import Search from "../PageComponents/Index/Search";

function Jobs() {
  // Pagination
  const firstCount = 0;
  const secondCount = 4;
  const [first, setFirst] = useState(firstCount);
  const [second, setSecond] = useState(secondCount);

  const limitData = data.slice(first, second);
  const fullLengthData = data.length;

  const [filterText, setFilterText] = useState("");
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
      <div id="bg-gradient" className="pt-5 text-light">
        <h1 className="display-4">
          Find your next <span className="fw-bold">Job, Now!</span>
        </h1>
        <p>Search by categories, companies, locations, and job types</p>
        <div className="search">
          <form className="search-container" style={style.searchContainer}>
            <input
              type="text"
              placeholder="Search For Jobs"
              style={style.searchInput}
              onChange={(e) => {
                setFilterText(e.target.value);
                if(filterText.length<1){
                  setFirst(firstCount)
                  setSecond(secondCount)
                }else{
                  setFirst(0)
                  setSecond(100)
                }
              }}
            />
            <button id="btn-fill" style={style.searchButton}>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="container-fluid container-md px-lg-5 mt-5">
        <div className="section-second">
          <br />
          <br />
          <div className="mx-2 mx-md-5 text-muted text-start d-flex justify-content-between h3">
            <b>{fullLengthData} Available Jobs</b>
            <button id="btn-outline-fill" className="text-danger">
              Filter
            </button>
          </div>
          <br />
          {/* Every Available Job */}
          {data &&
            limitData
              .filter((title) => title.jobTitle.toLocaleLowerCase().includes(filterText.toLowerCase()))
              .map((item) => <JobCard data={item} />)}
          <div className="">
            <nav className="my-5">
              <ul className="pagination d-flex justify-content-center">
                <li
                  className={`page-item ${first === 0 ? "disabled" : null}`}
                  onClick={handlePrevious}
                >
                  <b className="page-link nav-link">&lt; Previouse</b>
                </li>

                <li
                  className={`page-item ${
                    second >= fullLengthData ? "disabled" : null
                  }`}
                  onClick={handleNext}
                >
                  <b className="page-link nav-link">Next &gt;</b>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;

const style = {
  searchContainer: {
    position: "relative",
    maxWidth: "900px",
    margin: "2.5em auto",
    transform: "translateY(40px)",
  },
  searchInput: {
    width: "100%",
    padding:
      "20px 30px 20px 20px" /* Adjust padding to accommodate the search button */,
    border: "1px solid #ced4da",
    borderRadius: "3rem",
    boxSizing: "border-box",
    fontSize: "1.5rem",
    outline: "none",
  },
  searchButton: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: " translateY(-50%)",
    fontSize: "1.5rem",
    padding: ".5em 2em",
  },
};
