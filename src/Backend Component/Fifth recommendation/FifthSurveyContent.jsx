import ranges from "../image/ranges.png";
import left from "../image/ChevronLeft.png";
import right from "../image/ChevronRight.png";

const FifthSurveyContent = ({
  HandleSubmit,
  SurveyChange,
  error = {},
  userInput = {},
  rangeOptions = [],
  handleImageClick
}) => {

  return (
    <form onSubmit={HandleSubmit}>
      <div className="w-[967px] mx-auto border border-[#D7D7D7] rounded-[10px]">
        <div className="w-[917px] text-[#101828] mx-auto">
          <p className="font-semibold text-[20px] pt-[14px] pb-[10px]">
            Survey Area Definition
          </p>

          <div className="w-full bg-[#F9F9F9] px-5">
            <p className="font-semibold text-[16px] py-6">
              Layout Configuration
            </p>

            <div className="px-10">
              {/* Layout Pattern */}
              <label className="text-[16px]">Layout Pattern *</label>
              <p className="text-red-500 h-[18px]">
                {error.layoutPattern}
              </p>
              <select
                name="layoutPattern"
                value={userInput.layoutPattern}
                onChange={SurveyChange}
                className="py-[12px] w-full rounded-[10px] px-4 mb-6 border"
              >
                <option value="">Choose your layout</option>
                <option value="grid">Grid</option>
                <option value="linear">Linear</option>
                <option value="random">Random</option>
              </select>

              {/* Station & Line Spacing */}
              <div className="flex gap-4 mb-6">
                <div className="w-full">
                  <label>Station Spacing (m) *</label>
                  <p className="text-red-500 h-[18px]">
                    {error.stationSpacing}
                  </p>
                  <input
                    type="number"
                    min="0"
                    name="stationSpacing"
                    value={userInput.stationSpacing}
                    onChange={SurveyChange}
                    className="py-[10px] w-full rounded-[10px] px-4 border"
                  />
                </div>

                <div className="w-full">
                  <label>Line Spacing (m) *</label>
                  <p className="text-red-500 h-[18px]">
                    {error.lineSpacing}
                  </p>
                  <input
                    type="number"
                    min="0"
                    name="lineSpacing"
                    value={userInput.lineSpacing}
                    onChange={SurveyChange}
                    className="py-[10px] w-full rounded-[10px] px-4 border"
                  />
                </div>
              </div>

              {/* Range Selection */}
              <label>Range Selection *</label>
              <p className="text-red-500 h-[18px]">{error.range}</p>

              <div className="relative w-full my-4">
                <img src={ranges} alt="range" className="w-full rounded" />

                {rangeOptions.map((range) => (
                  <div
                    key={range.name}
                    onClick={() => handleImageClick(range.name)}
                    className="absolute top-0 h-full cursor-pointer transition-colors duration-300"
                    style={{
                      left: range.left,
                      width: range.width,
                      backgroundColor: userInput.range?.includes(range.name)
                        ? "rgba(59,130,246,0.4)"
                        : "transparent"
                    }}
                    title={`Select ${range.name} range`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between px-6 py-8">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex gap-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] bg-[#364153] text-white font-medium text-[14px]"
          >
            <img src={left} alt="" />
            Cancel
          </button>

          {/* ✅ FIXED: No disabled */}
          <button
            type="submit"
            className="flex gap-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] bg-[#364153] text-white font-medium text-[14px]"
          >
            Next
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default FifthSurveyContent;
