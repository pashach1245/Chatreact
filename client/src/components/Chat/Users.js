import React from 'react';

function Users(props){

const users= props.users.map(user => (
    <li key={user.id} className="person">
        <p className="name-time">
            <span className="name">{user.name}</span>
        </p>
    </li>
));

return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
        <div className="users-container">
            <ul className="users">
                {users}
            </ul>
        </div>
    </div>
);
}

export default Users;