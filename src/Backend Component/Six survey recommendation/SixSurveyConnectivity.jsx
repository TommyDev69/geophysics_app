import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SixSurveyContent from './SixSurveyContent';
import { getUserProfileAction } from '../../redux/slice/user/usersSlice';

const SixSurveyConnectivity = ({ selectedMethod, onNext }) => {
  const dispatch = useDispatch();
  
  // Fetch user profile and survey data from Redux
  const { profile } = useSelector((state) => state.users);
  const { survey, recommendedMethods } = useSelector((state) => state.surveys);

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

  // Extract project and client information
  const projectName = survey?.surveyName || 'Project Name Not Found';
  const clientName = profile?.message?.fullName || 'Client Name Not Found';
  const projectObjective = survey?.surveyObjective || 'Project Objective Not Found';
  const clientEmail = profile?.message?.email || 'Email Not Found';
  
  // Extract recommended method name - handle different data structures
  const methodName = selectedMethod || 
    (recommendedMethods?.[0]?.name || recommendedMethods?.[0]?.method || 'Electrical Resistivity Tomography (ERT)');

  return (
    <SixSurveyContent
      selectedMethod={selectedMethod}
      projectName={projectName}
      clientName={clientName}
      projectObjective={projectObjective}
      clientEmail={clientEmail}
      methodName={methodName}
      onNext={onNext}
    />
  );
};

export default SixSurveyConnectivity;
