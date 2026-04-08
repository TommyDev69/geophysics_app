import React from 'react';
import info from '../Backend Component/image/Info.png';
import Ellipse from '../Backend Component/image/Ellipse 1.png';
import left from '../Backend Component/image/ChevronLeft.png';
import right from '../Backend Component/image/ChevronRight.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faXmark, faCheck, faThumbsDown, faSmileBeam, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function FourthSurveyContent({ handleSelect, selectedRow, handleIcon }) {

  const methods = [
    { id: 'magnetic', name: 'Magnetic Survey', details: 'Magnetic survey extra details here' },
    { id: 'gravity', name: 'Gravity Survey', details: 'Gravity survey extra details here' },
  ];

  const selectedMethod = methods.find((method) => method.id === selectedRow);
  const primaryName = selectedMethod ? selectedMethod.name : 'Electrical Resistivity Tomography (ERT)';
  const primaryDetails = selectedMethod ? selectedMethod.details : 'Electrical Resistivity Tomography (ERT) is recommended based on current inputs.';

  return (
    <form onSubmit={handleSelect}>

      <div className="font-instrument w-full border px-6 py-4 rounded-lg border-gray-300">

        {/* HEADER */}
        <h2 className="text-xl font-semibold mb-4">Method Recommendation</h2>

        {/* PRIMARY CARD */}
        <div className="border rounded-lg p-4 bg-gray-100 mb-6">
          <h3 className="text-lg font-semibold mb-2">Primary Recommendation</h3>
          <p className="text-[24px] font-semibold">{primaryName}</p>
          <p className="text-sm text-gray-500 mt-1">{primaryDetails}</p>

          <div className="flex mt-4">
            {/* LEFT */}
            <div className="w-1/2">
              <div className="flex items-center mb-2">
                <img src={info} alt="" className="w-5 h-5" />
                <p className="ml-2 font-semibold">Why this method?</p>
              </div>
              {[
                "Excellent for mapping aquifer boundaries and salinity interfaces.",
                "Optimal for target depth of 5m - 50m.",
                "Resilient to low ambient noise levels."
              ].map((text, idx) => (
                <div key={idx} className="flex items-center mb-1">
                  <img src={Ellipse} alt="" className="w-3 h-3" />
                  <p className="ml-2 text-sm">{text}</p>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="w-1/2">
              <p className="font-semibold mb-2">Field Technique Summary</p>
              <div className="border rounded-lg p-2">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-500">Array Types</span>
                  <span className="font-semibold">Wenner-Schlumberger</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-500">Electrode Spacing</span>
                  <span className="font-semibold">5.0 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Max Depth</span>
                  <span className="font-semibold">65 meters</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ALTERNATIVE METHODS TABLE */}
        <div className="border rounded-lg p-4 bg-gray-50 mb-6">
          <h3 className="font-semibold mb-2">Alternative Methods</h3>

          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="pl-2">METHOD</th>
                <th className="text-center">ACTION</th>
                <th className="text-center">TOGGLE</th>
              </tr>
            </thead>
            <tbody>
              {methods.map((method) => (
                <React.Fragment key={method.id}>
                  <tr>
                    <td className="pl-2 py-2">{method.name}</td>

                    {/* Clickable ACTION cell */}
                    <td
                      className="text-center cursor-pointer"
                      onClick={() => handleIcon(method.id)}
                    >
                      {selectedRow === method.id ? (
                        <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                      ) : (
                        'select'
                      )}
                    </td>

                    {/* TOGGLE ICON */}
                    <td className="text-center">
                      <FontAwesomeIcon
                        icon={selectedRow === method.id ? faSmileBeam : faThumbsUp}
                        onClick={() => handleIcon(method.id)}
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>

                  {/* Extra details row when toggled */}
                  {selectedRow === method.id && (
                    <tr>
                      <td colSpan="3" className="text-center text-gray-500 py-2">
                        {method.details}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between">
          <button
            type="submit"
            onClick={() => window.history.back()}
            className="flex gap-2 items-center justify-center w-[120px] py-[10px] px-[15px] rounded-[10px] border border-[#DADCE0] text-[#364153] font-medium text-[14px]"

          >
            <img src={left} alt="" /> Cancel
          </button>

          <button
            type="submit"
            className="flex gap-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] bg-[#364153] text-white font-medium text-[14px]"

          >
            Next <img src={right} clas alt="" />
          </button>
        </div>
      </div>
    </form>
  );
}