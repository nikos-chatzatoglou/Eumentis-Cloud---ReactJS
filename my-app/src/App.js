import './App.css';
import './styles.css';

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';

function App() {

    const [isLoading, setLoading] = useState(true);
    const [personalInfo, setPersInfo] = useState([]);

    async function getResponse() {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setPersInfo(response.data);
            setTimeout(() => { setLoading(false); }, 3000);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        getResponse();

    }, []);


    return (

        <>
            {isLoading === true
                ? (
                    <LoadingScreen />
                ) : (
                    <ul>
                        {
                            personalInfo.map(personalInfo =>
                                <div className='card' key={personalInfo.id}>
                                    <img className='resize' src={'https://avatars.dicebear.com/v2/avataaars/' + personalInfo.username + '.svg?options[mood][]=happy'}></img>
                                    <div className='info'>
                                        <h2 >{personalInfo.name}</h2>
                                        <p><strong>Email:</strong> {personalInfo.email}</p>
                                        <p><strong>Phone:</strong> {personalInfo.phone}</p>
                                        <p><strong>Company:</strong> {personalInfo.company.name}</p>
                                        <p><strong>Website:</strong> {personalInfo.website}</p>
                                        <p><strong>Address:</strong> {personalInfo.address.street}, {personalInfo.address.suite}, {personalInfo.address.city}, {personalInfo.address.zipcode}</p>
                                    </div>
                                </div>)
                        }
                    </ul>

                )}
        </>
    );
}

export default App;