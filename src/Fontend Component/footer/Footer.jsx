import React from 'react'
import footerHeader from "../image/Header.png"
import FooterSignUp from './FooterSignUp'
export default function Footer() {
  return (
    <div className='min-w-[#1280px] bg-[#111111] flex justify-center py-20'>
        <div className="flex-col">
            <div className='flex justify-center'>
                <img src={footerHeader} alt="foot" className='w-6/12' />
            </div>
                <div className=''>
                    <FooterSignUp />
                </div>
        </div>
      </div>
  )
}
