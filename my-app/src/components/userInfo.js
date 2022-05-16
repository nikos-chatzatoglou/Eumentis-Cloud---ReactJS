
import React from 'react';
import { useState, useEffect } from 'react';

import { Card, Button, Modal, Form, Input } from 'antd';
import { HeartOutlined, EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';


export function UserInfo(props) {

  return (
    <>
      <Card
        style={{ margin: 15 }}
        cover={
          <div>
            <img
              alt="Avatar"
              src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
              style={{ width: 400, height: 200 }}
            />
          </div>
        }
        actions={[
          <Button style={{ background: 'none', border: 'none' }} icon={<HeartOutlined style={{ color: '#FF0000', fontSize: 20 }} />} />,
          <Button style={{ background: 'none', border: 'none' }} icon={<EditOutlined />} />,
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