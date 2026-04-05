     import { useState } from "react";
    import FifthProjectPlannerContent from "./FifthProjectPlanerContent";
import Swal from "sweetalert2";

    const FifthProjectPlannerValidation = ({onNext}) => {
        const [activeId, setActiveId] = useState(1);
        const dataItems = [
            { id: 1, Topic: 'backlog' },
            { id: 2, Topic: 'board' },
            { id: 3, Topic: 'sprint view' },
            { id: 4, Topic: 'burndown' }
        ];

         const handleSubmit = (e) => {
            e.preventDefault();
            // Validation
           
        
            // Show success alert
            Swal.fire({
              icon: "success",
              title: "project submitted",
              text: "Your new epic has been added",
              timer: 1500,
              showConfirmButton: false,
            }).then(() => {
            if (onNext) onNext(4);
    });
        
          };
        return (  
            <div className="min-w-[967px] mx-auto ">
                <FifthProjectPlannerContent 
                    Result={dataItems}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    handleSubmit={handleSubmit}
                />
            </div>
        );
    }

    export default FifthProjectPlannerValidation;