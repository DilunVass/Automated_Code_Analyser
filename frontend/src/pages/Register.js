import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";


const Register = () => {

  const [showPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="resgister-page ">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name" 
          rules={[
          {
            required: true,
            message: 'Please enter your name!',
          },
    // You can add more rules as needed
  ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
            {
              type: 'email',
              message: 'Invalid email format!',
            },
          ]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
            {
              min: 6,
              message: 'Password must be at least 6 characters long!',
            },
          ]}>
            <Input.Password
          type={showPassword ? 'text' : 'password'}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
          </Form.Item>

          {/* <Button onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </Button> */}

          <div className="d-flex flex-column align-items-center">
            <Link to="/login">Already Register ? Cleck Here to login</Link>
            <button className="btn btn-primary mt-3">Resgiter</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
