import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SixSurveyContent from './SixSurveyContent';
import { getUserProfileAction } from '../../redux/slice/user/usersSlice';

const SixSurveyConnectivity = ({ selectedMethod, onNext }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

  const survey = profile?.message?.survey?.[0];
  const projectName = survey?.surveyName || 'Project Name Not Found';
  const clientName = profile?.message?.fullName || 'Client Name Not Found';
  const projectObjective = survey?.surveyObjective || 'Project Objective Not Found';
  const clientEmail = profile?.message?.email || 'Email Not Found';

  return (
    <SixSurveyContent
      selectedMethod={selectedMethod}
      projectName={projectName}
      clientName={clientName}
      projectObjective={projectObjective}
      clientEmail={clientEmail}
      onNext={onNext}
    />
  );
};

export default SixSurveyConnectivity;
