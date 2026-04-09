"use client";

import mobileMenuData from '@/data/header-menu/mobileMenuData';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainMobileMenu: React.FC<Props> = ({ setOpenOffcanvas }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setActiveMenu(activeMenu === id ? null : id);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <ul>
      {mobileMenuData.map((menuItem) => (
        <li key={menuItem.id} className={`${activeMenu === menuItem.id ? 'active' : ''}`}>

          {/* ✅ MAIN LINK FIX */}
          <Link
            href={menuItem.link}
            onClick={(e) => {
              if (menuItem.submenu || menuItem.megaMenu) {
                e.preventDefault(); // sirf dropdown walon ke liye
                toggleMenu(menuItem.id);
              } else {
                setOpenOffcanvas(false); // navigate + menu close
              }
            }}
          >
            {menuItem.title}
          </Link>

          {/* ✅ SUBMENU */}
          {menuItem.submenu && (
            <ul
              className="tp-submenu submenu"
              style={{ display: activeMenu === menuItem.id ? 'block' : 'none' }}
            >
              {menuItem.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.link}
                    onClick={(e) => {
                      if (subItem.submenu) {
                        e.preventDefault();
                        toggleSubmenu(subIndex);
                      } else {
                        setOpenOffcanvas(false); // close on click
                      }
                    }}
                  >
                    {subItem.title}
                  </Link>

                  {/* Nested submenu */}
                  {subItem.submenu && (
                    <ul
                      style={{ display: activeSubmenu === subIndex ? 'block' : 'none' }}
                    >
                      {subItem.submenu.map((nestedItem, nestedIndex) => (
                        <li key={nestedIndex}>
                          <Link
                            href={nestedItem.link}
                            onClick={() => setOpenOffcanvas(false)}
                          >
                            {nestedItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}

        </li>
      ))}
    </ul>
  );
};

export default MainMobileMenu;