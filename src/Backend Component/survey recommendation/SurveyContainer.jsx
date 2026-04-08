import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SurveyConnectivity from './SurveyConnectivity'
import SurveyFormValidation from './SurveyFormValidation'
import SecondSurveyConnectivity from '../../second survey step/SecondSurveyConnectivity'
import ThirdSurveyValidation from '../Third Survey/ThirdSurveyValidation'
import FourthSurveyConnectivity from '../../Fourth Survey/FourthSurveyConnectivity'
import FifthSurveyConnectivity from '../Fifth recommendation/FifthSurveyConnectivity'
import SixSurveyConnectivity from '../Six survey recommendation/SixSurveyConnectivity'

export default function SurveyContainer() {
  const { step } = useParams();
  const surveyStep = parseInt(step, 10) || 1;
  const navigate = useNavigate();
  const [secondSurveyData, setSecondSurveyData] = useState(null);

  const goToNextSurveyStep = () => {
    const nextStep = surveyStep + 1;
    if (nextStep > 6) {
      navigate('/dashboard/survey/1');
    } else {
      navigate(`/dashboard/survey/${nextStep}`);
    }
  };

  return (
    <div className='w-[967px] mx-auto'>
      <SurveyConnectivity />
      <div className='mt-10'>
        {surveyStep === 1 && <SurveyFormValidation onNext={goToNextSurveyStep} />}
        {surveyStep === 2 && (
          <SecondSurveyConnectivity
            onNext={(data) => {
              setSecondSurveyData(data);
              goToNextSurveyStep();
            }}
          />
        )}
        {surveyStep === 3 && (
          <ThirdSurveyValidation
            secondSurveyData={secondSurveyData}
            onNext={goToNextSurveyStep}
          />
        )}
        {surveyStep === 4 && <FourthSurveyConnectivity onNext={goToNextSurveyStep} />}
        {surveyStep === 5 && <FifthSurveyConnectivity onNext={goToNextSurveyStep} />}
        {surveyStep === 6 && <SixSurveyConnectivity onNext={goToNextSurveyStep} />}
      </div>
    </div>
  )
}
