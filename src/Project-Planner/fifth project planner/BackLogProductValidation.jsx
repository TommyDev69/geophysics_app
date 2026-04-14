import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  createEpicAction,
  fetchEpicsAction,
} from "../../redux/slice/epic/epicSlice";
import { getUserProjectsAction } from "../../redux/slice/project/projectSlice";

import BackLogProduct from "./BackLogProduct";
import BackLogModal from "./BackLogModal";
import BackLog from "./BackLog";


const BackLogProductValidation = ({ onNext }) => {
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.projects);

  const [currentProjectId, setCurrentProjectId] = useState(null);

  const [epicForm, setEpicForm] = useState({
    title: "",
    description: "",
    priority: "",
    project: "",
  });

  const [errors, setErrors] = useState({});
  const [activeId, setActiveId] = useState(1);

  //create epic modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const [epicCreated, setEpicCreated] = useState(false);

  // Fetch projects on mount
  useEffect(() => {
    dispatch(getUserProjectsAction());
  }, [dispatch]);

  // Set latest project safely
  useEffect(() => {
    if (projects && projects.length > 0) {
      const latestProject = [...projects].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )[0];

      const projectId = latestProject._id;

      setCurrentProjectId(projectId);

      setEpicForm({
        title: "",
        description: "",
        priority: "",
        project: projectId,
      });

      setEpicCreated(false);
    }
  }, [projects]);

  // Fetch epics when project changes
  useEffect(() => {
    if (currentProjectId) {
      dispatch(fetchEpicsAction(currentProjectId));
    }
  }, [dispatch, currentProjectId]);

  const handleEpicChange = (e) => {
    const { name, value } = e.target;

    setEpicForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    const newErrors = {};

    if (!epicForm.title.trim()) newErrors.title = "Title is required";
    if (!epicForm.description.trim())
      newErrors.description = "Description is required";
    if (!epicForm.priority.trim())
      newErrors.priority = "Priority is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const result = await dispatch(createEpicAction(epicForm)).unwrap();

      console.log("Epic created:", result);

      // refresh epics
      dispatch(fetchEpicsAction(currentProjectId));

      Swal.fire({
        icon: "success",
        title: "Epic Created!",
        text: "New epic added for this project",
        timer: 1500,
        showConfirmButton: false,
      });

      // reset form
      setEpicForm({
        title: "",
        description: "",
        priority: "",
        project: currentProjectId,
      });

      closeModal();
      setActiveId(1);
      setEpicCreated(true);
    } catch (error) {
      console.error("Failed to create epic:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Failed to create epic",
      });
    }
  };

  //create epic Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  

  return epicCreated ? (
    <BackLog currentProjectId={currentProjectId} />
    
  ) : (
    <div>
      <BackLogProduct
        items={[
          { id: 1, topic: "backlog" },
          { id: 2, topic: "board" },
          { id: 3, topic: "sprint view" },
          { id: 4, topic: "burndown" },
        ]}
        activeId={activeId}
        setActiveId={setActiveId}
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        submitData={handleSubmit}
      />

      {isModalOpen && (
        <BackLogModal
          closeModal={closeModal}
          epicForm={epicForm}
          handleEpicChange={handleEpicChange}
          handleSubmit={handleSubmit}
          errors={errors}
          projects={projects}
          
          onNext={onNext}
        />
      )}

     
    </div>
  );
};

export default BackLogProductValidation;