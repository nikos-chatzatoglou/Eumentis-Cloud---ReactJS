import React, { useState, useEffect } from 'react';

import { Row } from 'antd';
import 'antd/dist/antd.css';
import { getUser } from '../../services/getUser';
import UserInfo from '../UserInfo/UserInfo';
import Loader from '../Loader/Loader';

type allUsersType = {
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
    };

    const updateUser = (id:number, values:userType) => {
        const index = users.findIndex((element: { id: number; }) => element.id === id, values);
        users[index] = values;
        console.log(values);
        
        const usersAfterEdit = [...users];
        setUsers(usersAfterEdit);
        //save user to local storage
        localStorage.setItem('users', JSON.stringify(usersAfterEdit));
    };
    useEffect(() => {
        const setValues = async () => {
            const response = await getUser(link);
            setUsers(response);
            setLoading(false);
            console.log(response);
        };
        if (localStorage.getItem('users') === null) {
            setValues();
        } else {
            const usersFromLocalStorage = JSON.parse(localStorage.getItem('users') || '{}');
            setUsers(usersFromLocalStorage);
            setLoading(false);
        }
        

    }, []);
    console.log("Users here",users);
    
    return (
        <>
            {isLoading === true
                ? (
                    <Loader />
                ) : (

                    <Row>
                        {users.map((row : any) => <UserInfo  updateUser={updateUser} handleDelete={handleDelete} {...row} />)}
                    </Row>
                )}
        </>
    );
};

export default LoadMainPage;

