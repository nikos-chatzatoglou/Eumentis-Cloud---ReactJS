import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import { getUser } from '../services/getUser.js';
import { UserInfo } from './UserInfo.js';
import { Row } from 'antd';
import 'antd/dist/antd.css';



const LoadMainPage = () => {
    const [isLoading, setLoading] = useState(true);
    const [personalInfo, setPersonalInfo] = useState([]);
    const link = 'https://jsonplaceholder.typicode.com/users';
    const handleDelete = (id) => {
        const newList = personalInfo.filter((item) => item.id !== id);
        setPersonalInfo(newList);
    };

    const updateUser = (id, values) => {
        const index = personalInfo.findIndex(element => element.id === id, values);
        personalInfo[index] = values;
        const personalInfoAfterEdit = [...personalInfo];
        setPersonalInfo(personalInfoAfterEdit);




    };
    useEffect(() => {
        const setValues = async () => {
            const response = await getUser(link);
            setPersonalInfo(response);
            setLoading(false);
            console.log(response);
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
                        {personalInfo.map(row => <UserInfo updateUser={updateUser} handleDelete={handleDelete} {...row}> </UserInfo>)}
                    </Row>




                )}
        </>
    );
};

export default LoadMainPage;

