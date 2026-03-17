import React from 'react'
import logo from '../../Fontend Component/image/brandLogo.png'
export default function NavBarBand() {
  return (
    <div className='max-w-[201px] flex items-center'>
       <div className='max-w-[32px]'>
          <img src={logo} alt="brand" />
       </div>
       <div className='max-w-[162px]'>
         <p className="max-w-[158px]"></p>
       </div>
    </div>
  )
}
