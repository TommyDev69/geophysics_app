import { useState } from "react";
import BackLogProduct from "./BackLogProduct";
import BackLogModal from "./BackLogModal";
import Swal from "sweetalert2";

const BackLog = ({ setActiveId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [epicForm, setEpicForm] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const [errors, setErrors] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEpicChange = (e) => {
    const { name, value } = e.target;
    setEpicForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!epicForm.title) newErrors.title = "Title required";
    if (!epicForm.description) newErrors.description = "Description required";
    if (!epicForm.priority) newErrors.priority = "Priority required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Epic Created!",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      closeModal();

      // 🔥 Switch back to backlog tab
      setActiveId(1);
    });
  };

  return (
    <div>
      <BackLogProduct openModal={openModal} />

      {isModalOpen && (
        <BackLogModal
          closeModal={closeModal}
          epicForm={epicForm}
          handleEpicChange={handleEpicChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  );
};

export default BackLog;