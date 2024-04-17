import React from 'react'
import Nav from '../Components/Nav'
import Foot from '../Components/Foot'
import { Outlet } from 'react-router-dom'

function NavbarFooter() {
  return (
    <>
        <Nav />
            <Outlet />
        <Foot />
    </>
  )
}

export default NavbarFooter