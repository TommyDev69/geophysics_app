import React from 'react'
import SurveyConnectivity from './SurveyConnectivity'
import SurveyFormValidation from './SurveyFormValidation'
import Navbar from '../nav backend/Navbar'

export default function SurveyContainer() {
  return (
    <div className='w-[967px] mx-auto ' >
      {/* <Navbar /> */}
      <SurveyConnectivity />
      <SurveyFormValidation />
    </div>
  )
}
