import Right from "../../Backend Component/image/Vector.png";
import down from "../../Backend Component/image/ChevronDown.png";
import Plus from "../../Backend Component/image/Plus.jpg";
import BackLogContent from "./BackLogContent";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpicsAction } from "../../redux/slice/epic/epicSlice";

const BackLog = ({ currentProjectId, onAddStory }) => {
  const dispatch = useDispatch();
  const { epics } = useSelector((state) => state.epics);
  const [toggledEpics, setToggledEpics] = useState({});

  // Toggle expanded/collapsed state for epic
  const toggling = (epicId) => {
    setToggledEpics((prev) => ({
      ...prev,
      [epicId]: !prev[epicId],
    }));
  };

  // Fetch epics whenever currentProjectId changes
  useEffect(() => {
    if (currentProjectId) {
      dispatch(fetchEpicsAction(currentProjectId));
    }
  }, [dispatch, currentProjectId]);

  // Filter epics to only the current project
  const currentProjectEpics = epics?.filter(
    (epic) => epic.project?._id === currentProjectId
  );

  const projectName =
    currentProjectEpics?.[0]?.project?.projectName || "Unknown Project";

  return (
    <div>
      <div className="flex justify-between items-center px-2 mx-8 py-12">
        <p className="text-[#364153] font-instrument font-semibold text-[18px] leading-[28px] tracking-[-0.44px]">
          Product Backlog
        </p>

        <button className="border-[2px] bg-[#585858] py-3 border-[#DADCE0] w-[116px] gap-2 flex items-center rounded-[10px]">
          <div className="w-[16px] mx-2">
            <img src={Plus} alt="plus" />
          </div>
          <div className="w-[64px]">
            <p className="text-[#ffffff] font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-center capitalize">
              new epic
            </p>
          </div>
        </button>
      </div>

      <div className="border mx-8 border-[#DADCE0] rounded-[10px]">
        {currentProjectEpics?.length === 0 ? (
          <div className="p-4 text-center">
            <p>No epics found for this project</p>
          </div>
        ) : (
          <div className="mb-4">
            {/* Project header */}
            <div className="px-4 py-2 bg-[#F9FAFB] border-b border-[#DADCE0]">
              <p className="text-[#364153] font-instrument font-semibold text-[16px] leading-[24px] tracking-[-0.31px]">
                {projectName} (Current)
              </p>
            </div>

            {/* Epic list */}
            {currentProjectEpics.map((epic) => (
              <div key={epic._id}>
                <div className="px-4 justify-between border items-center rounded-[10px] border-[#DADCE0] bg-[#F9FAFB] flex gap-4 py-2">
                  <div className="flex">
                    {/* Toggle icon */}
                    <div className="w-[30px] flex justify-center items-center">
                      <img
                        src={toggledEpics[epic._id] ? down : Right}
                        onClick={() => toggling(epic._id)}
                        alt="toggle"
                      />
                    </div>

                    {/* Epic details */}
                    <div className="flex gap-4">
                      <div className="flex flex-col capitalize">
                        <p className="text-black font-instrument font-semibold text-[16px] leading-[24px] tracking-[-0.31px]">
                          {epic.title || "Epic Title"}
                        </p>
                        <p className="text-[#4A5565] font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
                          {epic.description || "Epic Description"}
                        </p>
                      </div>

                      <div className="bg-[#F3F4F6] flex items-center justify-center w-[40px] h-[30px] border text-black rounded-full text-[7px]">
                        {epic.priority || "Priority"}
                      </div>
                    </div>
                  </div>

                  <div className="flex text-[#4A5565] font-instrument font-normal text-[14px] ml-24 leading-[20px] justify-end">
                    <p>{epic.stories?.length || 0} stories</p>
                  </div>
                </div>

                {/* Story content */}
                {toggledEpics[epic._id] && (
                  <BackLogContent epicId={epic._id} onAddStory={onAddStory} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BackLog;