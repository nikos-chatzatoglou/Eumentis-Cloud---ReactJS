import styled from 'styled-components';
import Card from 'antd/lib/card/Card';
import { Divider, Form, Modal } from 'antd';

export const ContactsCard  = styled(Card)`
left: 50px;
border-radius: 5px;
cursor:auto;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UserDetailInfo = styled.p`
  margin-left: 10px;
`;

export const UserInfoWrapper = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: baseline;
  `;

export const CardButton = styled.button`
   background: none;
   border-radius: 10px;
   border: none;
   cursor: pointer;
    /* text-decoration: underline;
    
    font-size: 14px;
    font-weight: 500;
    &:hover {
      color: #0056b3;
    }
    &:focus {
      outline: none;
    } */

  `;

export const AvatarImg = styled.img`
  width: 400px;
  height: 200px;
  `;


export const StyledDivider= styled(Divider)`
font-weight: 500 !important;;
font-size: 24px !important;
color: #000;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 5px;
  }
  .ant-modal-header {
    border-radius: 5px;
  }
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-footer {
    border-radius: 5px;
  }
`;

export const StyledForm = styled(Form)`
  .ant-form-item {
    margin:25px
  }
`;
