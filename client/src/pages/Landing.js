import React from 'react';
import { Row, Col, Button } from 'antd';

const LandingPage = () => {
  return (
    <div>
      <Row>
        <Col Align-Middle>
          <div>PEACE OF MIND</div>
        </Col>
      </Row>
      <Row Align-Middle>
        <Button>Sign up / Log In</Button>
        <Button>Donate</Button>
      </Row>
    </div>
  );
};

export default LandingPage;
