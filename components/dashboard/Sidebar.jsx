"use client";

import { sidebarItems } from "@/data/dashBoardSidebar";
import React,{useState} from "react";
import Link from "next/link";
import { usePathname ,useRouter} from "next/navigation";
import { Modal } from "antd";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { resetState } from "@/store/actions/commonAction";
// import { useRouter } from "next/router";
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const dispatch = useDispatch()

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    router.push('/')
    const cookies = new Cookies();
    cookies.remove('token'); 
    dispatch(resetState());
    setOpen(false);
  };

  const pathname = usePathname();
  return (
    <div className="sidebar -dashboard">
      {sidebarItems.map((elm, i) => (
        <div
          key={i}
          className={`sidebar__item   ${
            pathname == elm.href ? "-is-active" : ""
          } `}
        >
          {elm?.id == 8 ?  <Link
              key={i}
              onClick={()=>showModal()}
              href={''}
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className={`${elm.iconClass} mr-15`}></i>
              {elm.text}
            </Link> :
           
            <Link
              key={i}
              
              href={elm.href}
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className={`${elm.iconClass} mr-15`}></i>
              {elm.text}
          </Link>}
          
          <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
            okText="Ok"
            
        cancelText="Cancel"
      >
      Are you Sure you want to Logout
      </Modal>
        </div>
      ))}
    </div>
  );
}
