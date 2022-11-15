import { Form, Input, Modal, Row } from "antd";
import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserInfo from "../../components/ContactsInfo/ContactsInfo";
import { getContact } from "../../services/getContact";
import { StyledButton, Wrapper, Text } from "./Contacts.styles";

export type contactType = {
	favorite: boolean;
	id: number;
	name: string;
	username: string;
	email: string;
	phone?: string;
	website?: string;
	address?: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	company?: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};
type allContactType = Array<contactType>;

const AddNewContactForm = ({ visible, onCreate, onCancel, contacts }: any) => {
	const [form] = Form.useForm();
	const [idCounter, setIdCounter] = useState(contacts.length + 1);

	return (
		<Modal
			visible={visible}
			title='Create new Contact'
			okText='Create'
			cancelText='Cancel'
			onCancel={onCancel}
			onOk={() => {
				setIdCounter(idCounter + 1);

				form
					.validateFields()
					.then((values) => {
						form.resetFields();
						onCreate(values);
					})
					.catch((info) => {
						console.log("Validate Failed:", info);
					});
			}}
		>
			<Form
				form={form}
				layout='vertical'
				name='New Contact'
				initialValues={{
					modifier: "public",
				}}
			>
				<Form.Item
					label='Username'
					name='username'
					rules={[{ required: true, message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Name'
					name='name'
					rules={[{ required: true, message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Email'
					name='email'
					rules={[{ required: true, message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item label='Phone' name='phone' rules={[{ required: false }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label='Website'
					name='website'
					rules={[{ message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name='username'></Form.Item>
				<Form.Item
					name='modifier'
					className='collection-create-form_last-form-item'
				></Form.Item>
				<Form.Item name='id' initialValue={idCounter}></Form.Item>
				<Form.Item name='favorite' initialValue={false}></Form.Item>
			</Form>
		</Modal>
	);
};

const Contacts = () => {
	const [isLoading, setLoading] = useState(true);
	const [contacts, setContacts] = useState<allContactType>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const link = "https://jsonplaceholder.typicode.com/users";
	const [isModalVisible, setIsModalVisible] = useState(false);
	const handleDelete = (id: number) => {
		const newList = contacts.filter((item: contactType) => item.id !== id);
		setContacts(newList);
		localStorage.setItem("contacts", JSON.stringify(newList));
	};
	const handleFavorite = (id: number, value: boolean) => {
		const index = contacts.findIndex(
			(element: { id: number }) => element.id === id
		);
		contacts[index].favorite = value;
		setContacts(contacts);
		localStorage.setItem("contacts", JSON.stringify(contacts));
	};
	const updateContact = (id: number, values: contactType) => {
		const index = contacts.findIndex(
			(element: { id: number }) => element.id === id,
			values
		);
		contacts[index] = values;
		const usersAfterEdit = [...contacts];
		setContacts(usersAfterEdit);
		localStorage.setItem("contacts", JSON.stringify(usersAfterEdit));
	};

	useEffect(() => {
		const setValues = async () => {
			const response = await getContact(link);
			//Below i append favorite property to each contact
			const usersWithFavorite = response.map((item: { favorite: boolean }) => {
				item.favorite = false;
				return item;
			});
			setContacts(usersWithFavorite);
			setLoading(false);
		};
		if (
			localStorage.getItem("contacts") === null ||
			localStorage.getItem("contacts") === "[]"
		) {
			setValues();
		} else {
			const usersFromLocalStorage = JSON.parse(
				localStorage.getItem("contacts") || "{}"
			);
			setContacts(usersFromLocalStorage);
			setLoading(false);
		}
	}, []);

	const onCreate = (values: contactType) => {
		console.log("Received values of form: ", values);
		setIsModalVisible(false);
		AddContact(values);
	};

	const AddContact = (newContact: contactType) => {
		const usersAfterAdd = [...contacts, newContact];
		setContacts(usersAfterAdd);
		localStorage.setItem("contacts", JSON.stringify(usersAfterAdd));
	};

	return (
		<>
			{isLoading === true ? (
				<Loader />
			) : (
				<>
					<Wrapper>
						<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
						<Text>You have {contacts.length} Contacts</Text>
					</Wrapper>

					<StyledButton
						type='primary'
						onClick={() => {
							setIsModalVisible(true);
						}}
					>
						Add Contact
					</StyledButton>

					<AddNewContactForm
						visible={isModalVisible}
						onCreate={onCreate}
						onCancel={() => {
							setIsModalVisible(false);
						}}
						contacts={contacts}
					/>

					<Row>
						{contacts
							.filter((contacts) => {
								if (searchTerm === "") {
									return contacts;
								} else if (
									contacts.name.toLowerCase().includes(searchTerm.toLowerCase())
								) {
									return contacts;
								} else {
									return null;
								}
							})
							.map((contact: contactType) => (
								<UserInfo
									key={contact.id}
									contact={contact}
									handleDelete={handleDelete}
									handleFavorite={handleFavorite}
									updateContact={updateContact}
								/>
							))}
					</Row>
				</>
			)}
		</>
	);
};

export default Contacts;
