const users = [];

const addUser = ({name, id, room}) => {
    const userExisting = users.find(user => user.name === name);
    if (userExisting) {
        return {error: 'User already registered'}
    }
    const user = {name, id, room};
    users.push(user);

    return {user};
}

const getUser = (id) => {
    return users.find(user => user.id === id);
}

const removeUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        return users.splice(userIndex, 1)[0];
    }
}

const getUsersInRoom = (room) => {
    return users.filter(user => user.room === room);
}

module.exports = {addUser, getUser, removeUser, getUsersInRoom};