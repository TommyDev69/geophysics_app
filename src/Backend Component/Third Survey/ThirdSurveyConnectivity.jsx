import React from 'react'
import ThirdSurveyValidation from './ThirdSurveyValidation'

export default function ThirdSurveyConnectivity({ secondSurveyData, onNext }) {
  return (
    <>
      <ThirdSurveyValidation secondSurveyData={secondSurveyData} onNext={onNext} />
    </>
  )
}
