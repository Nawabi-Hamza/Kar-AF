
import React from 'react'

function Search() {
  return (
    <div id='bg-gradient'>
      <div className='container-md contianer-fluid py-5 '>
          <br /><br /><br />
          <div className='content'>
              <p className='lead text-light display-4' style={style.content}>Find your <span className='fw-bolder'>dream job</span>, Build your <br/>
              <span className='fw-bolder'>network</span> or Hire the <span className='fw-bolder'>best talents!</span></p>
          </div>
          <div className="totla text-white d-flex justify-content-center mt-5 gap-4">
              <span>300k+ Jobs</span>
              <span>7k+ Companies</span>
          </div>
          <div className="search">
              <form className='search-container' style={style.searchContainer}>
                  <input type="text" placeholder='Search For Jobs' style={style.searchInput} />
                  <button id='btn-fill' style={style.searchButton}>Search</button>
              </form>
          </div>
          <br /><br /><br />
      </div>
    </div>
  )
}

const style = {
    content:{
    fontWeight: 500,
    color: 'white',
    },
    searchContainer:{
      position: 'relative',
      width: '60%',
      margin: '2.5em auto',
    },
    searchInput:{
      width: '100%',
      padding: '20px 30px 20px 20px',/* Adjust padding to accommodate the search button */
      border: '1px solid #ced4da',
      borderRadius: '3rem',
      boxSizing: 'border-box',
      fontSize: '1.5rem',
      outline: 'none',
    },
    searchButton:{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform:" translateY(-50%)",
        fontSize:'1.5rem',
        padding: ".5em 2em",
    }
}

export default Search