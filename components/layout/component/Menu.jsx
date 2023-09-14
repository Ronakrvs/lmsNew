"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileFooter from "./MobileFooter";
import { menuList } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Menu({ allClasses, headerPosition }) {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    menuList.forEach((menu) => {
      const matchingMenuItem = menu.links.find((menuItem) =>
        menuItem.href && menuItem.href.split('/')[1] === pathname.split('/')[1]
      );

      if (matchingMenuItem) {
        setActiveMenu(menu.title);

        if (matchingMenuItem.links) {
          const matchingSubmenuItem = matchingMenuItem.links.find((submenuItem) =>
            submenuItem.href && submenuItem.href.split('/')[1] === pathname.split('/')[1]
          );

          if (matchingSubmenuItem) {
            setActiveSubmenu(matchingMenuItem.title);
          }
        }
      }
    });
  }, [pathname]);

  const renderMenuItems = (menuItems) => {
    return menuItems.map((menuItem, index) => (
      <li key={index} className={isActive(menuItem.href) ? "activeMenu" : "inActiveMenu"}>
        <Link data-barba href={menuItem.href}>
          {menuItem.label}
        </Link>
      </li>
    ));
  };

  const isActive = (path) => pathname === path;

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        headerPosition ? headerPosition : ""
      }`}
    >
      <div className="header-menu__content">
        {/* Your code for login and sign-up links */}
        
        <div className="menu js-navList">
          <ul className={`${allClasses ? allClasses : ""}`}>
            <li>
              <Link data-barba href="/" className={isActive("/") ? "activeMenu" : "inActiveMenuTwo"}>
                <b style={{fontSize:"16px"}}> Home </b>
              </Link>
            </li>
            <li>
              <Link data-barba href="/courses-list-4" className={isActive("/courses-list-4") ? "activeMenu" : "inActiveMenuTwo"}>
                <b style={{fontSize:"16px"}}> Explore </b>
              </Link>
            </li>
            <li>
              <Link data-barba href="/blog-list-1" className={isActive("/blog-list-1") ? "activeMenu" : "inActiveMenuTwo"}>
                <b style={{fontSize:"16px"}}> Success stories </b>
              </Link>
            </li>
            <li>
              <Link data-barba href="/contact-2" className={isActive("/contact-2") ? "activeMenu" : "inActiveMenuTwo"}>
                <b style={{fontSize:"16px"}}> Team </b>
              </Link>
            </li>
            <li>
              <Link data-barba href="/seeking-help" className={isActive("/seeking-help") ? "activeMenu" : "inActiveMenuTwo"}>
                <b style={{fontSize:"16px"}}> Help </b>
              </Link>
            </li>
            {/* Additional menu items can be added here */}
          </ul>
        </div>

        {/* mobile footer start */}
        <MobileFooter />
        {/* mobile footer end */}
      </div>

      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div className="header-menu-bg"></div>
    </div>
  );
}
