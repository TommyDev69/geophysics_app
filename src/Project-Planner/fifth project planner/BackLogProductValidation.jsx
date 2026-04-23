import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {createEpicAction,fetchEpicsAction} from "../../redux/slice/epic/epicSlice";
import { getUserProjectsAction } from "../../redux/slice/project/projectSlice";
import BackLogProduct from "./BackLogProduct";
import BackLogModal from "./BackLogModal";
// import BackLog from "./BackLog";

const BackLogProductValidation = ({ onNext }) => {
  const dispatch = useDispatch();

  const [epicForm, setEpicForm] = useState({
    title: "",
    description: "",
    priority: "",
    project: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const [activeId, setActiveId] = useState(1);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEpicChange = (e) => {
    const { name, value } = e.target;
    setEpicForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validation...

    try {
      await dispatch(createEpicAction(epicForm)).unwrap();

      Swal.fire({
        icon: "success",
        title: "Epic Created!",
        text: "New epic added for this project",
        timer: 1500,
        showConfirmButton: false,
      }); 

      setEpicForm({ title: "", description: "", priority: "" });
      closeModal();

      if (onNext) onNext(); // ✅ triggers parent to re-render and show <BackLog />
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Failed to create epic",
      });
    }
  };

  const dataItems = [
    { id: 1, topic: "backlog" },
    { id: 2, topic: "board" },
    { id: 3, topic: "sprint view" },
    { id: 4, topic: "burndown" },
  ];
  return (
    <div>
      <BackLogProduct
        items={dataItems}
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
          handleSubmit={handleSubmit} // handleSubmit should call onNext after success
          errors={errors}
        />
      )}
    </div>
  );
};

export default BackLogProductValidation;