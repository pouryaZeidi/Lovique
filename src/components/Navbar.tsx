import React from "react";
import NavbarItem from "./NavbarItem";

interface NavbarProps {
  items: { label: string; href: string }[];
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ items, className }) => {
  return (
    <nav className={`flex items-center justify-between p-4 ${className}`}>
      {items.map((item, index) => (
        <><NavbarItem label='lll' href='/' /><NavbarItem label='lll' href='/' /><NavbarItem label='lll' href='/' /><NavbarItem label='lll' href='/' /></>
      ))}
    </nav>
  );
};

export default Navbar;

// Usage Example:
// <Navbar items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
