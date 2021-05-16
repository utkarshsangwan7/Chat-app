import React from 'react';
import './CardUser.css';
import toonavatar from 'cartoon-avatar';
const CardUser = ({user})=>{
    const url = toonavatar.generate_avatar({"gender":"male"});
    return(
        <div className="card">
            <img alt='' id='avatar-list' src={url}></img>
            <div>
                <h2 id="name">{user.username}</h2>
                <h5 id="id">{user.id}</h5>
            </div>
        </div>
    );
}

export default CardUser;