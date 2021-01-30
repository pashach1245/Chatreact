import React, {useState} from 'react';
import './Join.css';
import {NavLink} from "react-router-dom";

function Join(props) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="wrapper">
            <div className="form-signin">
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" className="form-control input__text" name="username" placeholder="Username"
                       value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <input type="text" className="form-control input__room" name="room" placeholder="Room"
                       value={room} onChange={(e) => {
                    setRoom(e.target.value)
                }}/>
                <NavLink onClick={(e) => (name && room) ? null : e.preventDefault()    } to={`/chat?name=${name}&room=${room}`}>
                    <button className="btn btn-lg btn-primary btn-block">Enter</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Join;