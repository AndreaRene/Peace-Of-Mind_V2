import React, { useState } from 'react';

import { Col, Row, Button } from 'antd';
import { PlusCircleFilled, EditFilled, DeleteFilled } from '@ant-design/icons';
import { Layout } from 'antd';
import '../utils/css/Dashboard.css';

import CreateModal from '../components/dashboard/NewPost';
import EditModal from '../components/dashboard/EditPost';
import UserFeelings from '../components/dashboard/Index';
import { useQuery } from '@apollo/client';
import { GET_ME, GET_USER, GET_FEELINGS } from '../utils/js/queries';
import { useParams } from 'react-router-dom';

import Auth from '../utils/js/auth';

const { Sider, Content } = Layout;

const Dashboard = () => {
  const [createPost, setCreatePost] = useState(false);

  // const { loading, data } = useQuery(GET_USER);
  // const user = data?.user || [];

  const { loading, data } = useQuery(GET_ME);
  const me = data?.me || [];

  // console.log(`THis is user: ${data}`);

  const newPostClick = () => {
    setCreatePost(!createPost);
  };

  return (
    <main className="" id="dashboardMain">
      {createPost && <CreateModal />}
      <Col className="Sider-Row-Box">
        <Row className="Box-Top-Row">
          <Button onClick={newPostClick}>
            <PlusCircleFilled />
          </Button>
        </Row>
      </Col>
      <UserFeelings feelings={me.feelings} />
    </main>
  );
};

export default Dashboard;
