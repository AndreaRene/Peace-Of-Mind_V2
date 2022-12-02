import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEELINGS } from '../utils/js/queries';
import { Col, Row, Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { Layout } from 'antd';
import '../utils/css/Index.css';
import CreateModal from '../components/dashboard/NewPost';

import UserFeelings from '../components/dashboard/Index';

const { Sider, Content } = Layout;

const Dashboard = () => {
    const { loading, data } = useQuery(GET_FEELINGS);
    const [createPost, setCreatePost] = useState(false);

    const newPostClick = () => {
        setCreatePost(!createPost);
    }

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