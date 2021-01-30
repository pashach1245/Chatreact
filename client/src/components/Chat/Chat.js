import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

import Users from "./Users";
import Messages from "./Messages";
import Textarea from "./Textarea";

let socket;

function Chat({location}) {
    const ENDPOINT = 'localhost:5000';


    const [name, setName] = useState('');
    // const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket = io(ENDPOINT);

        const {name, room} = queryString.parse(location.search);
        setName(name);
        // setRoom(roomInit);

        socket.emit('join', {name, room}, function (error) {
            if (error) {
                alert(error);
            }
        })

    }, [location.search, ENDPOINT]);

    useEffect(() => {
        socket.on('message', (message => {
            setMessages(messages => [...messages, message]);
        }))

        socket.on('usersInRoom', (users) => {
            setUsers(users);
        })
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();

        socket.emit('send message', message, function () {
            setMessage('');
        })
    }


    return (
        <div className="container">
            <div className="content-wrapper">
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card m-0">
                            <div className="row no-gutters">
                                <Users users={users}/>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                                    <div className="chat-container">
                                        <Messages name={name} messages={messages}/>
                                        <Textarea message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Chat;