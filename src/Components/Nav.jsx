import { Link } from 'react-router-dom'
import React from 'react'
import Logo from "./Logo.png"
function Nav() {
   
    
  return (
        <nav className="navbar sticky-top navbar-expand-lg bg-light py-md-3">
            <div className="container-lg container-fluid">
                <Link className="navbar-brand" to="/" >
                    <img src={Logo} className='img-logo' alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon icon-red">
                    <svg className="navbar-toggler-icon-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22"/>
                    </svg>
                </span>
                </button>
                <div className="offcanvas offcanvas-start w-75"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title nav-link" id="offcanvasNavbarLabel"><span className='text-uppercase fw-bolder h3'>Kar</span> <sub className='text-dark'>AF</sub></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center gap-3 flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link" to="/jobs">Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/companies">Companies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/our-projects">Scholorship</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/services" role="button">
                                Services
                                </Link>
                                {/* <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Procurement Oportunaties</a></li>
                                <li><a className="dropdown-item" href="/">Training</a></li>
                                <li><a className="dropdown-item" href="/">Scholorship</a></li>
                                </ul> */}
                            </li>
                            <li>
                                <Link className='nav-link' to="/news">
                                    News
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav justify-content-center gap-2 mt-5 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " id='btn-outline-fill' to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='btn-fill' to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
   
  )
}

export default Nav