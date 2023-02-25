import React from "react";
import { useState } from "react";
import { Form } from "antd";
import {
	HeartFilled,
	HeartOutlined,
	EditOutlined,
	DeleteFilled,
	MailOutlined,
	PhoneOutlined,
	GlobalOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import {
	AvatarImg,
	CardButton,
	ContactInfoWrapper,
	ContactDetailInfo,
	ContactInfoContainer,
	ContactsCard,
	StyledDivider,
} from "./ContactsInfo.styles";
import { contactType } from "../../pages/Contacts/Contacts";
import EditContactForm from "../EditContactForm/EditContactForm";

type ContactInfoProps = {
	updateContact: (id: number, values: any) => void;
	handleDelete: (id: number) => void;
	handleFavorite: (id: number, value: boolean) => void;
	contact: contactType;
};

const ContactInfo = ({
	updateContact,
	handleDelete,
	handleFavorite,
	contact,
}: ContactInfoProps) => {
	const [isEditContactFormVisible, setIsEditContactFormVisible] =
		useState(false);
	const [form] = Form.useForm();
	const [favoriteStatus, setFavoriteStatus] = useState(contact.favorite);

	const showModal = () => {
		setIsEditContactFormVisible(true);
	};
	const hideModal = () => {
		setIsEditContactFormVisible(false);
	};

	const handleCancel = () => {
		setIsEditContactFormVisible(false);
	};

	const handleLove = () => {
		handleFavorite(contact.id, !favoriteStatus);
		setFavoriteStatus(!favoriteStatus);
	};

	return (
		<>
			<EditContactForm
				isEditContactFormVisible={isEditContactFormVisible}
				handleCancel={handleCancel}
				updateContact={updateContact}
				contact={contact}
				hideModal={hideModal}
			/>

			<ContactsCard
				style={{ margin: 15, left: 50 }}
				hoverable
				cover={
					<>
						<AvatarImg
							alt='Avatar'
							src={`https://avatars.dicebear.com/v2/avataaars/${contact.username}.svg?options[mood][]=happy`}
						/>
						<StyledDivider plain>{contact.name}</StyledDivider>
					</>
				}
				actions={[
					<CardButton onClick={handleLove}>
						{contact.favorite ? (
							<HeartFilled style={{ color: "#FF0000" }} />
						) : (
							<HeartOutlined style={{ color: "#FF0000" }} />
						)}
					</CardButton>,
					<CardButton onClick={showModal}>
						<EditOutlined />
					</CardButton>,
					<CardButton
						onClick={() => {
							handleDelete(contact.id);
						}}
					>
						<DeleteFilled />
					</CardButton>,
				]}
			>
				<ContactInfoContainer>
					<ContactInfoWrapper>
						<MailOutlined />
						<ContactDetailInfo>{contact.email}</ContactDetailInfo>
					</ContactInfoWrapper>
					<ContactInfoWrapper>
						<PhoneOutlined />
						{contact.phone ? (
							<ContactDetailInfo>{contact.phone}</ContactDetailInfo>
						) : (
							<ContactDetailInfo>Not Available</ContactDetailInfo>
						)}
					</ContactInfoWrapper>
					<ContactInfoWrapper>
						<GlobalOutlined />
						{contact.website ? (
							<ContactDetailInfo>{contact.website}</ContactDetailInfo>
						) : (
							<ContactDetailInfo>Not Available</ContactDetailInfo>
						)}
					</ContactInfoWrapper>
				</ContactInfoContainer>
			</ContactsCard>
		</>
	);
};

export default ContactInfo;
