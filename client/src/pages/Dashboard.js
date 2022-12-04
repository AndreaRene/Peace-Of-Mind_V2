import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEELINGS } from '../utils/js/queries';
import { Col, Row, Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { Layout } from 'antd';
import '../utils/css/Dashboard.css';
import CreateModal from '../components/dashboard/NewPost';

import UserFeelings from '../components/dashboard/Index';

const { Sider, Content } = Layout;

<<<<<<< HEAD
const Dashboard = () => {
    const { loading, data } = useQuery(GET_FEELINGS);
    const [createPost, setCreatePost] = useState(false);
=======
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
>>>>>>> 8dbc550d197f56f41eae7bbb3a58bec52b6a85da

  const editPostClick = () => {
    setEditPost(!editPost);
  };

<<<<<<< HEAD
    return (
        <main className="mainContent">
            {createPost && ( <CreateModal />)}

            <Layout>
                <Sider>
                    <Col className='D-Col'>
                        <Col className='Sider-Row-Box'>
                            <Row className='Box-Top-Row'>
                                <Button onClick={newPostClick}>
                                    <PlusCircleFilled />
                                </Button>
                            </Row>
                        </Col>
                    </Col>
                </Sider>
                <Layout>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <UserFeelings />
                    )}
                </Layout>
            </Layout>
        </main>
    )
}

export default Dashboard;
=======
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
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la.
            </p>
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
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la.
            </p>
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
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la.
            </p>
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
>>>>>>> 8dbc550d197f56f41eae7bbb3a58bec52b6a85da
