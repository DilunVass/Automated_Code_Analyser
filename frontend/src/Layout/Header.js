import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message ,Dropdown, Menu, Avatar} from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";


const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={logoutHandler}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              CODE ANALYSER
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {loginUser && (
                <li className="nav-item">
                  <Dropdown overlay={userMenu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      {loginUser.name}
                      <Avatar
                        icon={<UserOutlined />}
                        style={{ marginRight: "8px" }}
                      />
                      
                    </a>
                  </Dropdown>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
