import React, { useState, useEffect } from 'react';

import { Row } from 'antd';
import 'antd/dist/antd.css';
import { getUser } from '../../services/getUser';
import UserInfo from '../UserInfo/UserInfo';
import Loader from '../Loader/Loader';

type allUsersType = {
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
        }
    }
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}[]
type userType = {
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
        }
    }
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}



const LoadMainPage = () => {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState<allUsersType>([]);
    const link = 'https://jsonplaceholder.typicode.com/users';
    
    const handleDelete = (id:number) => {
        const newList = users.filter((item:userType) => item.id !== id);
        setUsers(newList);
     localStorage.setItem('users', JSON.stringify(newList));

    };
    const handleFavorite = (id:number,value:boolean) => {
        const index = users.findIndex((element: { id: number; }) => element.id === id)
        console.log('value from parent',value);
        users[index].favorite = value;
        setUsers(users);
        localStorage.setItem('users', JSON.stringify(users));
    };
    const updateUser = (id:number, values:userType) => {
        const index = users.findIndex((element: { id: number; }) => element.id === id, values);
        users[index] = values;
        const usersAfterEdit = [...users];
        setUsers(usersAfterEdit);
        //save user to local storage
        localStorage.setItem('users', JSON.stringify(usersAfterEdit));
    };

    useEffect(() => {
        const setValues = async () => {
            const response = await getUser(link);
            const usersWithFavorite = response.map((item: { favorite: boolean; }) => {
                item.favorite = false;
                return item;
            });
            setUsers(usersWithFavorite);
            setLoading(false);
        };
        if (localStorage.getItem('users') === null||localStorage.getItem('users') === '[]') {
            setValues();
        } else {
            const usersFromLocalStorage = JSON.parse(localStorage.getItem('users') || '{}');
            setUsers(usersFromLocalStorage);
            setLoading(false);
        }
        

    }, []);
 
    
    return (
        <>
            {isLoading === true
                ? (
                    <Loader />
                ) : (

                    <Row>
                     {users.map((row : userType) => <UserInfo handleFavorite={ handleFavorite } updateUser={ updateUser } handleDelete={ handleDelete } user= {row}  />)} 
                    </Row>
                    
                )}
        </>
    );
};

export default LoadMainPage;

