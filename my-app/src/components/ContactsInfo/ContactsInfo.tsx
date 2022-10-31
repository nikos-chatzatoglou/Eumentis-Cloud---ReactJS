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
import { userType } from "../../pages/Contacts/Contacts";

type UserInfoProps = {
	updateUser: (id: number, values: any) => void;
	handleDelete: (id: number) => void;
	handleFavorite: (id: number, value: boolean) => void;
	user: userType;
};

const UserInfo = ({
	updateUser,
	handleDelete,
	handleFavorite,
	user,
}: UserInfoProps) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [form] = Form.useForm();
	const [favoriteStatus, setFavoriteStatus] = useState(user.favorite);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const onOK = () => {
		form
			.validateFields()
			.then((values) => {
				form.setFieldsValue(values);
				updateUser(user.id, values);
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
		handleFavorite(user.id, !favoriteStatus);
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
						initialValue={user.name}
						label='Name'
						name='name'
						rules={[{ required: true, message: "This field is required!" }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						initialValue={user.email}
						label='Email'
						name='email'
						rules={[{ required: true, message: "This field is required!" }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						initialValue={user.phone}
						label='Phone'
						name='phone'
						rules={[{ required: false }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						initialValue={user.website}
						label='Website'
						name='website'
						rules={[{ message: "This field is required!" }]}
					>
						<Input />
					</Form.Item>
					<Form.Item initialValue={user.username} name='username'></Form.Item>
				</StyledForm>
			</StyledModal>

			<ContactsCard
				style={{ margin: 15, left: 50 }}
				hoverable
				cover={
					<>
						<AvatarImg
							alt='Avatar'
							src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
						/>
						<StyledDivider plain>{user.name}</StyledDivider>
					</>
				}
				actions={[
					<CardButton onClick={handleLove}>
						{user.favorite ? (
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
							handleDelete(user.id);
						}}
					>
						<DeleteFilled />
					</CardButton>,
				]}
			>
				<UserInfoContainer>
					<UserInfoWrapper>
						<MailOutlined />
						<UserDetailInfo>{user.email}</UserDetailInfo>
					</UserInfoWrapper>
					<UserInfoWrapper>
						<PhoneOutlined />
						{user.phone ? (
							<UserDetailInfo>{user.phone}</UserDetailInfo>
						) : (
							<UserDetailInfo>Not Available</UserDetailInfo>
						)}
					</UserInfoWrapper>
					<UserInfoWrapper>
						<GlobalOutlined />
						{user.website ? (
							<UserDetailInfo>{user.website}</UserDetailInfo>
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
