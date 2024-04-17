import React from 'react'
import Search from '../PageComponents/Index/Search'
import SwiperCards from '../PageComponents/Index/SwiperCards'

function Index() {
  console.info("Welcome To Kar Website")
  console.error("Welcome To Kar Website")
  console.warn("Welcome To Kar Website")
  console.log("Welcome To Kar Website")
  return (
    <div>
        <Search />
        <SwiperCards jobdata={data} />
    </div>
  )
}

export default Index


// Demo Data
const data = [
  {
    id:1,
    img:"1.jpg",
    company:"Facebook",
    jobTitle:"Web Developer",
    startDate:'Apr 12,2023'
  },
  {
    id:2,
    img:"2.jpg",
    company:"Google",
    jobTitle:"Market Manager",
    startDate:'May 2,2022'
  },
  {
    id:3,
    img:"3.jpg",
    company:"Amazon",
    jobTitle:"Content Developer",
    startDate:'Jul 10,2023'
  },
  {
    id:4,
    img:"4.jpg",
    company:"UN",
    jobTitle:"Service Manage",
    startDate:'Apr 12,2023'
  },
  {
    id:5,
    img:"5.jpg",
    company:"Seller",
    jobTitle:"Accounting",
    startDate:'May 2,2022'
  },
  {
    id:6,
    img:"6.jpg",
    company:"Pizza Hut",
    jobTitle:"Driver",
    startDate:'Jul 7,2024'
  },
]
