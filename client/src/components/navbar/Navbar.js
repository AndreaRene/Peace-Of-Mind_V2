import React from 'react';
import forest from '../../assets/pom-logo/forest.png';
import { Link } from 'react-router-dom';
import question from '../../assets/icons/png/questionGreen.png';
import community from '../../assets/icons/png/communityGreen.png';
import dashboard from '../../assets/icons/png/dashboardGreen.png';
// import auth from '../utils/auth';

import '../../utils/css/Navbar.css';

const GenerateNavbar = () => (
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
        <Link
          style={{ textDecoration: 'none' }}
          to="/login"
          className="flex link"
        >
          <img className="icon" src={question} alt="Question Icon"></img>
          About
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: 'none' }}
          to="/login"
          className="flex link"
        >
          <img className="icon" src={community} alt="Question Icon"></img>
          Community
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: 'none' }}
          to="/login"
          className="flex link"
        >
          <img className="icon" src={dashboard} alt="Question Icon"></img>
          Dashboard
        </Link>
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
    </ul>
  </nav>
);
export default GenerateNavbar;
