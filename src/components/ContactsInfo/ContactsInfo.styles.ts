import styled from 'styled-components';
import Card from 'antd/lib/card/Card';
import { Divider } from 'antd';

export const ContactsCard  = styled(Card)`
margin: 5px !important;
border-radius: 5px;
cursor:auto;
@media only screen and (max-width: 768px) {
left: 0px !important;
	}
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactDetailInfo = styled.p`
  margin-left: 10px;
`;

export const ContactInfoWrapper = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: baseline;
  `;

export const CardButton = styled.button`
   background: none;
   border-radius: 10px;
   border: none;
   cursor: pointer;
  `;

export const AvatarImg = styled.img`
  width: 400px;
  height: 200px;
  `;


export const StyledDivider= styled(Divider)`
font-weight: 500 !important;;
font-size: 24px !important;
`;

