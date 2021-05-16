import React from 'react';
import CardUser from './CardUser';
import './Users.css';

const Users = ({room})=>{
    const users = room.users.map((user,i)=>{
        return <CardUser key={i} user={user}/>
    })
    return (
        <div id='ultimate-wrapper'>
            <h1 id='user-list-head'>Online Users</h1>
            <div className='online-wrapper'>
                <div id='chat-bot'>
                    <img id='chat-bot-avatar' alt='' src={`https://robohash.org/chat-bot`} width='50px'></img>
                    <h1>Chat-bot</h1>
                </div>
                <div className="users">{users}</div>
            </div>
            <div id='end-buffer'></div>
        </div>
    );
};

export default Users;