"use client"
import React, { useEffect, useState } from 'react';
import { Card, Avatar, Button, Form, Input,Row,Col,Select,Image, Spin } from 'antd';
import { UserOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import styles from "./profile.module.css"
import { httpClient } from '@/utils/api';
// import Image from "next/image"
const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading,setLoading] = useState(true)
  const [userformRef] =Form.useForm()
  const [user, setUserData] = useState({
    
  });


  const getUser = async()=>{
    try{
      await httpClient.get(`user/profile`).then(({data})=>{
        console.log(data)
      setUserData({...data.getProfile}) 
      setLoading(false) 
    })
  }catch(err){
      setLoading(false) 
      throw new Error(err)
    }
  }
  useEffect(()=>{
    
   getUser()
   
  },[])
  console.log("user",user)
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Implement code to save updated user data to your backend/database
    setIsEditing(false);
    // You may want to make an API call to update the user's data on the server
  };
  const onFinishUser =async(values)=>{
    try{
      await httpClient.put(`user/update-profile`,{data:{...user,values}}).then(({data})=>{
        // console.log(data)
      setUserData({...data.getProfile}) 
      setLoading(false) 
    })
  }catch(err){
      setLoading(false) 
      throw new Error(err)
    }
  }
  if(loading){
    return <Spin />
  }

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
      
      <div className={styles.list}>
                <Form
                  layout={"vertical"}
                  onValuesChange={(value) => {
                    if (value["language"]) {
                      let local =
                        user?.language == "english" ? "en-US" : "hi-IN";
                      switch (value["language"]) {
                        case "hindi":
                          local = "in-HI";
                          break;
                        case "english":
                          local = "en-US";
                          break;

                        default:
                          break;
                      }
                      setLocale(local, false);
                    }
                  }}
                  form={userformRef}
                  name="basic"
                  initialValues={{
                    firstname: user?.firstname,
                    lastname: user?.lastname,
                    email: user?.email,
                    phone: user?.mobile,
                    user_image:user.user_image,
                    language: user?.language,
                    prefix: user?.prefix || '+91',
                    // business_type: user?.business_type,
                    business_name: user?.business_name,
                    address_line1: user?.address_line1,
                    address_line2: user?.address_line2,
                    city: user?.city,
                    postal_code: user?.postal_code,
                    state:user?.state,
                    country:user?.country
                  }}
                  onFinish={onFinishUser}
                >
                  <Row>
                  <Col className="gutter-row" style={{marginLeft:"43%"}} span={24} offset={2}>
                      <Form.Item
                        // label={"First Name"}
                        name="user_image"
                        // rules={[{required: true,message: "Please enter first name",},]}
                        >
                        {/* <Input size="large"  />
                         */}
                         <Image style={{display:"flex",borderRadius:"50%"}} width={200} height={200} src={user.user_image} />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={9} offset={2}>
                      <Form.Item
                        label={"First Name"}
                        name="firstname"
                        rules={[{required: true,message: "Please enter first name",},]}>
                        <Input size="large"  />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={9} offset={2}>
                      <Form.Item
                        label={ "Last Name"}
                        name="lastname"
                        rules={[
                          {required: true, message: "Please enter last name" },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={9} offset={2}>
                      <Form.Item 
                        name="email"
                        
                      rules={[{ required: true, message:  "" }, {
                        validator: (rule, value) => {
                            if ([undefined, null].includes(value)) return Promise.reject()
                            else {
                              if (value && !(value)) {
                                return Promise.reject(new Error(  'Invalid Email Credentials' ))
                              }
                            }
                            return Promise.resolve();
                        }
                    },]}
                        label={"Email"}  >
                        <Input size="large" onBlur={()=>getOTP("email")}/>
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={9} offset={2}>
                      <Input.Group compact>
                        
                        <Form.Item
                          noStyle
                          
                          shouldUpdate={(prevValues, currentValues) =>
                            prevValues.phone !== currentValues.phone
                          }>
                              <Form.Item
                                name="prefix"
                                rules={[{required: true,message: "please select number prefix",},]}
                              >
                                {/* <HPhoneNumber /> */}
                              </Form.Item>
                        </Form.Item>

                        <Form.Item
                         
                          className={styles.custominput}
                          shouldUpdate={(prevValues, currentValues) =>
                            prevValues.phone !== currentValues.phone
                          }
                        >
                          {({ getFieldValue }) => {
                            const isNumber =  (
                              getFieldValue("phone")
                            );
                            return (
                              <>
                                <Form.Item
                                  label={"Phone"}
                                  name="phone"
                                  rules={[{ required: true, message:    'phone'   }, {
                                    validator: (rule, value) => {
                                        if ([undefined, null].includes(value)) return Promise.reject()
                                        else {
                                          if (isNumber) {
                                            if (!getFieldValue('prefix')) {
                                              return Promise.reject(new Error('select a country prefix'));
                                            }
                                            if (! (value, getFieldValue('prefix'))) {
                                              return Promise.reject(new Error ('numcountry') )
                                            }
                                            return Promise.resolve()
                                          } 
                                        }
                                        return Promise.resolve();
                                    }
                                },]}
                                >
                                  <Input size="large" onBlur={()=>getOTP("phone")}/>
                                </Form.Item>
                              </>
                            );
                          }}
                        </Form.Item>
                      </Input.Group>
                    </Col>
                    <Col className="gutter-row" span={9} offset={2}>
                      <Form.Item
                        name="language"
                        label={"Language"}
                        hasFeedback
                        style={{ width: "100%" }}
                        rules={[{required: true,message: "please select language",},]}
                      >
                        <Select
                          size="large"
                          placeholder="Select Language"
                          // onChange={LanguageChange}
                        >
                          <Select.Option value="hindi">
                            {"Hindi"}
                          </Select.Option>
                          <Select.Option value="english">
                            {"English"}
                          </Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                     
                   

                    <Col className="gutter-row" span={9} offset={2}>
                      <Form.Item
                        name={"address_line1"}
                        label={"Address Line 1"}>
                        <Input
                          size="large"
                          placeholder={ "Address Line 1"}/>
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={9} offset={2}>
                      <Form.Item
                        name={"address_line2"}
                        label={"Address Line 2"}>
                        <Input
                          size="large"
                          type="text"
                          placeholder={"Address Line 2"}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={9}  offset={2}>
                      <Form.Item
                        name="city"
                        label={ "City"}>
                        <Input
                          size="large"
                          type="text"
                          placeholder={ "City"}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={9} offset={2}>
                      <Form.Item
                        name={"postal_code"}
                        label={"Postal Code"}>
                        <Input
                          size="large"
                          type="number"
                         
                        />
                      </Form.Item>
                    </Col>
                    
                    <Col className="gutter-row" span={9} offset={2}>
                      <Form.Item
                        name={"country"}
                        label={ "Country"}>
                        <Input
                          size="large"
                          type="text"
                          placeholder={ "Country"}
                        />
                      </Form.Item>
                    </Col>

                   
                    <Col className="gutter-row" style={{marginLeft:"50%"}} span={16}>
                      <Form.Item  >
                        <Button
                          type="primary"
                          htmlType="submit"
                          // loading={mailLoading}
                        >
                          { "Save"}
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
    </div>
    </div>
  );
};

export default UserProfile;
