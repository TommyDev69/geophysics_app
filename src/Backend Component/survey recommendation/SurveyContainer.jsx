import React from 'react'
import SurveyConnectivity from './SurveyConnectivity'
import SurveyFormValidation from './SurveyFormValidation'

export default function SurveyContainer() {
  return (
    <div className='w-[967px] mx-auto ' >
      <SurveyConnectivity />
      <SurveyFormValidation />
    </div>
  )
}
