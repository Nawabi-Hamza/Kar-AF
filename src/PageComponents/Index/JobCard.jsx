import React from 'react'
import { Link } from 'react-router-dom'
function JobCard({data}) {
  return (
    <Link to={`/singlejob/${data.id}`} key={data.id} className="link-underline link-underline-opacity-0">
                  <div
                    className="card-job my-2 p-4 pb-3 d-block d-md-flex text-dark justify-content-between align-datas-center"
                  >
                    <div className="card-head d-flex justify-content-start gap-3 flex-fill">
                      <div className="card-img bg-secondary rounded rounded-circle p-1">
                        <img
                          src={`./assets/${data.img}`}
                          className="img-jobs rounded rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="card-main px-3 px-md-0 text-start d-flex flex-column justify-content-center">
                        <h5 className="avai-job-text">{data.jobTitle}</h5>
                        <div className="d-md-flex gap-4">
                          <p className="company-name">{data.company}</p>
                          <p className="location-date">
                          <i className="bi bi-geo-alt"></i> Kabul, Afghanistan {data.startDate}
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
                        {/* <Link to="" className="nav-link"> */}
                          <i className="bi bi-cloud-download text-dark"></i>
                        {/* </Link> */}
                      </p>
                    </div>
                  </div>
                  </Link>
  )
}

export default JobCard