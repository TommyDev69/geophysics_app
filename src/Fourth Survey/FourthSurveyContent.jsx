import React from 'react';
import info from '../Backend Component/image/Info.png';
import Ellipse from '../Backend Component/image/Ellipse 1.png';
import left from '../Backend Component/image/ChevronLeft.png';
import right from '../Backend Component/image/ChevronRight.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSmileBeam, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export default function FourthSurveyContent({
  handleSelect,
  selectedRow,
  handleIcon,
  methods = [],
  primaryMethod = null
}) {

  const { recommendedMethods } = useSelector((state) => state.surveys);

  // ✅ DEFAULT METHODS (fallback)
  const defaultMethods = [
    { id: 'magnetic', name: 'Magnetic Survey', details: 'Magnetic survey extra details here' },
    { id: 'gravity', name: 'Gravity Survey', details: 'Gravity survey extra details here' },
  ];

  // ✅ NORMALIZE EVERYTHING INTO SAME STRUCTURE
  const normalizeMethods = (data) => {
    if (!Array.isArray(data)) return [];

    return data.map((item, index) => ({
      id: item?.id || index,
      name:
        typeof item === "string"
          ? item
          : item?.name || item?.method || "Unknown Method",
      details: item?.details || "Recommended based on survey input"
    }));
  };

  // ✅ FINAL METHODS SOURCE
  const normalizedRecommended = normalizeMethods(recommendedMethods);
  const normalizedPropsMethods = normalizeMethods(methods);

  const displayMethods =
    normalizedPropsMethods.length > 0
      ? normalizedPropsMethods
      : normalizedRecommended.length > 0
      ? normalizedRecommended
      : defaultMethods;

  // ✅ PRIMARY METHOD
  const primary =
    primaryMethod ||
    displayMethods[0] ||
    { name: "No recommendation", details: "" };

  return (
    <form onSubmit={handleSelect}>
      <div className="font-instrument w-full border px-6 py-4 rounded-lg border-gray-300">

        {/* HEADER */}
        <h2 className="text-xl font-semibold mb-4">Method Recommendation</h2>

        {/* PRIMARY CARD */}
        <div className="border rounded-lg p-4 bg-gray-100 mb-6">
          <h3 className="text-lg font-semibold mb-2">Primary Recommendation</h3>

          <p className="text-[24px] font-semibold">
            {primary?.name || "No recommendation"}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {primary?.details}
          </p>
        </div>

        {/* ALTERNATIVE METHODS */}
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
              {displayMethods.map((method) => (
                <React.Fragment key={method.id}>
                  <tr>
                    <td className="pl-2 py-2">{method.name}</td>

                    {/* ACTION */}
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

                    {/* TOGGLE */}
                    <td className="text-center">
                      <FontAwesomeIcon
                        icon={selectedRow === method.id ? faSmileBeam : faThumbsUp}
                        onClick={() => handleIcon(method.id)}
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>

                  {/* DETAILS */}
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
            type="button"
            onClick={() => window.history.back()}
            className="flex gap-2 items-center justify-center w-[120px] py-[10px] px-[15px] rounded-[10px] border border-[#DADCE0] text-[#364153] font-medium text-[14px]"
          >
            <img src={left} alt="" /> Cancel
          </button>

          <button
            type="submit"
            className="flex gap-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] bg-[#364153] text-white font-medium text-[14px]"
          >
            Next <img src={right} alt="" />
          </button>
        </div>

      </div>
    </form>
  );
}