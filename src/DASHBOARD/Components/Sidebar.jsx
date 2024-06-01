import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar-links'>
        <Link className='sidebar-link' to="/dashboard" ><i class="bi bi-house"></i> &nbsp;Dashboard</Link>
        <Link className='sidebar-link' to="/dashboard/users" ><i class="bi bi-people-fill"></i> &nbsp;Users</Link>
        <Link className='sidebar-link' to="/dashboard/jobs" ><i class="bi bi-briefcase"></i> &nbsp;Jobs</Link>
        <Link className='sidebar-link' to="/dashboard/companies" ><i class="bi bi-buildings"></i> &nbsp;Companies</Link>
        <Link className='sidebar-link' to="/dashboard/service" ><i class="bi bi-card-heading"></i> &nbsp;Service</Link>
        <Link className='sidebar-link' to="/dashboard/scholorship" ><i class="bi bi-card-heading"></i> &nbsp;Scholorships</Link>
        <Link className='sidebar-link' to="/dashboard/profile" ><i class="bi bi-person-badge"></i> &nbsp;Profile</Link>
        <Link className='sidebar-link' to="/" ><i class="bi bi-lock-fill"></i> &nbsp;Logout</Link>
    </div>
  )
}

export default Sidebar