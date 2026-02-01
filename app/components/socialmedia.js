// components/SocialButton.js
"use client";
import { useState } from "react";

const SocialButton = ({ path, link, popupContent }) => {
  const [ishovered, hover] = useState(false);
  const handleMouseEnter = () => {
    hover(true);
  };
  const handleMouseLeave = () => {
    hover(false);
  };
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white p-3 rounded-xl flex items-center justify-center hover:scale-110
       duration-200 cursor-pointer w-12 h-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {ishovered && popupContent && (
        <div
          className="absolute top-full mb-2 left-7/8 -translate-x-1/2  text-white text-xs 
        rounded shadow-lg rounded-xl whitespace-nowrap"
        >
          {popupContent}
        </div>
      )}
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d={path} />
      </svg>
    </a>
  );
};

export default SocialButton;
