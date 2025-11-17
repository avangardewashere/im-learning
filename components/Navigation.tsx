"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon - Mobile Only */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-gray-700 transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-gray-700 transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-gray-700 transition-all ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Navigation List - Desktop */}
      <ul className="hidden md:flex items-center gap-6">
        <li>
          <Link
            href="/topics"
            className="text-gray-700 hover:text-sky-300 transition-colors"
          >
            Topics
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-700 hover:text-sky-300 transition-colors"
          >
            About
          </Link>
        </li>
      </ul>

      {/* Mobile Menu - Shown when hamburger is clicked */}
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden flex flex-col py-4">
          <li>
            <Link
              href="/topics"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-sky-300 hover:bg-gray-50 transition-colors"
            >
              Topics
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-sky-300 hover:bg-gray-50 transition-colors"
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

