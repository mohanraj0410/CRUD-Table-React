import React from 'react';
import '../style/navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BellOutlined, ContactsOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const NavBar = () => {
    let username = useSelector((store) => store.user.user)
    // console.log(username)

    let navigate = useNavigate()
    return (
        <nav className="navbar">
            <div className="logo-container">
                <h1><span className="logo-text">School</span></h1>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to={"/home"}><HomeOutlined /> Home</NavLink>
                </li>
                <li><NavLink to={"about"}><BellOutlined /> About</NavLink></li>
                <li><a href="#"><ContactsOutlined /> Contact</a></li>
                <li>
                    {
                        username && username.name
                    }
                </li>
                <li style={{ cursor: 'pointer' }} onClick={() => navigate("/")}><Tooltip title="Log Out" color={"red"} key={"red"}>
                    <LogoutOutlined />
                </Tooltip></li>
            </ul>
        </nav>
    );
};

export default NavBar;
