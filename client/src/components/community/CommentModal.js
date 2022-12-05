import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import '../../utils/css/CommentModal.css';

const showModal = () => {
  console.log('hi');
};

const CommentModal = () => {
  return (
    <>
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <Link className="openModal" onClick={() => showModal()}>
            Add comment
          </Link>
          <Form>
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
