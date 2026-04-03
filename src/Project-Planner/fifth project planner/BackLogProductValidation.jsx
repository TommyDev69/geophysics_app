import { useState } from "react";
import BackLogProduct from "./BackLogProduct";
import BackLogModal from "./BackLogModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEpicAction } from "../../redux/slice/epic/epicSlice";



// Move static data outside the component to avoid recreating it on every render
const BackLogProductValidation = ({ onNext }) => {
  // dispatch
  const dispatch = useDispatch();
  const { loading, error: reduxError, success, successMessage } = useSelector((state) => state.epics);

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

  const handleEpicChange = (e) => {
  const { name, value } = e.target;

  setEpicForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const navigatingModalToSubmit = useNavigate();
  const handleSubmitFomModal = (e) => {
    e.preventDefault()
    navigatingModalToSubmit('/BackLog')

    dispatch(createEpicAction(epicForm))

  }
  const [activeId, setActiveId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen(prev => !prev);

 

  const handleChange = (e) => {
    setEpicForm({
      ...epicForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEpicAction(epicForm));
    closeModal();
  };


  return (
    <div>
      <BackLogProduct
        items={dataItems}          // renamed from Result to items for clarity
        activeId={activeId}
        setActiveId={setActiveId}
        isModalOpen={isModalOpen}  // renamed from showModal
        openModal={openModal}
        closeModal={closeModal}
        toggleModal={toggleModal}  // optional for convenience inside BackLogProduct
        submitData={handleSubmitFomModal}
        handleEpicChange={handleEpicChange}
        handleSubmit={handleSubmit}

      />
      {isModalOpen && (
        <BackLogModal
          closeModal={closeModal}
          epicForm={epicForm}
          handleEpicChange={handleEpicChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default BackLogProductValidation;