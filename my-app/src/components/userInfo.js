
import React from 'react';
export function userInfo(props) {
    return (
        <div className='card' key={props.id}>
            <img className='resize' src={'https://avatars.dicebear.com/v2/avataaars/' + props.username + '.svg?options[mood][]=happy'}></img>
            <div className='info'>
                <h2 >{props.name}</h2>
                <p><strong>Email:</strong> {props.email}</p>
                <p><strong>Phone:</strong> {props.phone}</p>
                <p><strong>Company:</strong> {props.company.name}</p>
                <p><strong>Website:</strong> {props.website}</p>
                <p><strong>Address:</strong> {props.address.street}, {props.address.suite}, {props.address.city}, {props.address.zipcode}</p>
            </div>
        </div>
    );
};




