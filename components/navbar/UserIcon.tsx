"use client";
import { useUser } from "@clerk/nextjs";
import { AiOutlineUser } from "react-icons/ai";

const UserIcon = () => {
  const { user } = useUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img
        src={profileImage}
        className='w-6 h-6 rounded-full object-cover'
        alt='User Profile'
      />
    );
  }

  return (
    <AiOutlineUser className='w-6 h-6 bg-primary rounded-full text-white' />
  );
};

export default UserIcon;
