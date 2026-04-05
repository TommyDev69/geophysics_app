// import React,{useState} from 'react'

import DashboardBody from './DashboardBody'

export default function DashboardContainer() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  //   const toggleSidebar = ()=>{
  //       setIsSidebarOpen(!isSidebarOpen)
  //   }
  return (
    <div className='md:w-[968px]   flex-col mx-auto '>
     
       <DashboardBody />
    </div>
  )
}
