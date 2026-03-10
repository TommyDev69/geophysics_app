import React from 'react'
import Carpet from "../image/carpet.png"
import LoginContainer from './LoginContainer'
export default function MainLogin() {
  return (
    <div className='min-w-[1280px] bg-bottom ' style={{ backgroundImage: `url(${Carpet})` }}>
        <LoginContainer />
    </div>
  )
}
