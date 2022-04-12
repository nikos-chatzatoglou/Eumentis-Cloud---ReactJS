import './App.css';
import './styles.css';

import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';
import { getResponse } from './fetchData.js';
import { userInfo } from './components/userInfo.js';

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
                    personalInfo.map(row => userInfo(row)
                    )
                )}
        </>
    );
}

export default App;