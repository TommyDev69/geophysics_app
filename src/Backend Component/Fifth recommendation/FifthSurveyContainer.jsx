import React from 'react'
import FifthSurveyHead from './FifthSurveyHead'
import FifthSurveyContent from './FifthSurveyContent'
import FifthSurveyConnectivity from './FifthSurveyConnectivity'

export default function FifthSurveyContainer() {
  return (
    <div className='w-[1280px] mx-auto'> 
        <FifthSurveyHead />
        <FifthSurveyConnectivity />
    </div>
  )
}
