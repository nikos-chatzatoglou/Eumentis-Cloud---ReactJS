import { Row } from "antd";
import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserInfo from "../../components/ContactsInfo/ContactsInfo";
import { getContact } from "../../services/getContact";
import {
	StyledButton,
	Wrapper,
	Text,
	Container,
	SocialMsg,
	Info,
} from "./Contacts.styles";
import AddNewContactForm from "../../components/AddNewContactForm/AddNewContactForm";

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

const Contacts = () => {
	const [isLoading, setLoading] = useState(true);
	const [contacts, setContacts] = useState<contactType[]>([]);
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
		// update the favorite status of the contact
		const newList = [...contacts];
		newList[index].favorite = value;
		setContacts(newList);
		localStorage.setItem("contacts", JSON.stringify(newList));
		console.log("favorite", contacts[index]);
	};
	const updateContact = (id: number, values: contactType) => {
		console.log("values", values);
		const index = contacts.findIndex(
			(element: { id: number }) => element.id === id,
			values
		);

		const newList = [...contacts];
		newList[index] = Object.assign(
			{},
			values,
			{ favorite: contacts[index].favorite },
			{ id: contacts[index].id }
		);
		setContacts(newList);
		localStorage.setItem("contacts", JSON.stringify(newList));
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

	const showAddContactModal = (values: contactType) => {
		console.log("Received values of form: ", values);
		setIsModalVisible(false);
		addContact(values);
	};

	const addContact = (newContact: contactType) => {
		const usersAfterAdd = [...contacts, newContact];
		setContacts(usersAfterAdd);
		localStorage.setItem("contacts", JSON.stringify(usersAfterAdd));
	};

	return (
		<>
			{isLoading === true ? (
				<Loader />
			) : (
				<Container>
					<Wrapper>
						<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
						<StyledButton
							type='primary'
							size='small'
							block={true}
							onClick={() => {
								setIsModalVisible(true);
							}}
						>
							Add Contact
						</StyledButton>

						{/* have to find a solution for responsive
						<Info
							onClick={() => {
								console.log("show status message");
							}}
						></Info> */}
					</Wrapper>

					<AddNewContactForm
						visible={isModalVisible}
						showAddContactModal={showAddContactModal}
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
				</Container>
			)}
		</>
	);
};

export default Contacts;
