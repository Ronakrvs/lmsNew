"use client";


import { DatePicker, Input ,Form, Switch} from "antd";
import React, { useRef,useEffect } from "react";
import { useSelector } from "react-redux";

export default function SocialProfiles({ activeTab }) {

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
      className={`tabs__pane -tab-item-3 ${activeTab == 3 ? "is-active" : ""} `}
    >
      <Form ref={formRef} onFinish={handleSubmit} initialValue={{}} className="contact-form row ">
       
        <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Year of graduation
            </label>
          <br />
          <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="graduation" >
            <DatePicker required className="inputfield" placeholder="Enter First Name" size="large"  />
            </Form.Item>
        </div>
       
        <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            current country of residence
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="residence">
            <Input required type="text" placeholder="Enter current country of residence" />
            </Form.Item>
          </div>
        <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            Timezone
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10"name="timezone" >
            <Input required type="text" placeholder="Enter timezone" />
            </Form.Item>
        </div>
        <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Clinical Experience
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="clinicalExp" >
            <Input required type="text" placeholder="Enter Clinical Experience" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Current Occuption
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="occupation"  >
            <Input required type="text" placeholder="Enter current occupation" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
             Appering for exam name
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="examName" >
            <Input required type="text" placeholder="Enter Exam Name" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            when are you planning to keep exams
            </label>
            <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="examDate" >
            <DatePicker required className="inputfield"  name="examDate" placeholder="Enter date" size="large"  />
        </Form.Item> 
        </div>

        <div className="pt-30">
          <div className="row y-gap-20 justify-between">
            <div className="col-auto">
              <div className="text-16 fw-500 text-dark-1">
               Attempt Detail
              </div>
            </div>
          </div>

          <div className="pt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                Is this your first attempt
                </div>
                
              </div>
             
              <div className="col-auto">
              <Form.Item className="text-16 lh-1 fw-500 text-dark-1 mb-10" name="isFirstAttempt" >
                  <Switch  className="bg-primary"/>
                      </Form.Item>
               
              </div>
            </div>
          </div>



        
        </div>

        <div className="col-12">
          <button className="button -md -purple-1 text-white">
            Save Information
          </button>
        </div>
      </Form>
    </div>
  );
}
