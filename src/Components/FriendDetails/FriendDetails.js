import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <p>Friend Details: {friendId} </p>
            <h1>{friend.name}</h1>
            <h2>E-mail: {friend.email}</h2>
            <h3>Website : {friend.website}</h3>

        </div>
    );
};

export default FriendDetails;