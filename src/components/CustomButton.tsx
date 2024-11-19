import React from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;


