import React from "react";
import { useState } from "react";
import { Card, Modal, Form, Input } from "antd";
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
} from "./UserInfo.styles";

type UserInfoProps = {
	updateUser: (id: number, values: any) => void;
	handleDelete: (id: number) => void;
	handleFavorite: (id: number, value: boolean) => void;
	user: any;
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
			<Modal
				title='Edit Contact'
				visible={isModalVisible}
				onCancel={handleCancel}
				onOk={onOK}
			>
				<Form form={form}>
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
				</Form>
			</Modal>

			<Card
				style={{ margin: 15, left: 50 }}
				cover={
					<AvatarImg
						alt='Avatar'
						src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
					/>
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
				<h3>{user.name}</h3>
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
			</Card>
		</>
	);
};

export default UserInfo;
