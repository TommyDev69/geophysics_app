import { useState } from "react";
import BackLogProduct from "./BackLogProduct";

// Move static data outside the component to avoid recreating it on every render
const dataItems = [
  { id: 1, topic: "backlog" },
  { id: 2, topic: "board" },
  { id: 3, topic: "sprint view" },
  { id: 4, topic: "burndown" },
];

const BackLogProductValidation = () => {
  const [activeId, setActiveId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen(prev => !prev);

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
      />
    </div>
  );
};

export default BackLogProductValidation;