import React, { useState, useEffect } from 'react';
import '../styles.css';
import LoadingScreen from './LoadingScreen';
import { fetchUsers } from '../actions/fetchUsers.js';
import { UserInfo } from './UserInfo.js';

const LoadMainPage = () => {
    const [isLoading, setLoading] = useState(true);
    const [personalInfo, setPersInfo] = useState([]);

    useEffect(async () => {
        const link = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetchUsers(link);
        setPersInfo(response);
        setLoading(false);
    }, []);

    return (
        <>
            {isLoading === true
                ? (
                    <LoadingScreen />
                ) : (
                    personalInfo.map(row => UserInfo(row))
                )}
        </>
    );
};

export default LoadMainPage;