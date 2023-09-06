import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {

  const [showPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
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
          <h1>Login Form</h1>

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
          <div className="d-flex flex-column align-items-center">
            <Link to="/register">Not a user? Click Here to regsiter</Link>
            <button className="btn btn-primary mt-3">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
