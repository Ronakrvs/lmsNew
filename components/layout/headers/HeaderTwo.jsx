"use client";

import SearchToggle from "../component/SearchToggle";
import CartToggle from "../component/CartToggle";
import MobileMenu from "../component/MobileMenu";
import Menu from "../component/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Socials from "@/components/common/Socials";
import LogoName from "@/components/common/logoName";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "@/store/actions/commonAction";
import { Cookies } from "react-cookie";
import { isEmpty } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import { Space } from "antd";

export default function HeaderTwo() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOnProfile, setIsOnProfile] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const dispatch = useDispatch();
  const sampleListData = useSelector((state) => state?.authUser);
  const { authUser } = sampleListData;

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
   
    const cookies = new Cookies();
    cookies.remove('token'); 
    dispatch(resetState());
    setOpen(false);
    router.push('/login')
  };
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
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`header -type-5 js-header ${
        scrollPosition > 40 ? "bg-dark-1" : ""
      } `}
    >
      <div className="d-flex items-center bg-primary py-10">
        <div className="container">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-10 items-center">
                  <Socials/>
                {/* <div className="d-flex items-center text-white md:d-none">
                  <div className="icon-email mr-10"></div>
                  <div className="text13 lh-1">(00) 242 844 39 88</div>
                </div> */}
                <div className="d-flex items-center text-white">
                  <div className="icon-email mr-10"></div>
                  <div className="text13 lh-1">info@dentabest.com</div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-30 y-gap-10">
                <div>
                  {isEmpty(authUser) && <div className="d-flex x-gap-20 items-center text-white">
                    <div className="header-right__buttons d-flex items-center ml-30 xl:ml-20 md:d-none">
                      <Link href="/login" className="button -underline text-white">
                     <Space ><LoginOutlined/>   Log in</Space>
                      </Link>
                      <Link href="/signup" className="button -underline ml-30 text-white">
                      <Space ><UserAddOutlined />   Register</Space>
                      
                      </Link>
                    </div>
                  </div>}
                </div>

                {/* <div className="d-flex items-center text-white text-13 sm:d-none">
                  English <i className="icon-chevron-down text-9 ml-10"></i>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="header-left">
              <div className="header__logo ">
              <Link href="/">
                <img
                      width={70}
                      height={50}
                      src='/assets/newlogo.png'
                      alt="logo"
                    />
                   {/* <LogoName/> */}
                  </Link>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="header-right d-flex items-center">
              <Menu allClasses={"menu__nav text-white -is-active"} />
              <MobileMenu
                activeMobileMenu={activeMobileMenu}
                setActiveMobileMenu={setActiveMobileMenu}
              />
              {!isEmpty(authUser) && <div
                className="relative d-flex items-center ml-10"
                onClick={() => setIsOnProfile((pre) => !pre)}
              >
                <a href="#" data-el-toggle=".js-profile-toggle">
                  <img
                    width={50}
                    height={50}
                    style={{ maxWidth: 50 }}
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
                            {elm.id !== 4 ?
                              <Link
                                href={elm.href}
                                className="d-flex items-center text-17 lh-1 fw-500 "
                              >
                                <i className={elm.iconClass}></i>
                                {elm.text}
                              </Link> :
                              <Link
                                onClick={() => showModal()}
                                href={''}
                                className="d-flex items-center text-17 lh-1 fw-500 "
                              >
                                <i className={elm.iconClass}></i>
                                {elm.text}
                              </Link>}
                          </div>
                        ))}
                           
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
              {/* <div className="header-right__icons text-white d-flex items-center ml-30">
                <SearchToggle />

                <CartToggle
                  parentClassess={"relative ml-30 xl:ml-20"}
                  allClasses={"d-flex items-center text-white"}
                />

                <div className="d-none xl:d-block ml-20">
                  <button
                    className="text-white items-center"
                    onClick={() => setActiveMobileMenu(true)}
                    data-el-toggle=".js-mobile-menu-toggle"
                  >
                    <i className="text-11 icon icon-mobile-menu"></i>
                  </button>
                </div>
              </div> */}

             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
