
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Card, Modal, Form, Input } from 'antd';
import { HeartFilled, HeartOutlined, EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export function UserInfo(props) {

  const id = props.id;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [toggleLove, setStatus] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onOK = () => {
    form
      .validateFields()
      .then((values) => {
        form.setFieldsValue();
        props.updateUser(id, values);

      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>

      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} onOk={onOK}>
        <Form form={form}>
          <Form.Item initialValue={props.name} label="Name" name="name"
            rules={[{ required: true, message: 'This field is required!' }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={props.email} label="Email" name="email"
            rules={[{ required: true, message: 'This field is required!' }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={props.phone} label="Phone" name="phone"
            rules={[{ required: false }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={props.website} label="Website" name="website"
            rules={[{ required: true, message: 'This field is required!' }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={props.username} name="username"></Form.Item>
        </Form>
      </Modal>

      <Card
        style={{ margin: 15, left: 50 }}
        cover={
          <AvatarImg
            alt="Avatar"
            src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
          />
        }

        actions={[
          <CardButton onClick={() => setStatus(!toggleLove)}>{toggleLove ? <HeartFilled style={{ color: '#FF0000' }} /> : <HeartOutlined style={{ color: '#FF0000' }} />} </CardButton>,
          <CardButton onClick={showModal}><EditOutlined /> </CardButton>,
          <CardButton onClick={() => { props.handleDelete(id); }} > <DeleteFilled /> </CardButton>

        ]}
      >
        <h3>{props.name}</h3>
        <UserInfoWrapper >
          <MailOutlined />
          <UserDetailInfo>{props.email}</UserDetailInfo>
        </UserInfoWrapper>
        <UserInfoWrapper >
          <PhoneOutlined />
          <UserDetailInfo>{props.phone}</UserDetailInfo>
        </UserInfoWrapper>
        <UserInfoWrapper >
          <GlobalOutlined />
          <UserDetailInfo>{props.website}</UserDetailInfo>
        </UserInfoWrapper>

      </Card>

    </>

  );

};


const UserDetailInfo = styled.p`
  margin-left: 10px;
`;
const UserInfoWrapper = styled.div`
  display: flex; 
  flex-direction: row; 
  `;
const CardButton = styled.button`
   background: none;
   border: none;
  
  `;
const AvatarImg = styled.img`
  width: 400px;
  height: 200px;
  `;