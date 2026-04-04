import React, { useState } from 'react';
import Plus from '../../Backend Component/image/Plus.png';
import SprintViewTable from './SprintViewTable';
import Swal from 'sweetalert2';
import SprintViewModal from './SprintViewModal';

export default function SprintView() {
  const [sprintForm, setSprintForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    priority: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle input change
  const handleSprintChange = (e) => {
    const { name, value } = e.target;
    setSprintForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!sprintForm.title.trim()) newErrors.title = "Title is required";
    if (!sprintForm.startDate.trim()) newErrors.startDate = "Start Date is required";
    if (!sprintForm.endDate.trim()) newErrors.endDate = "End Date is required";
    if (!sprintForm.description.trim()) newErrors.description = "Description is required";
    if (!sprintForm.priority.trim()) newErrors.priority = "Priority is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Sprint Created!",
      text: "Your sprint has been added",
      timer: 1500,
      showConfirmButton: false,
    });

    setSprintForm({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        priority: "",
    });
    closeModal();
  };

  return (
    <div className="flex flex-col">
      <div className="w-[917px] flex justify-between items-center">
        <div className="w-[200px] flex flex-col items-center">
          <h3 className="font-instrument font-semibold text-[18px] text-[#101828]">Sprint Management</h3>
          <p className="font-instrument font-normal text-[14px] text-[#101828]">Manage your agile sprints</p>
        </div>

        <div className="px-10 py-14">
          <button type="button" onClick={openModal} className="font-instrument py-4 px-6 font-medium text-[14px] bg-[#585858] rounded-[10px] text-white flex gap-2 items-center">
            <img src={Plus} alt="plus" />
            <p>Create Sprint</p>
          </button>
        </div>
      </div>

      <div className="px-6">
        <p className="font-instrument font-semibold text-[16px] text-[#101828]">Planned Sprints</p>
      </div>

      <div>
        <SprintViewTable />
      </div>

      {isModalOpen && (
        <SprintViewModal
          closeModal={closeModal}
          sprintForm={sprintForm}
          handleSprintChange={handleSprintChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  );
}