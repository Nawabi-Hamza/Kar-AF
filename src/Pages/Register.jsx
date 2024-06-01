import React from 'react'
import { Link } from 'react-router-dom'
import "./Login_Register.css"
function Register() {
  return (
    <div className='container-lg container-fluid register'>
      <div className='text-start'>
          <Link to="/">
              <button id='btn-fill' className='my-3 rounded rounded-3'><i class="bi bi-house"></i> &nbsp; Home</button>
          </Link>
      </div>
      <dir className="row">
        <div className="col-12 col-lg-4 offset-lg-4">
          <form action="" className='text-start'>
            <div className="mb-3 text-center text-danger">
              <h1>Register</h1>
            </div>
            <div className='mb-1'>
              <label htmlFor="email">Username:</label>
              <input type="text" className='form-control mt-1' placeholder='Hamza Nawabi'/>
            </div>
            <div className='mb-1'>
              <label htmlFor="email">Email:</label>
              <input type="text" className='form-control mt-1' placeholder='info@gmail.com'/>
            </div>
            <div className='mb-1'>
              <label htmlFor="email">Phone:</label>
              <input type="text" className='form-control mt-1' placeholder='+93 123 456 789'/>
            </div>
            <div className='mb-1'>
              <label htmlFor="email">Password:</label>
              <input type="text" className='form-control mt-1' placeholder='Enter a password'/>
              <input type="text" className='form-control mt-1' placeholder='Enter your password again'/>
            </div>
            <div className="mb-1 d-grid gap-2">
              <button  className='btn my-3 rounded rounded-3  btn-block' id='btn-fill'>Create account</button><br />
              <Link to='/login'>Have an accound ?</Link>
            </div> 
          </form>
        </div>
      </dir>      
      </div>
  )
}

export default Register