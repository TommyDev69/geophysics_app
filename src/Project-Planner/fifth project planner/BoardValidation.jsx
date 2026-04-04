import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { getUserProfileAction } from "../../redux/slice/user/usersSlice";
import BoardContent from "./BoardContent";

const getInitials = (fullName = "") => {
  const names = fullName.trim().split(" ").filter(Boolean);
  if (!names.length) return "";

  const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
  const lastInitial = names.length > 1 ? names[names.length - 1].charAt(0).toUpperCase() : "";
  return `${firstInitial}${lastInitial}`;
};

export default function BoardValidation() {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.users);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const profileFullName = profile?.message?.fullName || profile?.message?.firstName || "";
  const profileInitials = profile?.message?.initials || getInitials(profileFullName);

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/stories/all-story`);
        const stories = Array.isArray(data?.message) ? data.message : [];

        const mappedContent = stories.map((story) => ({
          id: story._id,
          subject: story.title,
          details: story.description || story.description || "",
          points: story.points || 0,
          aka: profileInitials || "ME",
        }));

        setContent(mappedContent.length ? mappedContent : [
          {
            id: 1,
            subject: "Collect ground truth samples",
            details: "Take soil samples at marked locations",
            points: 3,
            aka: profileInitials || "ME",
          },
          {
            id: 2,
            subject: "Process raw GPR data",
            details: "Clean and filter GPR scan data",
            points: 8,
            aka: profileInitials || "ME",
          },
          {
            id: 3,
            subject: "Generate 2D profiles",
            details: "Create 2D subsurface profiles from filtered data",
            points: 5,
            aka: profileInitials || "ME",
          },
        ]);
      } catch (error) {
        console.error("Failed to load stories:", error);
        setContent([
          {
            id: 1,
            subject: "Collect ground truth samples",
            details: "Take soil samples at marked locations",
            points: 3,
            aka: profileInitials || "ME",
          },
          {
            id: 2,
            subject: "Process raw GPR data",
            details: "Clean and filter GPR scan data",
            points: 8,
            aka: profileInitials || "ME",
          },
          {
            id: 3,
            subject: "Generate 2D profiles",
            details: "Create 2D subsurface profiles from filtered data",
            points: 5,
            aka: profileInitials || "ME",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [profileInitials]);

  return (
    <>
      <BoardContent content={content} title="Todo" />
      {loading && (
        <p className="text-sm text-[#4A5565] mt-3">
          Loading board stories...
        </p>
      )}
    </>
  );
}
