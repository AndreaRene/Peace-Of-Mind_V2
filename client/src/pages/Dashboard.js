import React, { useState } from "react";

import { Col, Row, Button } from "antd";
import { PlusCircleFilled, EditFilled, DeleteFilled } from "@ant-design/icons";
import { Layout } from "antd";
import "../utils/css/Dashboard.css";

import CreateModal from "../components/dashboard/NewPost";
import EditModal from "../components/dashboard/EditPost";
import UserFeelings from "../components/dashboard/Index";
import { useQuery } from "@apollo/client";
import { GET_ME, GET_USER } from "../utils/js/queries";
import { useParams } from "react-router-dom";

import Auth from '../utils/js/auth';

const { Sider, Content } = Layout;

const Dashboard = ({ open, onOK, onCancel }) => {
  const [createPost, setCreatePost] = useState(false);

  const { username } = useParams();
  const { loading, data } = useQuery(username ? GET_USER : GET_ME, {
    variables: { username: username },
  });

  const user = data?.me || data?.user || {};

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
      <UserFeelings
        feelings={user.feelings}
        title={`${user.username}'s feelings...`}
        showTitle={false}
        showUsername={false}
      />
     
    </main>
  );
};

export default Dashboard;
