import './App.css';
import './styles.css';

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';


function App() {

    const [loading, setLoading] = useState(true);
    const [persInfo, setPersInfo] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setPersInfo(response.data);
                setTimeout(()=>{setLoading(false);},3000);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (

        <>
            {loading === true ? (
                <LoadingScreen />
            ) : (
                <ul>
                    {
                        persInfo.map(persInfo =>
                            <div className='card' key={persInfo.id}>
                                <img className='resize' src={'https://avatars.dicebear.com/v2/avataaars/' + persInfo.username + '.svg?options[mood][]=happy'}></img>
                                <div className='info'>
                                    <h2 >{persInfo.name}</h2>
                                    <p><strong>Email:</strong> {persInfo.email}</p>
                                    <p><strong>Phone:</strong> {persInfo.phone}</p>
                                    <p><strong>Company:</strong> {persInfo.company.name}</p>
                                    <p><strong>Website:</strong> {persInfo.website}</p>
                                    <p><strong>Address:</strong> {persInfo.address.street}, {persInfo.address.suite}, {persInfo.address.city}, {persInfo.address.zipcode}</p>
                                </div>
                            </div>)
                    }
                </ul>

            )}
        </>
    );
}

export default App;