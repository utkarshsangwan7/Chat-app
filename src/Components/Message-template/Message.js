import React from 'react';
import './Message.css';
import Moment from 'moment';
import toonavatar from 'cartoon-avatar';

const Message = ({message})=>{
    const url = toonavatar.generate_avatar({"gender":"male"});
    return(
        <div id="mess">
            <div id="img"><img alt='' id='avatar' src={url}></img></div>
            <div id="message-template">
            <h6 id="username">{message.username}</h6>
            <h2 id="message">{message.message}</h2>
            <h6 id="time">{Moment(message.time).format('LLL')}</h6>
            </div>
        </div>
    );
}

export default Message;