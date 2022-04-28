import './App.css';
import './styles.css';

import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';
import { fetchUsers } from './actions/fetchUsers.js';
import { userInfo } from './components/userInfo.js';

function App() {

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
                    personalInfo.map(row => userInfo(row))
                )}
        </>
    );
}

export default App;