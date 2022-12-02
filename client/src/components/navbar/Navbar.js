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
    <nav className="flexBox layout">
      <div className="flexAlignStart">
        <Link
          style={{ textDecoration: 'none' }}
          to="/about"
          className="flex link"
        >
          <img
            className="logoPeaceHead"
            src={forest}
            alt="Green Logo of a head with a peace sign"
          ></img>
        </Link>

        <p className="navTitle">PEACE OF MIND</p>
      </div>

      <ul className="menuSettings flexJustifyStart">
        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/about"
            className={({ isActive }) =>
              `flex link ${isActive ? 'active' : ''}`
            }
          >
            <QuestionCircleOutlined className="navIconSettings" />
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/community"
            className={({ isActive }) =>
              `flex link ${isActive ? 'active' : ''}`
            }
          >
            <TeamOutlined className="navIconSettings" />
            Community
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/dashboard"
            className={({ isActive }) =>
              `flex link ${isActive ? 'active' : ''}`
            }
          >
            <DashboardOutlined className="navIconSettings" />
            Dashboard
          </NavLink>

          {/* {auth.loggedIn() ? (
          <>
            <Link as={Link} to="/saved">
              See Your Books
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to="/login"
              className="flex link"
            >
              Logout
            </Link>
          </>
        ) : (
          <Link
            style={{ textDecoration: 'none' }}
            to="/login"
            className="flex link"
          >
            Login/Sign Up
          </Link>
        )} */}
        </li>
        <li>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/login"
            className={({ isActive }) =>
              `flex link ${isActive ? 'active' : ''}`
            }
          >
            <LoginOutlined className="navIconSettings" />
            Login/SignUp
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default GenerateNavbar;
