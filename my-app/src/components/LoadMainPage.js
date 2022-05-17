import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import { getUser } from '../services/getUser.js';
import { UserInfo } from './UserInfo.js';

import { Row } from 'antd';
import 'antd/dist/antd.css';



const LoadMainPage = () => {
    const [isLoading, setLoading] = useState(true);
    const [personalInfo, setPersInfo] = useState([]);
    const link = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        const setValues = async () => {
            const response = await getUser(link);
            setPersInfo(response);
            setLoading(false);
        };
        setValues();
    }, []);

    return (
        <>
            {isLoading === true
                ? (
                    <LoadingScreen />
                ) : (

                    <Row>
                        {personalInfo.map(row => <UserInfo {...row}> </UserInfo>)}
                    </Row>




                )}
        </>
    );
};

export default LoadMainPage;

