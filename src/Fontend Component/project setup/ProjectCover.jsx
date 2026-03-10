import React from 'react'
import photo from '../image/Photo.png'
import border from '../image/Frame 2147224098.png'
import ProjectSetupArea from './ProjectSetupArea'

export default function ProjectCover() {
  return (
    <div className='md:container py-4 md:mx-auto md:min-w-[528px] px-10 gap-4 md:flex items-center'>
      <div className='md:min-w-[491px] pb-8 md:pb-0 flex justify-center md:order-1 order-3'>
          <img src={photo} alt="Phot" className='rounded-[10px]  md:w-10/12'/>
      </div>
      <div className='order-2 md:flex hidden' >
        <img src={border} alt="bor" className='md:w-10/12 ' />
      </div>
      <div className='md:order-3 order-1'>

      <ProjectSetupArea />
      </div>
    </div>
  )
}
