import { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { createEpicAction } from "../../redux/slice/epic/epicSlice";
import BackLogProduct from "./BackLogProduct";
import BackLogModal from "./BackLogModal";
import { useNavigate } from "react-router-dom";

const BackLogProductValidation = ({onNext}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error: reduxError, success } = useSelector(
    (state) => state.epics
  );

  const dataItems = [
    { id: 1, topic: "backlog" },
    { id: 2, topic: "board" },
    { id: 3, topic: "sprint view" },
    { id: 4, topic: "burndown" },
  ];

  const [epicForm, setEpicForm] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const [activeId, setActiveId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle input change
  const handleEpicChange = (e) => {
    const { name, value } = e.target;
    setEpicForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on typing
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!epicForm.title.trim()) newErrors.title = "Title is required";
    if (!epicForm.description.trim()) newErrors.description = "Description is required";
    if (!epicForm.priority.trim()) newErrors.priority = "Priority is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Dispatch Redux action
    dispatch(createEpicAction(epicForm));

    // Show success alert
    Swal.fire({
      icon: "success",
      title: "Epic Created!",
      text: "Your new epic has been added",
      timer: 1500,
      showConfirmButton: false,
    })

    // Close modal
    closeModal();

     setActiveId(1);
  };

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
          handleSubmit={handleSubmit}
          errors={errors}
          onNext={onNext}
        />
      )}
    </div>
  );
};

export default BackLogProductValidation;