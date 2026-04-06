import { useSelector } from "react-redux";
import save from "../../Backend Component/image/Save.png";
import BoardValidation from "./BoardValidation";
import right from "../../Backend Component/image/ChevronRight.png";
import left from "../../Backend Component/image/ChevronLeft.png";
import SprintView from "./SprintView";
import Burndown from "./Burndown";
import BackLogProductValidation from "./BackLogProductValidation";
import BackLog from "./BackLog";

const FifthProjectPlannerContent = ({ Result, activeId, setActiveId, handleSubmit }) => {
  const epics = useSelector((state) => state.epics.items || []); // adjust slice name

  return (
    <form>
      {/* header and stepper UI omitted for brevity */}

      <div className="rounded-[10px] mt-20 pb-20 border border-[rgb(218,220,224)]">
        <div className="flex min-w-[912px] py-2 bg-[#F9FAFB]">
          {Result.map((item) => (
            <div key={item.id}>
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`min-w-[308px] text-black text-[18px] capitalize py-4 transition-all duration-200
                  ${activeId === item.id 
                    ? 'bg-white border-b-2 border-black rounded-t-md'
                    : 'bg-[#F9FAFB] border-b-2 border-transparent'}
                `}
              >
                {item.Topic}
              </button>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 w-full">
          {activeId === 1 && (
            epics.length > 0 ? <BackLog epics={epics} /> : <BackLogProductValidation />
          )}
          {activeId === 2 && <BoardValidation />}
          {activeId === 3 && <SprintView />}
          {activeId === 4 && <Burndown />}
        </div>
      </div>

      {/* footer buttons */}
      <div className="flex justify-between px-16 py-4 mx-auto pb-8">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex gap-2 items-center justify-center w-[120px] py-[10px] px-[15px] rounded-[10px] border border-[#DADCE0] text-[#364153] font-medium text-[14px]"
        >
          <img src={left} alt="" />
          Cancel
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex gap-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] bg-[#364153] text-white font-medium text-[14px]"
        >
          Next
          <img src={right} alt="" />
        </button>
      </div>
    </form>
  );
};

export default FifthProjectPlannerContent;
