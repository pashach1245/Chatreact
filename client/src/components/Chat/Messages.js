import React from 'react';

function Messages(props) {
    const messages = props.messages.map(message => {
        return (
            <li className={message.user === props.name ? "chat-right" : "chat-left"}>
                <div className="chat-avatar">
                    <div className="chat-name">{message.user}</div>
                </div>
                <div className="chat-text">{message.text}</div>
            </li>
        )
    });

    return (
        <ul className="chat-box chatContainerScroll">
            {messages}
        </ul>
    );
}

export default Messages;