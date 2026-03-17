const ProjectSetupWorkArea = ({ list }) => {
  return (
    <div className="flex flex-col md:min-w-[528px] px-6 space-y-6">
      {list.map(({ id, icons, title, subTopics, unique }) => {
        const isActive = id === 1;

        return (
          <div key={id}>
            <div className="flex items-center">

              {/* Number Icon */}
              {icons && (
                <img src={icons} alt="step" className="w-[48px]" />
              )}

              {/* Title */}
              <div className="flex items-center space-y-2 space-x-6">
                <div className="flex items-center rounded-full bg-[#10182880] px-2 text-6 text-white">
                {id!==1 && (

                <div key={id}>{id}</div>
                )}
              </div>
           <div>
               <h2
                className={`font-instrument font-bold text-[18px] md:text-[22px] leading-[122%] tracking-[0.34px] mb-3 ${
                  isActive ? "text-black" : "text-[#10182880] text-[16px] md:text-[18px] "
                }`}
              >
                {title}
              </h2>
           </div>
              </div>

            </div>

            {/* Subtopics */}
            {subTopics?.length > 0 && (
              <div className="flex flex-col px-24 space-y-2">
                {subTopics.map(({ id, icon, subTopic }) => (
                  <div key={id} className="flex items-center gap-2">
                    <img src={icon} alt="subtopic-icon" className="w-5" />
                    <span>{subTopic}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Optional Unique */}
            {unique && (
              <div className="flex gap-4 mt-3">
                <div className="bg-red-600 text-white px-2 py-1 rounded">
                  {unique}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectSetupWorkArea;