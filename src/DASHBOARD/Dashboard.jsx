import React from 'react'
import "./style.css"
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="container-lg container-fluid py-4">
        <div className="row gap-5">
          <div className="col-lg-3">
              <Sidebar />
          </div>
          <div className="col-lg-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard