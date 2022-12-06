import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import '../../utils/css/CommentModal.css';
import { SaveSvg } from '../../assets/icons/community-svgs';

const showModal = () => {
  console.log('hi');
};

const hideModal = () => {
  console.log('yo');
};

const CommentModal = () => {
  return (
    <>
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <div className="modal-header">
            <Link className="openModal" onClick={() => showModal()}></Link>
            Share your thoughts:
            <Link className="saveIcon" onClick={() => hideModal()}>
              <SaveSvg />
            </Link>
          </div>
          <Form className="comment-form">
            <Form.Item name="commentText">
              <Input.TextArea rows={3} />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CommentModal;
