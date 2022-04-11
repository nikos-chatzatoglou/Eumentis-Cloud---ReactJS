import './App.css';
import './styles.css';

import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';
import { getResponse } from './fetchData.js';

function App() {

    const [isLoading, setLoading] = useState(true);
    const [personalInfo, setPersInfo] = useState([]);

    setTimeout(() => { setLoading(false); }, 3000);

    useEffect(async () => {
        const response = await getResponse();
        setPersInfo(response);
    }, []);

    return (

        <>
            {isLoading === true
                ? (
                    <LoadingScreen />
                ) : (
                    personalInfo.map(row =>
                        <div className='card' key={row.id}>
                            <img className='resize' src={'https://avatars.dicebear.com/v2/avataaars/' + row.username + '.svg?options[mood][]=happy'}></img>
                            <div className='info'>
                                <h2 >{row.name}</h2>
                                <p><strong>Email:</strong> {row.email}</p>
                                <p><strong>Phone:</strong> {row.phone}</p>
                                <p><strong>Company:</strong> {row.company.name}</p>
                                <p><strong>Website:</strong> {row.website}</p>
                                <p><strong>Address:</strong> {row.address.street}, {row.address.suite}, {row.address.city}, {row.address.zipcode}</p>
                            </div>
                        </div>)
                )}
        </>
    );
}

export default App;