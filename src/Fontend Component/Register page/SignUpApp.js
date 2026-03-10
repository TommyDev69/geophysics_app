import React from 'react'
import SignUpContainer from './SignUpContainer'
import Carpet from "../image/carpet.png"

export default function SignUpApp() {
  return (
       <div className="min-w-[1280px] bg-bottom bg-no-repeat bg-contain" style={{ backgroundImage: `url(${Carpet}) `}}>
   
      <SignUpContainer />
    </div>
  )
}
