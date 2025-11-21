import { Settings } from "lucide-react";
import React from "react";

const ProfileOpen = () => {
  return (
    <div className="mt-22 fixed z-99 right-10 backdrop-blur-md bg-black/70 w-80 h-40 rounded-[20px] p-4 top-3">
      <h1 className="text-center text-white/50">Profile Settings Here</h1>
      <div className="flex justify-center mt-6">
        <Settings size={40} strokeWidth={2} className="text-white/50"/>
      </div>
    </div>
  );
};

export default ProfileOpen;
