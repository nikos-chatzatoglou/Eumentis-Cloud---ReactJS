
import React from 'react';
import { useState } from 'react';
import { Card, Modal, Form, Input } from 'antd';
import { HeartFilled, HeartOutlined, EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { AvatarImg, CardButton, UserInfoWrapper, UserDetailInfo } from './UserInfo.styles';

type UserInfoProps = {
    updateUser: (id: number, values: any) => void;
    handleDelete: (id: number) => void;
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {

        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {

            lat: string;
            lng: string;
        }
    }
    company: {

        name: string;
        catchPhrase: string;
        bs: string; 
    }
}

const UserInfo =({
        updateUser,
        handleDelete,
        id,
        name,
        username,
        email,
        phone,
        website,
        address: {
            street,
            suite,
            city,
            zipcode,
            geo: {
                lat,
                lng
            }
        },
        company: {
            name: companyName,
            catchPhrase,
            bs
        }
    }: UserInfoProps
) => {
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
        form.setFieldsValue(values);
       updateUser(id, values);

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
          <Form.Item initialValue={name} label="Name" name="name"
            rules={[{ required: true, message: 'This field is required!' }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={email} label="Email" name="email"
            rules={[{ required: true, message: 'This field is required!' }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={phone} label="Phone" name="phone"
            rules={[{ required: false }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={website} label="Website" name="website"
            rules={[{ required: true, message: 'This field is required!' }]}
          >
            <Input ></Input>
          </Form.Item>
          <Form.Item initialValue={username} name="username"></Form.Item>
        </Form>
      </Modal>

      <Card
        style={{ margin: 15, left: 50 }}
        cover={
          <AvatarImg
            alt="Avatar"
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
          />
        }

        actions={[
          <CardButton onClick={() => setStatus(!toggleLove)}>{toggleLove ? <HeartFilled style={{ color: '#FF0000' }} /> : <HeartOutlined style={{ color: '#FF0000' }} />} </CardButton>,
          <CardButton onClick={showModal}><EditOutlined /> </CardButton>,
          <CardButton onClick={() => {handleDelete(id); }} > <DeleteFilled /> </CardButton>

        ]}
      >
        <h3>{name}</h3>
        <UserInfoWrapper >
          <MailOutlined />
          <UserDetailInfo>{email}</UserDetailInfo>
        </UserInfoWrapper>
        <UserInfoWrapper >
          <PhoneOutlined />
          <UserDetailInfo>{phone}</UserDetailInfo>
        </UserInfoWrapper>
        <UserInfoWrapper >
          <GlobalOutlined />
          <UserDetailInfo>{website}</UserDetailInfo>
        </UserInfoWrapper>

      </Card>

    </>

  );

};

export default UserInfo;

