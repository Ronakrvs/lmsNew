"use client";

import { DatePicker, Form, Input, message } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import '../../../public/assets/css/custom.css';
import { useSelector } from "react-redux";
import { getUserById, updateUser } from "@/service/user";
export default function EditProfile({ activeTab }) {
  const [previewImage, setPreviewImage] = useState(
    "/assets/img/dashboard/edit/1.png",

  );
  const formRef = useRef()
  const sampleListData = useSelector((state) => state?.authUser);
  const { authUser } = sampleListData;
  useEffect(() => {
    getUserProfile()
  }, [])
  
  const getUserProfile = async () => {
    console.log("authentication",authUser)
    await getUserById(authUser?._id).then(({data}) => { 
      console.log("user",data?.getProfile)
      formRef.current.setFieldsValue(data?.getProfile)
      console.log("user",authUser)
    })
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    formRef.current.validateFields().then(async(value) => { 
      console.log(value);
try {
  await updateUser(value, authUser?._id).then((val) => { 
    console.log(val)
  })
  message.success({content: "Profile Updated successfully",key: "profile"});
} catch (error) {
  message.error({content:error.message,key:"1"})
}
     
      
    })
  };
  return (
    <div
      className={`tabs__pane -tab-item-1 ${activeTab == 1 ? "is-active" : ""} `}
    >
      <div className="row y-gap-20 x-gap-20 items-center">
        <label
          className="col-auto"
          htmlFor="imageUpload"
          style={
            previewImage
              ? {}
              : { backgroundColor: "#f2f3f4", width: 100, height: 100 }
          }
        >
          {previewImage && (
            <Image
              width={100}
              height={100}
              className="size-100"
              src={previewImage}
              alt={previewImage ? "image" : ""}
            />
          )}
        </label>

        <div className="col-auto">
          <div className="text-16 fw-500 text-dark-1">Your avatar</div>
          <div className="text-14 lh-1 mt-10">
            PNG or JPG no bigger than 800px wide and tall.
          </div>

          <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
            <div>
              <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                <label
                  style={{ cursor: "pointer" }}
                  htmlFor="imageUpload1"
                  className="icon-cloud text-16"
                ></label>
                <input
                  required
                  id="imageUpload1"
                  type="file"
                  name="user_image"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  document.getElementById("imageUpload1").value = "";
                  setPreviewImage("");
                }}
                className="d-flex justify-center items-center size-40 rounded-8 bg-light-3"
              >
                <div className="icon-bin text-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top-light pt-30 mt-30">
        <Form ref={formRef} onFinish={handleSubmit} initialValues={{}} className="contact-form row ">
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              First Name
            </label>
<Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="firstname" >
              <Input required type="text"  placeholder="Enter Full Name" />
              </Form.Item>
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Last Name
            </label>
<Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="lastname" >
              <Input required type="text"  placeholder="Enter Full Name" />
              </Form.Item>
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Date of Birth
            </label>
            <br />
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="dob" >
           
            <DatePicker className="inputfield" required format={'DD-MM-YYYY'} placeholder="Select DOB" size="large"  />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
             Email
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="email">
            <Input required type="text"  placeholder="Enter Email" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
             Contact Number
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="phone">
            <Input required type="number" className="inputfield" placeholder="Enter Contact Detail"   />
            </Form.Item>    
      </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Address Line 1
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="address_line1">
            <Input required type="text"  placeholder=" Enter Address Line 1" />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Address Line 2
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="address_line2">
            <Input required type="text"  placeholder=" Enter Address Line 2" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Postal Code
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="postal_code">
            <Input required type="text"  placeholder="Enter Postal Code" />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              City
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="city">
            <Input required type="text"  placeholder="Enter City" />
            </Form.Item>
          </div>
        
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              State
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="state">
            <Input required type="text"  placeholder=" Enter State" />
            </Form.Item>
          </div>

          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Country
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="country">
            <Input required type="text"  placeholder=" EnterCountry" />
            </Form.Item>
          </div>
        

          <div className="col-12">
            <button className="button -md -purple-1 text-white">
              Update Profile
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
