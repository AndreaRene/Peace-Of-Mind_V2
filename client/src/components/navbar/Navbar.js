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
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/js/queries';

import '../../utils/css/Navbar.css';

const GenerateNavbar = () => {
  const { loading, data } = useQuery(GET_USER);
  const user = data?.user || [];
  console.log('Here: ', GET_USER);
  return (
    <nav id="navBar">
      <div id="navBrand">
        <Link style={{ textDecoration: 'none' }} to="/about" className=" ">
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
              `navClick  ${isActive ? 'active' : ''}`
            }
          >
            <QuestionCircleOutlined className="navIcon" />
            <span className="linkText">About</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/community"
            className={({ isActive }) =>
              `navClick  ${isActive ? 'active' : ''}`
            }
          >
            <TeamOutlined className="navIcon" />
            <span className="linkText">Community</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/dashboard"
            className={({ isActive }) =>
              `navClick  ${isActive ? 'active' : ''}`
            }
          >
            <DashboardOutlined className="navIcon" />
            <span className="linkText">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/login"
            className={({ isActive }) => `navClick ${isActive ? 'active' : ''}`}
          >
            <LoginOutlined className="navIcon" />
            <span className="linkText">Login/Signup</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default GenerateNavbar;
