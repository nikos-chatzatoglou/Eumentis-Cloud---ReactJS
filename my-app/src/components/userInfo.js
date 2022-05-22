
import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal, Form, Input } from 'antd';
import { HeartFilled, HeartOutlined, EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export function UserInfo(props) {
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
            rules={[{ required: true, message: 'This field is required!' }]}
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
          <div>
            <img
              alt="Avatar"
              src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
              style={{ width: 400, height: 200 }} z
            />
          </div>
        }

        actions={[
          <Button style={{ background: 'none', border: 'none' }} onClick={() => setStatus(!toggleLove)}>{toggleLove ? <HeartFilled style={{ color: '#FF0000' }} /> : <HeartOutlined style={{ color: '#FF0000' }} />}` </Button>,
          <Button style={{ background: 'none', border: 'none' }} icon={<EditOutlined />} onClick={showModal} />,
          <Button style={{ background: 'none', border: 'none' }} icon={<DeleteFilled />} />
        ]}
      >
        <h3>{props.name}</h3>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <MailOutlined />
          <p style={{ marginLeft: 10 }}>{props.email}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <PhoneOutlined />
          <p style={{ marginLeft: 10 }}>{props.phone}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <GlobalOutlined />
          <p style={{ marginLeft: 10 }}>{props.website}</p>
        </div>
      </Card>

    </>

  );
};

