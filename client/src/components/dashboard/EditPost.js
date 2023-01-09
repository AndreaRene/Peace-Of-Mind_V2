import React, { useEffect, useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { useMutation } from '@apollo/client';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { ADD_FEELING } from '../../utils/js/mutations';
import { GET_SINGLE_FEELING, GET_ME } from '../../utils/js/queries';

import Auth from '../../utils/js/auth';


function EditModal(props) {
  const [formState, setFormState] = useState({});


  // const { loading, data } = useQuery(GET_SINGLE_FEELING, {
  //   variables: { feelingId: _id },
  // });

  // useEffect(() => {
  //   console.log(data);
  //   if(data){
  //     setFormState({text: data.feelingText, title: data.feelingTitle});
  //   }
  // }, [data]);

  // const feeling = data?.feeling || {};

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

  const handleChange = e => {
      setFormState(e.target.value)
  };

  

  return (
      <Modal 
        title="Edit Feeling"
        okText="Update" 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        width={1000}
      >
        <Form
          layout='vertical'
          initialValues={{ modifier: 'public'}}
        >
          <Form.Item 
            label="Feeling Title"
            rules={[{ required: true, message: 'Please enter a title for this post!'}]}
          >
            <Input
              name='title'
              value={formState.title}
              onChange={handleChange}
            />
          </Form.Item>
          
          <Form.Item 
            label='Feeling Body Text'
            rules={[{ required: true, message: 'Please enter what you are feeling!'}]}
          >
            <Input.TextArea
              name='text'
              value={formState.text}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </Modal>
  );
};


export default EditModal;