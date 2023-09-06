// Profile.js

// import React, { useState, useEffect } from "react";
// import { Form, Input, message, Button } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../components/Spinner";

// const Profile = () => {

//     const [showPassword, setShowPassword] = useState(false);
//   // Define state variables to manage user data and form data
//   const [userData, setUserData] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Load user data from the server when the component mounts
//   useEffect(() => {
//     // Make an API request to fetch the user's data and update `userData` state
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("/users/profile");
//         setUserData(response.data); // Update user data
//       } catch (error) {
//         message.error("Failed to fetch user data");
//       }
//     };

//     fetchUserData();
//   }, []);

//   // Define a function to handle form submission for editing user data
//   const handleEditProfile = async (values) => {
//     setLoading(true);
//     try {
//       // Make an API request to update user data on the server
//       await axios.put("/users/profile", values);
//       message.success("Profile updated successfully");
//       setLoading(false);
//     } catch (error) {
//       message.error("Failed to update profile");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="profile-page">
//       {loading && <Spinner />}
//       <h1>Edit Profile</h1>
//       <Form layout="vertical" onFinish={handleEditProfile} initialValues={userData}>
//         <Form.Item label="Name" name="name">
//           <Input />
//         </Form.Item>
//         <Form.Item label="Email" name="email">
//           <Input type="email" />
//         </Form.Item>
//         <Form.Item label="Password" name="password">
//           <Input.Password
//             type={showPassword ? "text" : "password"}
//             iconRender={(visible) =>
//               visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//             }
//           />
//         </Form.Item>
//         <Form.Item label="Profile Picture" name="profilePicture">
//           {/* Add an input field for uploading profile picture */}
//         </Form.Item>
//         <Button type="primary" htmlType="submit" loading={loading}>
//           Save Changes
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Profile;
