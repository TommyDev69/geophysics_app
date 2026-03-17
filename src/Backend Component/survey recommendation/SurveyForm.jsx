import right from "../image/ChevronRight.png";
import left from "../image/ChevronLeft.png";

const SurveyForm = ({
  content,
  title,
  surveyForm,
  error,
  handleSurveyChange,
  handleSurveySubmit,
  handleSurveyObjective,
}) => {
  return (
    <form onSubmit={handleSurveySubmit}>
      <div className="w-[917px] py-6 px-[12px]">
        <p className="font-semibold text-[20px] leading-7 tracking-[-0.45px] capitalize text-[#101828]">
          {title}
        </p>
      </div>

      <div className="w-[768px] mx-auto rounded-[10px] px-9 py-6">
        <div className="w-full py-9">

          {/* Project Name */}
          <label className="font-medium text-[14px] text-[#364153]">
            Project Name *
          </label>
          <input
            type="text"
            name="projectName"
            value={surveyForm.projectName}
            onChange={handleSurveyChange}
            placeholder="e.g., Lagos Coastal Survey"
            className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-[#DADCE0]"
          />
          <p className="text-red-500 text-[12px]">{error.projectName}</p>

          {/* Description */}
          <div className="py-9">
            <label className="font-medium text-[14px] text-[#364153] capitalize">
              Description
            </label>
            <textarea
              rows="5"
              placeholder="Provide a brief description of the survey project..."
              className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-[#DADCE0]"
            />
          </div>

          {/* Survey Objective */}
          <p className="font-medium text-[14px]">Survey Objective *</p>
          <div className="py-3 grid grid-cols-2 gap-8">
            {content.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSurveyObjective(item.topic)}
                className={`w-full py-[18px] px-[18px] rounded-[10px] border-2 transition
                  ${
                    surveyForm.surveyObjective === item.topic
                      ? "border-blue-500 bg-blue-50"
                      : "border-[#DADCE0]"
                  }`}
              >
                <img src={item.photo} alt="survey" />
                <div className="pt-6">
                  <p className="font-medium text-[14px] text-[#364153] capitalize">
                    {item.topic}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <p className="text-red-500 text-[12px]">{error.surveyObjective}</p>

          {/* Others */}
          <label className="font-medium text-[14px] text-[#364153]">Others</label>
          <input
            type="text"
            className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-[#DADCE0]"
          />

          {/* Client Info */}
          <div className="flex gap-5 py-8">
            <div className="w-[376px]">
              <label className="font-medium text-[14px] text-[#364153]">Client Name</label>
              <input
                type="text"
                className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2"
              />
            </div>
            <div className="w-[376px]">
              <label className="font-medium text-[14px] text-[#364153]">Client Email</label>
              <input
                type="text"
                className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2"
              />
            </div>
          </div>

          {/* Date */}
          <label className="font-medium text-[14px] text-[#364153]">Target Completion Date</label>
          <input
            type="date"
            className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mx-auto w-[768px] py-8">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex gap-2 items-center justify-center w-[120px] py-[10px] px-[15px] rounded-[10px] border border-[#DADCE0] text-[#364153] font-medium text-[14px]"
        >
          <img src={left} alt="" />
          Cancel
        </button>

        <button
          type="submit"
          className="flex gap-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] bg-[#364153] text-white font-medium text-[14px]"
        >
          Next
          <img src={right} alt="" />
        </button>
      </div>
    </form>
  );
};

export default SurveyForm;