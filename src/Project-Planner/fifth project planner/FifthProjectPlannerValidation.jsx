     import { useState } from "react";
    import FifthProjectPlannerContent from "./FifthProjectPlanerContent";

    const FifthProjectPlannerValidation = () => {
        const [activeId, setActiveId] = useState(1);
        const dataItems = [
            { id: 1, Topic: 'backlog' },
            { id: 2, Topic: 'board' },
            { id: 3, Topic: 'sprint view' },
            { id: 4, Topic: 'burndown' }
        ];

        

        return (  
            <div className="w-[967px] mx-auto ">
                <FifthProjectPlannerContent 
                    Result={dataItems}
                    activeId={activeId}
                    setActiveId={setActiveId}
                />
            </div>
        );
    }

    export default FifthProjectPlannerValidation;