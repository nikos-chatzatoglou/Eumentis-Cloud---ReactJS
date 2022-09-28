import React, { useState, useEffect } from 'react';

import { Row } from 'antd';
import 'antd/dist/antd.css';
import { getUser } from '../../services/getUser';
import LoadingScreen from '../LoadingScreen';
import UserInfo from '../UserInfo/UserInfo';

const LoadMainPage = () => {

    const [isLoading, setLoading] = useState(true);
    const [personalInfo, setPersonalInfo] = useState<any>([]);
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
                    <div>Hello Loader</div>
                ) : (

                    <Row>
                        {personalInfo.map(row => <UserInfo  updateUser={updateUser} handleDelete={handleDelete} {...row} />)}
                    </Row>




                )}
        </>
    );
};

export default LoadMainPage;

