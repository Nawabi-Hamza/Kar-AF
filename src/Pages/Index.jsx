import React from 'react'
import Search from '../PageComponents/Index/Search'
import SwiperCards from '../PageComponents/Index/SwiperCards'
import AvaliableJobs from '../PageComponents/Index/AvaliableJobs'

import { data } from './DemoData'



function Index() {
  return (
    <div>
        <Search />
        <SwiperCards jobdata={data} />
        <AvaliableJobs avalaibleJob={data}/>
    </div>
  )
}

export default Index


