import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plus from '../../Backend Component/image/Plus.png';
import SprintViewTable from './SprintViewTable';
import Swal from 'sweetalert2';
import SprintViewModal from './SprintViewModal';
import baseUrl from '../../utils/baseUrl';

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
  const [sprints, setSprints] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const fetchSprints = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${baseUrl}/sprints/all-sprints`);
      console.log("Fecth sprint", data);
      
      if (data?.status === 'Success') {
        setSprints(data.message || []);
      } else {
        setSprints([]);
      }
    } catch (error) {
      console.error('Failed to fetch sprints:', error);
      setSprints([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSprints();
  }, []);

  const handleSubmit = async () => {

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

    try {
      const token = JSON.parse(localStorage.getItem('userInfo'))?.message?.token;

      if (!token) {
        Swal.fire({
          icon: 'error',
          title: 'Authentication Required',
          text: 'Please login to create a sprint.',
        });
        return;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(`${baseUrl}/sprints/create-sprint`, sprintForm, config);
      console.log("Create sprint response", data);
      if (data?.status !== 'Success') {
        throw new Error(data?.message || 'Sprint creation failed');
      }

      Swal.fire({
        icon: 'success',
        title: 'Sprint Created!',
        text: 'Your sprint has been added',
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
      setErrors({});
      closeModal();
      fetchSprints();
    } catch (error) {
      console.error('Sprint creation failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Unable to create sprint',
        text: error.response?.data?.message || error.message || 'Please login and try again',
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="min-w-[917px] flex justify-between items-center">
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

      <>
        <SprintViewTable sprints={sprints} loading={loading} />
      </>

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