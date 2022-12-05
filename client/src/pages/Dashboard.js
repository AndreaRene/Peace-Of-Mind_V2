import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_FEELINGS } from "../utils/js/queries";
import { Col, Row, Button } from "antd";
import { PlusCircleFilled, EditFilled, DeleteFilled } from "@ant-design/icons";
import { Layout } from "antd";
import "../utils/css/Dashboard.css";
import CreateModal from "../components/dashboard/NewPost";
import EditModal from "../components/dashboard/EditPost";

import UserFeelings from "../components/dashboard/Index";

const { Sider, Content } = Layout;

const Dashboard = ({ open, onOK, onCancel }) => {
  const [createPost, setCreatePost] = useState(false);
  const [editPost, setEditPost] = useState(false);

  // const { loading, data} = useQuery(QUERY_MATCHUPS, {
  //     fetchPolicy: 'no-cache'
  // });

  // const matchupList = data?.matchups || [];

  const newPostClick = () => {
    setCreatePost(!createPost);
  };

  const editPostClick = () => {
    setEditPost(!editPost);
  };

  return (
    <main className="mainContent" id="dashboardMain">
      {createPost && <CreateModal />}
      {editPost && <EditModal />}
      <Col className="Sider-Row-Box">
        <Row className="Box-Top-Row">
          <Button onClick={newPostClick}>
            <PlusCircleFilled />
          </Button>
        </Row>
      </Col>
      <Row className="D-Content-Row" wrap={true}>
        <Row className="D-Content-Row-Post">
          <Row className="D-Post-Row">
            <Col className="D-Post-Title">
              <h3>Qu'est-ce que le Lorem Ipsum?</h3>
            </Col>
            <Col className="D-Post-Edit">
              <p className="D-Post-Edit-E">
                <EditFilled onClick={editPostClick} />
              </p>
              <p className="D-Post-Edit-D">
                <DeleteFilled />
              </p>
            </Col>
          </Row>
          <Row className="D-Post-Text">
            <p>Le Lorem Ipsum est simplement du faux texte employé dans la.</p>
          </Row>
          <Row className="D-Post-Date">
            <p>Nov 29th, 2022</p>
          </Row>
        </Row>
      </Row>
      <Row className="D-Content-Row" wrap={true}>
        <Row className="D-Content-Row-Post">
          <Row className="D-Post-Row">
            <Col className="D-Post-Title">
              <h3>Qu'est-ce que le Lorem Ipsum?</h3>
            </Col>
            <Col className="D-Post-Edit">
              <p className="D-Post-Edit-E">
                <EditFilled onClick={editPostClick} />
              </p>
              <p className="D-Post-Edit-D">
                <DeleteFilled />
              </p>
            </Col>
          </Row>
          <Row className="D-Post-Text">
            <p>Le Lorem Ipsum est simplement du faux texte employé dans la.</p>
          </Row>
          <Row className="D-Post-Date">
            <p>Nov 29th, 2022</p>
          </Row>
        </Row>
      </Row>
      <Row className="D-Content-Row" wrap={true}>
        <Row className="D-Content-Row-Post">
          <Row className="D-Post-Row">
            <Col className="D-Post-Title">
              <h3>Qu'est-ce que le Lorem Ipsum?</h3>
            </Col>
            <Col className="D-Post-Edit">
              <p className="D-Post-Edit-E">
                <EditFilled onClick={editPostClick} />
              </p>
              <p className="D-Post-Edit-D">
                <DeleteFilled />
              </p>
            </Col>
          </Row>
          <Row className="D-Post-Text">
            <p>Le Lorem Ipsum est simplement du faux texte employé dans la.</p>
          </Row>
          <Row className="D-Post-Date">
            <p>Nov 29th, 2022</p>
          </Row>
        </Row>
      </Row>
    </main>
  );
};

export default Dashboard;
