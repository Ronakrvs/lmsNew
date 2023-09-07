"use client";

import React, { useState,useEffect } from "react";
import CartToggle from "../component/CartToggle";
import { HeaderExplore } from "../component/header-explore";
import Menu from "../component/Menu";
import MobileMenu from "../component/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import logoImg from '../../../public/assets/logo.webp'
import { getSampleData } from "@/store/actions/sampleAction";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { sidebarItems } from "@/data/dashBoardSidebar";
import { menuList } from "@/data/menu";

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [isOnProfile, setIsOnProfile] = useState(false);
  const dispatch = useDispatch();
  const sampleListData = useSelector((state) => state?.authUser);
  const { authUser } = sampleListData;

  console.log(authUser);
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const headerItem = [
    {
    id: 1,
    href: "/dashboard",
    iconClass: "text-20 icon-discovery",
    text: "Dashboard",
    },
    {
    id: 2,
    href: "/dshb-courses",
    iconClass: "text-20 icon-play-button",
    text: "My Courses",
    },
    {
    id: 3,
    href: "/dshb-settings",
    text: "Profile",
    iconClass: "text-20 icon-person-2",
    },
    {
    id: 4,
    href: "/login",
    iconClass: "text-20 icon-power",
    text: "Logout",
  },]
  return (
    <header
      data-add-bg=""
      className="header -type-4 -shadow bg-white js-header"
    >
      <div className="header__container border-bottom-light py-10">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="header-left d-flex items-center">
              <div className="header__logo pr-30 xl:pr-20 md:pr-0">
                <Link href="/">
                <img
                      width={70}
                      height={50}
                      src='/assets/logo.webp'
                      alt="logo"
                    />
                    DENTA <b>BEST</b>
                  </Link>
              </div>

              {/* <HeaderExplore
                allClasses={
                  "header__explore px-30 xl:px-20 -before-border -after-border xl:d-none"
                }
              /> */}
              <Menu
                headerPosition={"pl-30 xl:pl-20"}
                allClasses={"menu__nav text-dark-1 -is-active"}
              />
              <MobileMenu
                activeMobileMenu={activeMobileMenu}
                setActiveMobileMenu={setActiveMobileMenu}
              />
            </div>
          </div>

          <div className="col-auto">
            <div className="header-right d-flex items-center">
              <div className="header-right__icons text-white d-flex items-center">
                {/* <div className="header-search-field">
                  <form onSubmit={handleSubmit}>
                    <div className="header-search-field__group">
                      <input
                        required
                        type="text"
                        placeholder="What do you want to learn?"
                      />
                      <button type="submit">
                        <i className="icon icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div> */}

                {/* <CartToggle
                  allClasses={"d-flex items-center text-dark-1"}
                  parentClassess={"relative -after-border pl-20 sm:pl-15"}
                /> */}

                <div className="d-none xl:d-block pl-20 sm:pl-15">
                  <button
                    onClick={() => setActiveMobileMenu(true)}
                    className="text-dark-1 items-center"
                    data-el-toggle=".js-mobile-menu-toggle"
                  >
                    <i className="text-11 icon icon-mobile-menu"></i>
                  </button>
                </div>
              </div>
              {isEmpty(authUser) ?
                <div className="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none">
                  <Link href="/login" className="button -underline text-purple-1">
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="button h-50 px-30 -purple-1 -rounded text-white ml-20"
                  >
                    Sign up
                  </Link>
                </div>
                :
                <div
                  className="relative d-flex items-center ml-10"
                  onClick={() => setIsOnProfile((pre) => !pre)}
                >
                  <a href="#" data-el-toggle=".js-profile-toggle">
                    <img
                      width={50}
                      height={50}
                      className="size-50"
                      src={authUser?.user_image}
                      alt="image"
                    />
                  </a>

                  <div
                    className={`toggle-element js-profile-toggle ${isOnProfile ? "-is-el-visible" : ""
                      } -`}
                  >
                    <div className="toggle-bottom -profile bg-white shadow-4 border-light rounded-8 mt-10">
                      <div className="px-30 py-30">
                        <div className="sidebar -dashboard">
                          {headerItem.map((elm, i) => (
                            <div
                              key={i}
                              className={`sidebar__item ${elm.id == 6 ? "-is-active -dark-bg-dark-2" : ""
                                }`}
                            >
                              <Link
                                href={elm.href}
                                className="d-flex items-center text-17 lh-1 fw-500 "
                              >
                                <i className={elm.iconClass}></i>
                                {elm.text}
                              </Link>
                            </div>
                          ))}
                           
                      </div>
                      </div>
                    </div>
                  </div>
                </div>}
              </div>
            </div>
            </div>
          </div>
       
     
    </header>
  );
}
