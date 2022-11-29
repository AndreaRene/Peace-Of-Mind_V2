import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Space } from 'antd';
import './Landing.css';
import forest from '../assets/pom-logo/forest.png';

const LandingPage = () => {
  return (
    <div className="wrapper landingImage">
      <h1 id="landingTitle">
        <img
          className="peaceHead"
          src={forest}
          alt="Green Logo of a head with a peace sign"
        />
        Peace of Mind
        <img
          className="peaceHead flip"
          src={forest}
          alt="Green Logo of a head with a peace sign"
        />
      </h1>
      <span className="flex">
        <Button className="button yellow">Sign Up / Log In</Button>
        <Link style={{ textDecoration: 'none' }} to="/aboutPage">
          <Button className="button green"> About Page</Button>
        </Link>
      </span>
    </div>
  );
};

export default LandingPage;
