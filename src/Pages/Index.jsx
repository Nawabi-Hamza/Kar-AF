import React from 'react'
import Search from '../PageComponents/Index/Search'
import SwiperCards from '../PageComponents/Index/SwiperCards'
import AvaliableJobs from '../PageComponents/Index/AvaliableJobs'

import { data } from './DemoData'
import TrustedCompany from '../PageComponents/Index/TrustedCompany'



function Index() {
  return (
    <div>
        {/* Hero Section Search Job */}
        <Search />
        {/* Swiper Latest Job */}
        <SwiperCards jobdata={data} />
        {/* Avalaible Jobs in AFG */}
        <AvaliableJobs avalaibleJob={data}/>
        {/* Big Companies trusted US */}
        <TrustedCompany companies={data} />
    </div>
  )
}

export default Index


