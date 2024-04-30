import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function ProjectCards({data}) {
  return (
    <>
        <div className="row">
            {data && data.map(({id,image,title,location})=>(
                <Link to="/" className='col-12 Link col-md-6 col-lg-4 px-2 my-3' key={id}>
                    <div className='cards d-flex bg-white p-3 gap-3 align-items-center '>
                        <img src={`./assets/${image}`} className='rounded rounded-circle p-1 bg-light' alt="" />
                        <div className="content text-start">
                            <h3 className='fw-bold-custom'>{title}</h3>
                            <p className='text-muted small-font'>{location.map( (item)=>(<small>{item} ,</small>))}Afghanistan</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </>
  )
}

export default ProjectCards