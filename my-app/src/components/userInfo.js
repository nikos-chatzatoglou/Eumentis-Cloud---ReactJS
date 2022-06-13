
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Card, Button, Modal, Form, Input } from 'antd';
import { HeartFilled, HeartOutlined, EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export function UserInfo(props) {

  const id = props.id;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [toggleLove, setStatus] = useState(false);

  const Paragraph = styled.p`
  margin-left: 10px;
`;
  const StyledDiv = styled.div`
  display: flex; 
  flex-direction: row; 
  `;
  const StyledButton = styled.button`
   background: none;
   border: none;
  
  `;
  const StyledAvatarImg = styled.img`
  width: 400px;
  height: 200px;
  `;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const onOK = () => {
    form
      .validateFields()
      .then((values) => {
        form.setFieldsValue();
        onCreate(values);

      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
    console.log("from OK");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    console.log("from Cancel");
    setIsModalVisible(false);
  };

  const onCreate = (values) => {
    console.log("Received values of form: ", values);

    setIsModalVisible(false);
  };

  return (
    <>

      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} onOk={onOK}>
        <Form form={form}>
          <Form.Item initialValue={props.name} label="Name" name="Name"
            rules={[{ required: true, message: 'This field is required!' }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={props.email} label="Email" name="Email"
            rules={[{ required: true, message: 'This field is required!' }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={props.phone} label="Phone" name="Phone"
            rules={[{ required: false }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={props.website} label="Website" name="Website"
            rules={[{ required: true, message: 'This field is required!' }]}
          >
            <Input ></Input>
          </Form.Item>
        </Form>
      </Modal>

      <Card
        style={{ margin: 15 }}
        cover={
          <StyledAvatarImg
            alt="Avatar"
            src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
          />
        }

        actions={[
          <StyledButton onClick={() => setStatus(!toggleLove)}>{toggleLove ? <HeartFilled style={{ color: '#FF0000' }} /> : <HeartOutlined style={{ color: '#FF0000' }} />} </StyledButton>,
          <StyledButton onClick={showModal}><EditOutlined /> </StyledButton>,
          <StyledButton onClick={() => { props.handleDelete(id); }} > <DeleteFilled /> </StyledButton>

        ]}
      >
        <h3>{props.name}</h3>
        <StyledDiv >
          <MailOutlined />
          <Paragraph>{props.email}</Paragraph>
        </StyledDiv>
        <StyledDiv >
          <PhoneOutlined />
          <Paragraph>{props.phone}</Paragraph>
        </StyledDiv>
        <StyledDiv >
          <GlobalOutlined />
          <Paragraph>{props.website}</Paragraph>
        </StyledDiv>

      </Card>

    </>

  );
};

