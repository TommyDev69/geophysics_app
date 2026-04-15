import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FourthSurveyContent from './FourthSurveyContent';
import Swal from "sweetalert2";
import { getUserProfileAction } from '../redux/slice/user/usersSlice';
// import { getUserProfileAction } from '../../redux/slice/user/usersSlice';
// getUserProfileAction

export default function FourthSurveyConnectivity({ onNext }) {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.users);
  const { survey } = useSelector((state) => state.surveys);
  
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

  // Get recommended methods from survey data
  const recommendedMethods = survey?.recommendedMethods || [];
  
  // If no recommended methods, provide fallback
  const methods = recommendedMethods.length > 0 
    ? recommendedMethods.map((method, index) => {
        // Handle different data structures
        const methodName = typeof method === 'string' 
          ? method 
          : method?.name || method?.method || 'Unknown Method';
        
        return {
          id: `method-${index}`,
          name: methodName,
          details: method?.depthRange || 'Method recommended based on survey parameters'
        };
      })
    : [
        { id: 'magnetic', name: 'Magnetic Survey', details: 'Magnetic survey extra details here' },
        { id: 'gravity', name: 'Gravity Survey', details: 'Gravity survey extra details here' },
      ];

  const handleIcon = (row) => {
    setSelectedRow(prev => (prev === row ? null : row));
  }

  const handleSelect = (e) => {
    e.preventDefault();
    if (!selectedRow) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a method before continuing",
      });
      return;
    }

    const selectedMethod = methods.find(m => m.id === selectedRow);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Survey setup completed",
    }).then(() => {
      if (onNext) onNext(selectedMethod.name);
    });
  };

  return (
    <div className='w-[967px] mx-auto'>
      <FourthSurveyContent
        handleSelect={handleSelect}
        selectedRow={selectedRow}
        handleIcon={handleIcon}
        methods={methods}
        primaryMethod={methods[0]}
      />
    </div>
  );
}