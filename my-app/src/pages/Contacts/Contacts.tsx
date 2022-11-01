import { Row } from "antd";
import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserInfo from "../../components/ContactsInfo/ContactsInfo";
import { getContact } from "../../services/getContact";

export type contactType = {
	favorite: boolean;
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};
type allContactType = Array<contactType>;

const Contacts = () => {
	const [isLoading, setLoading] = useState(true);
	const [users, setUsers] = useState<allContactType>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const link = "https://jsonplaceholder.typicode.com/users";

	const handleDelete = (id: number) => {
		const newList = users.filter((item: contactType) => item.id !== id);
		setUsers(newList);
		localStorage.setItem("users", JSON.stringify(newList));
	};
	const handleFavorite = (id: number, value: boolean) => {
		const index = users.findIndex(
			(element: { id: number }) => element.id === id
		);
		users[index].favorite = value;
		setUsers(users);
		localStorage.setItem("users", JSON.stringify(users));
	};
	const updateContact = (id: number, values: contactType) => {
		const index = users.findIndex(
			(element: { id: number }) => element.id === id,
			values
		);
		users[index] = values;
		const usersAfterEdit = [...users];
		setUsers(usersAfterEdit);
		localStorage.setItem("users", JSON.stringify(usersAfterEdit));
	};

	useEffect(() => {
		const setValues = async () => {
			const response = await getContact(link);
			//Below i append favorite property to each contact
			const usersWithFavorite = response.map((item: { favorite: boolean }) => {
				item.favorite = false;
				return item;
			});
			setUsers(usersWithFavorite);
			setLoading(false);
		};
		if (
			localStorage.getItem("users") === null ||
			localStorage.getItem("users") === "[]"
		) {
			setValues();
		} else {
			const usersFromLocalStorage = JSON.parse(
				localStorage.getItem("users") || "{}"
			);
			setUsers(usersFromLocalStorage);
			setLoading(false);
		}
	}, []);

	return (
		<>
			{isLoading === true ? (
				<Loader />
			) : (
				<>
					<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					<Row>
						{users
							.filter((users) => {
								if (searchTerm === "") {
									return users;
								} else if (
									users.name.toLowerCase().includes(searchTerm.toLowerCase())
								) {
									return users;
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
