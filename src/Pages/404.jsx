
import React from 'react'
import "./404.css"
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <div className="container" style={style.container}>
      <div className="content" style={style.content}>
        <h1 style={style.h1}>404</h1>
        <h2 style={style.h2}>Oops! Page Not Found</h2>
        <p style={style.p}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="btn" style={style.btn}>Go Back to Home</Link>
      </div>
    </div>
  )
}
const style = {
  container :{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  content :{
    textAlign: 'center',
  },
  h1 :{
    fontSize: "100px",
    marginBottom: '10px',
    color: 'rgb(240, 11, 81)',
  },
  h2 :{
    fontSize: '36px',
    marginBottom: '20px',
  },
  p :{
    fontSize: '18px',
    marginBottom: '30px',
  },
  btn :{
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: 'rgb(240, 11, 81)',
    color:' #fff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition:'background-color 0.3s ease',
  },
}
export default NotFound