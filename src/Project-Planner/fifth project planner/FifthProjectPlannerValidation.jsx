     import { useState, useEffect } from "react";
    import FifthProjectPlannerContent from "./FifthProjectPlanerContent";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getUserProjectsAction } from "../../redux/slice/project/projectSlice";

    const FifthProjectPlannerValidation = ({onNext}) => {
        const dispatch = useDispatch();
        const { projects } = useSelector((state) => state.projects);
        
        const [activeId, setActiveId] = useState(1);
        const [currentProjectId, setCurrentProjectId] = useState(null);
        
        const dataItems = [
            { id: 1, Topic: 'backlog' },
            { id: 2, Topic: 'board' },
            { id: 3, Topic: 'sprint view' },
            { id: 4, Topic: 'burndown' }
        ];

        // Fetch projects on mount
        useEffect(() => {
            dispatch(getUserProjectsAction());
        }, [dispatch]);

        // Set current project to the latest one
        useEffect(() => {
            if (projects && projects.length > 0) {
                setCurrentProjectId(projects[projects.length - 1]._id);
            }
        }, [projects]);

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
                    currentProjectId={currentProjectId}
                />
            </div>
        );
    }

    export default FifthProjectPlannerValidation;