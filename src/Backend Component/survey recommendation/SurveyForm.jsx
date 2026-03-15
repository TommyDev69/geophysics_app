const SurveyForm = ({ content, title }) => {
  return (
    <>
      <div className="w-[917px]">
        <p className="font-semibold text-[20px] leading-7 tracking-[-0.45px] capitalize text-[#101828]">
          {title}
        </p>
      </div>

      <div className="w-[768px] mx-auto border border-[#DADCE0] rounded-[10px] px-9 py-6">
        <div className="w-full py-9">

          {/* Project Name */}
          <label className="font-medium text-[14px] leading-5 tracking-[-0.15px] text-[#364153]">
            Project Name *
          </label>

          <input
            type="text"
            placeholder="e.g., Lagos Coastal Survey"
            className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-[#DADCE0]"
          />

          {/* Description */}
          <div className="py-9">
            <label className="font-medium text-[14px] leading-5 tracking-[-0.15px] text-[#364153] capitalize">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Provide a brief description of the survey project..."
              className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-[#DADCE0]"
            />
          </div>

          {/* Survey Objective */}
          <p className="font-medium text-[14px] leading-5 tracking-[-0.15px]">
            Survey Objective *
          </p>

          <div className=" py-3 grid grid-cols-2 gap-8 ">
            {content.map((dataItems) => (
              <button key={dataItems.id} type="button" className=" w-full py-[18px]  px-[18px] rounded-[10px] border-2  border-[#DADCE0]">
                <img src={dataItems.photo} alt="survey" />

                <div className="w-[376px] pt-9">
                  <p className="ml-[-90px] w-[340px] font-medium text-[14px] leading-5 tracking-[-0.15px] text-[#364153] capitalize">
                  {dataItems.topic}
                </p>
                </div>
              </button> 
            ))}
          </div>


          <label className="font-medium text-[14px] leading-5 tracking-[-0.15px] text-[#364153]">
            others
          </label>

          <input
            type="text"
            
            className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-[#DADCE0]"
          />

          <div className="flex gap-5  py-8">
            <div className="w-[376px]">
              <div className="w-full">
                <label className="w-[80px] font-medium text-[14px] leading-[20px] tracking-[-0.15px] font-Instrument">client name</label>
              </div>

              <div>
                <input type="text" className=" w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-[#DADCE0]"/>
              </div>  
            </div>    
              
            <div className="w-[376px]">
                <div className="w-full">
                  <label className="w-[80px] font-medium text-[14px] leading-[20px] tracking-[-0.15px] font-Instrument">client email</label>
                </div>
              <div>

                <input type="text" className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-[#DADCE0]"/>
              </div>

            </div>
                   
          </div>

           <label className="font-medium text-[14px] leading-5 tracking-[-0.15px] text-[#364153]">
              target completion date
          </label>

          <input
            type="text"
            
            className="w-full rounded-[10px] border border-[#DADCE0] py-[10px] px-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-[#DADCE0]"
          />
        </div>
      </div>

      <div className="flex justify-between mx-auto w-[768px] py-8">
        <button className="w-[120px] py-[10px] px-[15px] rounded-[10px] border border-[#DADCE0] text-[#364153] font-medium text-[14px] leading-5 tracking-[-0.15px]">
          Cancel
        </button>

        <button className="w-[120px] py-[10px] px-[15px] rounded-[10px] border border-[#DADCE0] text-[#364153] font-medium text-[14px] leading-5 tracking-[-0.15px]">
          next
        </button>
      </div>
    </>
  );
};

export default SurveyForm;