import React from "react";
import ProjectCards from "../PageComponents/Projects/ProjectCards";
// import Search from "../PageComponents/Index/Search";

function Companies() {

  return (
    <>
      <div id="bg-gradient" className="pt-5 text-light">
        <h1 className="display-4">
        Find great places to <span className="fw-bold">work</span>
        </h1>
        <p>5735 Companies</p>
        <div className="search">
          <form className="search-container" style={style.searchContainer}>
            <input
              type="text"
              placeholder="Search For Jobs"
              style={style.searchInput}                
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
          <br />
          {/* Every Available Job */}
          
          <ProjectCards data={companies} />
          
          {/* <div className="w-10">
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Companies;

const companies = [
  {
    id:1,
    image:'1.jpg',
    title:'RRCC',
    location:['kabul','Mazar']
  },
  {
    id:2,
    image:'4.jpg',
    title:'Netlink',
    location:['Herat','Mazar']
  },
  {
    id:3,
    image:'3.jpg',
    title:'RRCC',
    location:['kabul']
  },
  {
    id:4,
    image:'4.jpg',
    title:'Alibaba',
    location:['kabul','Mazar']
  },
  {
    id:5,
    image:'5.jpg',
    title:'Amazon',
    location:['Herat','Mazar']
  },
  {
    id:6,
    image:'6.jpg',
    title:'WHO',
    location:['kabul']
  },
  {
    id:7,
    image:'4.jpg',
    title:'Alibaba',
    location:['kabul','Mazar']
  },
  {
    id:8,
    image:'5.jpg',
    title:'Amazon',
    location:['Herat','Mazar']
  },
  {
    id:9,
    image:'6.jpg',
    title:'WHO',
    location:['kabul']
  }
]

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
