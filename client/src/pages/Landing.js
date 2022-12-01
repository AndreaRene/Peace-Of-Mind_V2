import React from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button, Row, Col, Space } from 'antd';
import './Landing.css';
import forest from '../assets/pom-logo/forest.png';
import { generateName } from '../utils/names';

const LandingPage = () => {
  return (
    // <Row className="wrapper landingImage" align="middle" justify="center">
    //   <Col lg="1">Hello There</Col>
    //   <Col lg="1">
    //     <Button>Sign up / Log In</Button>
    //   </Col>
    // </Row>
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
        <Button className="button green">Donate</Button>
      </span>
    </div>
  );
};

export default LandingPage;
