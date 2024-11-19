import React from "react";
import Link from "next/link";

interface NavbarItemProps {
  label: string;
  href: string;
  className?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, href, className }) => {
  return (
    <Link
      href={href}
      className={`text-gray-800 hover:text-blue-600 px-3 ${className}`}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
