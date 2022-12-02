import React, { useState } from 'react';
import { Col, Row, Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
//import { GET_FEELINGS } from '../utils/js/queries';
import EditModal from './EditPost';

const UserFeelings = () => {
  const [editPost, setEditPost] = useState(false);

  const editPostClick = () => {
    setEditPost(!editPost);
}

  return (
    <div>
      {editPost && ( <EditModal />)}
      {/* {showfeelingTitle && <h3>{feelingTitle}</h3>}
      {feelings &&
        feelings.map((thought) => ( */}
            <div className="D-Content">
                <Row className="D-Content-Row" wrap={true}>
                    <Row className="D-Content-Row-Post">
                        <Row className="D-Post-Row">
                            <Col className="D-Post-Title">
                                <h3>Qu'est-ce que le Lorem Ipsum?</h3>
                            </Col>
                            <Col className="D-Post-Edit">
                                <p className="D-Post-Edit-E"><EditFilled onClick={editPostClick}/></p>
                                <p className="D-Post-Edit-D"><DeleteFilled /></p>
                            </Col>
                        </Row>
                        <Row className="D-Post-Text">
                            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
                        </Row>
                        <Row className="D-Post-Date">
                            <p>Nov 29th, 2022</p>
                        </Row>
                    </Row>
                </Row>
            </div>
        {/* ))} */}
    </div>
  );
};

export default UserFeelings;