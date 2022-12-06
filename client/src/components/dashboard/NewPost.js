import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { useMutation } from '@apollo/client';

import { ADD_FEELING } from '../../utils/js/mutations';
import { GET_FEELINGS, GET_ME } from '../../utils/js/queries';

import Auth from '../../utils/js/auth';

function CreateModal() {
  // Add new feeling calls and functions
  const [feelingTitle, setFeelingTitle] = useState('');
  const [feelingText, setFeelingText] = useState('');
  const [characterCountTitle, setCharacterCountTitle] = useState(0);
  const [characterCountText, setCharacterCountText] = useState(0);

  const [addFeeling, { error }] = useMutation(ADD_FEELING, {
    update(cache, { data: { addFeeling } }) {
      try {
        const { feelings } = cache.readQuery({ query: GET_FEELINGS });

        cache.writeQuery({
          query: GET_FEELINGS,
          data: { feelings: [addFeeling, ...feelings] },
        });
      } catch (e) {
        console.log(e);
      }

      const { me } = cache.readQuery({ query: GET_ME });
      console.log(me);
      // cache.writeQuery({
      //   query: GET_ME,
      //   data: { me: { ...me, feelings: [ ...me.feelings, addFeeling ] } },
      // });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addFeeling({
        variables: {
          feelingTitle,
          feelingText,
          feelingAuthor: Auth.getProfile().data.username,
        },
      });

      setFeelingTitle('');
      setFeelingText('');
      //Auth.loggedIn(data.loggedIn.token);
    } catch (e) {
      console.error(e);
    }

    setIsModalOpen(false);
  };

  const handleChangeTitle = (event) => {
    const { name, value } = event.target;

    if (name === 'feelingTitle' && value.length <= 50) {
      setFeelingTitle(value);
      setCharacterCountTitle(value.length);
    }
  }

  const handleChangeText = (event) => {
    const { name, value } = event.target;

    if (name === 'feelingText' && value.length <= 500) {
      setFeelingText(value);
      setCharacterCountText(value.length);
    }
  };


  // Modal calls and functions
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
        onOk={handleFormSubmit}
        onCancel={handleCancel}
        width={1000}
      >
        <Form 
          layout='vertical'
          name='post-form'
          initialValues={{ modifier: 'public'}}
        >
          <Form.Item
            label="Title"
            rules={[{ required: true, message: 'Please enter a title for this post!'}]}
          >
            <Input
              name="feelingTitle"
              placeholder='Enter a title for your feeling...'
              value={feelingTitle}
              onChange={handleChangeTitle}
            />
            <p>Character Count: {characterCountTitle} / 50</p>
          </Form.Item>
          
          <Form.Item
            label='Feeling Body Text'
            rules={[{ required: true, message: 'Please enter what you are feeling!'}]}
          >
            <Input.TextArea
              name="feelingText"
              placeholder='How are you feeling today?'
              value={feelingText}
              onChange={handleChangeText}
            />
            <p>Character Count: {characterCountText} / 500</p>
          </Form.Item>
        </Form>
      </Modal>
  );
};


export default CreateModal;