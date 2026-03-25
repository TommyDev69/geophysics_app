import React from 'react'
import SixSurveyHead from './SixSurveyHead'
import SixSurveyConnectivity from './SixSurveyConnectivity'

export default function SixSurveyContainer({ selectedMethod, onNext }) {
  return (
    <div className='w-[1280px] mx-auto'> 
      <SixSurveyHead />
      <SixSurveyConnectivity selectedMethod={selectedMethod} onNext={onNext} />
    </div>
  )
}
