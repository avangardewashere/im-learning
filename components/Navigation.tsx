"use client";
import { useState, memo, useCallback } from "react";
import Link from "next/link";

type NavSubLink = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  subLinks?: NavSubLink[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Topics",
    subLinks: [
      { label: "React", href: "/topics/react" },
      { label: "AWS", href: "/topics/aws" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null
  );

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const toggleMobileSubMenu = useCallback((label: string) => {
    setExpandedMobileMenu((prev) => (prev === label ? null : label));
  }, []);

  const handleMobileLinkClick = useCallback(() => {
    setIsOpen(false);
    setExpandedMobileMenu(null);
  }, []);

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
        {NAV_ITEMS.map((item) => (
          <li key={item.label} className="relative">
            {item.subLinks ? (
              <div
                onMouseEnter={() => setHoveredMenu(item.label)}
                onMouseLeave={() => setHoveredMenu(null)}
                className="relative"
              >
                <span className="text-gray-700 hover:text-sky-300 transition-colors cursor-default">
                  {item.label}
                </span>
                {hoveredMenu === item.label && (
                  <div className="absolute top-full left-0 pt-2 bg-white border border-gray-200 rounded-lg shadow-lg pb-2 min-w-[120px] z-50">
                    {item.subLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        className="block px-4 py-2 text-gray-700 hover:text-sky-300 hover:bg-gray-50 transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              item.href && (
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-sky-300 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu - Shown when hamburger is clicked */}
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden flex flex-col py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.subLinks ? (
                <>
                  <button
                    onClick={() => toggleMobileSubMenu(item.label)}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:text-sky-300 hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span
                      className={`transition-transform ${
                        expandedMobileMenu === item.label ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {expandedMobileMenu === item.label && (
                    <ul className="bg-gray-50">
                      {item.subLinks.map((subLink) => (
                        <li key={subLink.label}>
                          <Link
                            href={subLink.href}
                            onClick={handleMobileLinkClick}
                            className="block px-8 py-2 text-gray-700 hover:text-sky-300 hover:bg-gray-100 transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                item.href && (
                  <Link
                    href={item.href}
                    onClick={handleMobileLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:text-sky-300 hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

