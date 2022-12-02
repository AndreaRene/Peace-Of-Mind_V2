import React, { useState } from 'react';
import { Modal, Form, Input, Button, Layout } from 'antd';
import { stringify } from 'rc-field-form/es/useWatch';
import { formatCountdown } from 'antd/es/statistic/utils';

function CreateModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = ({openPost}) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  

  return (
      <Modal 
        title="New Feeling"
        okText="Create"
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        width={1000}
      >
        <Form 
          layout='vertical'
          name='post-form'
          initialValues={{ modifier: 'public'}}
        >
          <Form.Item 
            name="Feeling Title"
            label="Feeling Title"
            rules={[{ required: true, message: 'Please enter a title for this post!'}]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item 
            name={['post', 'textbody']} 
            label='Feeling Body Text'
            rules={[{ required: true, message: 'Please enter what you are feeling!'}]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
  );
};


export default CreateModal;