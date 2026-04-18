import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SixSurveyContent from './SixSurveyContent';
import { getUserProfileAction } from '../../redux/slice/user/usersSlice';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { useNavigate } from 'react-router-dom';

const SixSurveyConnectivity = ({ selectedMethod, onNext }) => {
  const dispatch = useDispatch();
  
  const { profile } = useSelector((state) => state.users);

//   const { survey, recommendedMethods } = useSelector((state) => state.surveys);

  const { userAuth } = useSelector((state) => state.users);
  const { recommendedMethods: reduxRecommendedMethods } = useSelector((state) => state.surveys);
  
  // ✅ Get LATEST survey, not first
  const lastSurvey = profile?.message?.survey?.[profile.message.survey.length - 1];
  const lastObjective = profile?.message?.survey?.[profile.message.survey.length - 1];

  const [methodsFromApi, setMethodsFromApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

// <<<<<<< Updated upstream
  // Extract project and client information
  const projectName = profile?.message?.survey?.[profile.message.survey.length - 1]?.surveyName || 'Project Name Not Found';
// =======
  // ✅ Fetch survey methods from API (same pattern as FourthSurveyConnectivity)
  useEffect(() => {
    const fetchSurveyMethods = async () => {
      try {
        const surveyId = lastSurvey?._id;
        
        console.log('=== SixSurveyConnectivity: Fetching Methods ===');
        console.log('Survey ID from profile:', surveyId);

        if (!surveyId) {
          console.log('⚠️ No survey ID found in profile');
          setIsLoading(false);
          return;
        }

        const token = userAuth?.userInfo?.message?.token;
        if (!token) {
          console.log('⚠️ No token found');
          setIsLoading(false);
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(`${baseUrl}/surveys/${surveyId}`, config);
        console.log('📥 API Response for survey:', response.data);

        const survey = response.data.message;
        const apiRecommendedMethods = survey?.recommendedMethods || [];
        
        console.log('✅ Recommended Methods from API:', apiRecommendedMethods);
        setMethodsFromApi(apiRecommendedMethods);
        setIsLoading(false);
      } catch (error) {
        console.error('❌ Error fetching survey:', error.message);
        setIsLoading(false);
      }
    };

    if (lastSurvey?._id) {
      fetchSurveyMethods();
    }
  }, [lastSurvey, userAuth]);

  // ✅ Use API data first, then Redux, then fallback
  const finalRecommendedMethods = methodsFromApi.length > 0 ? methodsFromApi : reduxRecommendedMethods;

  // ✅ Format methods array
  const methods = finalRecommendedMethods && finalRecommendedMethods.length > 0 
    ? finalRecommendedMethods.map((method, index) => {
        const methodName = typeof method === 'string' 
          ? method 
          : method?.name || method?.method || 'Unknown Method';
        
        return {
          id: `method-${index}`,
          name: methodName,
          details: method?.depthRange || 'Method recommended based on survey parameters'
        };
      })
    : [];

  // const projectName = lastSurvey?.surveyName || 'Project Name Not Found';
// >>>>>>> Stashed changes
  const clientName = profile?.message?.fullName || 'Client Name Not Found';
  const projectObjective = lastObjective?.surveyObjective || 'Project Objective Not Found';
  const clientEmail = profile?.message?.email || 'Email Not Found';
  
  // Extract recommended method name - handle different data structures
  // const methodName = selectedMethod || 
  //   (recommendedMethods?.[0]?.name || recommendedMethods?.[0]?.method || 'Electrical Resistivity Tomography (ERT)');
  const naviToProjectPlan = useNavigate();
  const handleNavigateToProjectPlan = () => {
    naviToProjectPlan('/dashboard/planner/1');
  }
  return (
    <SixSurveyContent
      selectedMethod={selectedMethod}
      projectName={projectName}
      clientName={clientName}
      projectObjective={projectObjective}
      clientEmail={clientEmail}
      handleNavigateToProjectPlan={handleNavigateToProjectPlan}
      methods={methods}
      // primaryMethod={methods[0]}
      onNext={onNext}
    />
  );
};

export default SixSurveyConnectivity;
