"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaEnvelope, FaUser } from "react-icons/fa";

const menuItems = [
  { id: 1, title: "Projects", href: "/projects", icon: <FaBriefcase /> },
  { id: 2, title: "About", href: "/about", icon: <FaUser /> },
  { id: 3, title: "Contact", href: "/contact", icon: <FaEnvelope /> },
];

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={menuRef} className="relative text-sm">
      <button
        onClick={handleMenuToggle}
        className="flex flex-col items-end focus:outline-none"
      >
        <span
          className={`bg-orange-100 w-6 h-[2px] mb-1 ${
            isMenuOpen ? "rotate-45 translate-y-1 bg-orange-700" : ""
          } transition-all duration-300 ease-in-out`}
        ></span>
        <span
          className={`bg-orange-100 w-6 h-[2px] mb-1 ${
            isMenuOpen ? "opacity-0" : ""
          } transition-all duration-300 ease-in-out`}
        ></span>
        <span
          className={`bg-orange-100 w-6 h-[2px] mb-1 ${
            isMenuOpen ? "-rotate-45 -translate-y-2 bg-orange-700" : ""
          } transition-all duration-300 ease-in-out`}
        ></span>
      </button>

      {/* Menú Desplegable */}
      {isMenuOpen && (
        <ul className="text-xs flex flex-col gap-4 absolute top-8 right-0 z-50 bg-neutral-800 p-4 rounded-md shadow-lg">
          {menuItems.map((item) => (
            <li
              className=" hover:text-orange-400 active:text-amber-300 transition-all duration-300 ease-in-out cursor-pointer border-b-[.01rem] border-orange-300 border-opacity-30 pb-2"
              onClick={closeMenu}
              key={item.id}
            >
              <Link className="flex justify-between gap-3" href={item.href}>
                <span>{item.title}</span>
                <span>{item.icon} </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default TopBar;
