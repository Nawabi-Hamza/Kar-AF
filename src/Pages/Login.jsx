import React from 'react'
import "./Login_Register.css"
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='container-lg container-fluid login'>
      <div className='text-start'>
          <Link to="/">
              <button id='btn-fill' className='my-3 rounded rounded-3'><i class="bi bi-house"></i> &nbsp; Home</button>
          </Link>
      </div>
      <dir className="row">
        <div className="col-12 col-lg-4 offset-lg-4">
          <form action="" className='text-start'>
            <div className="mb-3 text-center text-danger">
              <h1>Login</h1>
            </div>
            <div className='mb-3'>
              <label htmlFor="email">Email:</label>
              <input type="text" className='form-control mt-1' placeholder='info@gmail.com'/>
            </div>
            <div className='mb-3'>
              <label htmlFor="email">Password:</label>
              <input type="text" className='form-control mt-1' placeholder='Your password'/>
            </div>
            <div className="mb-3 d-grid gap-2">
              <button  className='btn my-3 rounded rounded-3  btn-block' id='btn-fill'>Login</button><br />
              
              <Link to='/register'>Doesn't  Have an accound ?</Link>
            </div> 
          </form>
        </div>
      </dir>      
    </div>
  )
}

export default Login