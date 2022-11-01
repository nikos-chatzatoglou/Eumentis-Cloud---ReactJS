import React from "react";
import { useState } from "react";
import { Form, Input } from "antd";
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
	UserInfoWrapper,
	UserDetailInfo,
	UserInfoContainer,
	ContactsCard,
	StyledDivider,
	StyledModal,
	StyledForm,
} from "./ContactsInfo.styles";
import { contactType } from "../../pages/Contacts/Contacts";

type UserInfoProps = {
	updateContact: (id: number, values: any) => void;
	handleDelete: (id: number) => void;
	handleFavorite: (id: number, value: boolean) => void;
	contact: contactType;
};

const UserInfo = ({
	updateContact,
	handleDelete,
	handleFavorite,
	contact,
}: UserInfoProps) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [form] = Form.useForm();
	const [favoriteStatus, setFavoriteStatus] = useState(contact.favorite);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const onOK = () => {
		form
			.validateFields()
			.then((values) => {
				form.setFieldsValue(values);
				updateContact(contact.id, values);
			})
			.catch((info) => {
				console.log("Validate Failed:", info);
			});
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleLove = () => {
		handleFavorite(contact.id, !favoriteStatus);
		setFavoriteStatus(!favoriteStatus);
	};

	return (
		<>
			<StyledModal
				title='Edit Contact'
				visible={isModalVisible}
				onCancel={handleCancel}
				onOk={onOK}
			>
				<StyledForm form={form} layout='vertical'>
					<Form.Item
						initialValue={contact.name}
						label='Name'
						name='name'
						rules={[{ required: true, message: "This field is required!" }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						initialValue={contact.email}
						label='Email'
						name='email'
						rules={[{ required: true, message: "This field is required!" }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						initialValue={contact.phone}
						label='Phone'
						name='phone'
						rules={[{ required: false }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						initialValue={contact.website}
						label='Website'
						name='website'
						rules={[{ message: "This field is required!" }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						initialValue={contact.username}
						name='username'
					></Form.Item>
				</StyledForm>
			</StyledModal>

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
				<UserInfoContainer>
					<UserInfoWrapper>
						<MailOutlined />
						<UserDetailInfo>{contact.email}</UserDetailInfo>
					</UserInfoWrapper>
					<UserInfoWrapper>
						<PhoneOutlined />
						{contact.phone ? (
							<UserDetailInfo>{contact.phone}</UserDetailInfo>
						) : (
							<UserDetailInfo>Not Available</UserDetailInfo>
						)}
					</UserInfoWrapper>
					<UserInfoWrapper>
						<GlobalOutlined />
						{contact.website ? (
							<UserDetailInfo>{contact.website}</UserDetailInfo>
						) : (
							<UserDetailInfo>Not Available</UserDetailInfo>
						)}
					</UserInfoWrapper>
				</UserInfoContainer>
			</ContactsCard>
		</>
	);
};

export default UserInfo;
