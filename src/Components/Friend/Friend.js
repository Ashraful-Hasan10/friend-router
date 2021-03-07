import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
const {name, email, id} = props.friend;
const history = useHistory();
const handleClick = (friendId) => {
    history.push(`/friend/${friendId}`);
}

    return (
        <div className="friendStyle" >
            <h2>Name: {name} </h2>
            <p> E-mail: {email} </p>
            <p>ID : <Link to = {`/friend/${id}`}> Show Details of {id} </Link></p>
            <button onClick= { () => handleClick(id)}>
                Click me
            </button>
        </div>
    );
};

export default Friend;