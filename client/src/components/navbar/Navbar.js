import React from 'react';
import { useState } from 'react';
import forest from '../../assets/pom-logo/forest.png';
import { Link, NavLink } from 'react-router-dom';
import question from '../../assets/icons/png/questionGreen.png';
import communityIcon from '../../assets/icons/png/communityGreen.png';
import dashboard from '../../assets/icons/png/dashboardGreen.png';
import {
  QuestionCircleOutlined,
  TeamOutlined,
  DashboardOutlined,
  LoginOutlined,
} from '@ant-design/icons'; // import auth from '../utils/auth';

import '../../utils/css/Navbar.css';

const GenerateNavbar = () => {
  return (
    <nav id="navBar">
      <div id="navBrand">
        <Link
          style={{ textDecoration: 'none' }}
          to="/about"
          className=" "
        >
          <img
            className="logoPeaceHead"
            src={forest}
            alt="Green Logo of a head with a peace sign"
          ></img>
        </Link>

        <h1 id="navTitle">PEACE OF MIND</h1>
      </div>

      <ul className="navLinks">
        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/about"
            className={({ isActive }) =>
              `navCLick  ${isActive ? 'active' : ''}`
            }
          >
            <QuestionCircleOutlined className="navIcon" />
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/community"
            className={({ isActive }) =>
              `navCLick  ${isActive ? 'active' : ''}`
            }
          >
            <TeamOutlined className="navIcon" />
            Community
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/dashboard"
            className={({ isActive }) =>
              `navCLick  ${isActive ? 'active' : ''}`
            }
          >
            <DashboardOutlined className="navIcon" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/login"
            className={({ isActive }) =>
              `navCLick ${isActive ? 'active' : ''}`
            }
          >
            <LoginOutlined className="navIcon" />
            Login/SignUp
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default GenerateNavbar;
