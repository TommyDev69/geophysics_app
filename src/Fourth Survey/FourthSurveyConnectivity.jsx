import React, { useState } from 'react';
import FourthSurveyContent from './FourthSurveyContent';
import Swal from "sweetalert2";

export default function FourthSurveyConnectivity({ onNext }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleIcon = (row) => {
    setSelectedRow(prev => (prev === row ? null : row));
  }

  const handleSelect = (e) => {
    e.preventDefault();
    if (!setSelectedRow) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all required fields (*) before continuing",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Survey setup completed",
    }).then(() => {
      if (onNext) onNext();
    });
  };

  return (
    <div className='w-[967px] mx-auto pt-16'>
      <FourthSurveyContent
        handleSelect={handleSelect}  // lowercase h
        selectedRow={selectedRow}
        handleIcon={handleIcon}
      />
    </div>
  );
}