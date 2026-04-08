import React, { useState } from 'react';
import FourthSurveyContent from './FourthSurveyContent';
import Swal from "sweetalert2";

export default function FourthSurveyConnectivity({ onNext }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const methods = [
    { id: 'magnetic', name: 'Magnetic Survey' },
    { id: 'gravity', name: 'Gravity Survey' },
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
        handleSelect={handleSelect}  // lowercase h
        selectedRow={selectedRow}
        handleIcon={handleIcon}
      />
    </div>
  );
}