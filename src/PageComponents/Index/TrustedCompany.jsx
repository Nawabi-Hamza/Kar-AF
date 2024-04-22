

import React from 'react'
import { Link } from 'react-router-dom'

function TrustedCompany({companies}) {
    const com = companies.slice(0,6)
  return (
    <div>
      <div className="container-fluid px-2 my-5 px-md-3 px-lg-5 container">
            <div>
                <h1 className='text-bold'>Trusted by Top Companies</h1>
                <p className='lead my-3' >With the first and fastest job-seeking application in Afghanistan, build your Professional Background</p>
                <button id='btn-fill' className='h4 my-4'>View All Companies</button>
                <div className="container-fluid">
                    <div className="row my-5 py-5">
                        {companies && com.map((item)=>(
                            <div className="col-6 col-md-4 col-xl-2 ">
                                <Link className='img-compnay-all m-2'>
                                    <img src={`./assets/${item.img}`} className='bg-light img-compnay rounded rounded-circle' alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default TrustedCompany