import React from "react";

interface InputWithIconProps {
  placeholder?: string;
  icon: React.ReactNode;
  className?: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ placeholder, icon, className }) => {
  return (
    <div className={`flex items-center border rounded-lg px-2 ${className}`}>
      <span className="text-gray-500">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-2 py-1 outline-none bg-transparent"
      />
    </div>
  );
};

export default InputWithIcon;

