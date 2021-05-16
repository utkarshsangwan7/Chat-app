import React,{useState,useEffect} from 'react';
import MessageTemplate from '../Message-template/Message';
import LinkTemplate from '../Link-template/Link';
import './RenderMessages.css';
import Send from './send.png';
import Location from './location.png';

const RenderMessages = ({socket,user,onClickLogout,onChangeRoom,roomName})=>{
    const [messages,setMessages] = useState([]);
    let temp_message = {};

    useEffect(()=>{
        socket.emit('join',user,(error)=>{
            alert(error);
            onClickLogout();
        });
        // eslint-disable-next-line
    },[]);

    socket.on('Welcome',(response)=>{
        temp_message = response;
        newMessage();
    });

    socket.on('getUsers',(response)=>{
        onChangeRoom(response);
    })

    socket.on('getMessage',(message)=>{
        temp_message = message;
        newMessage();
    });

    socket.on('locationMessage',(link)=>{
        newLocationMessage(link);
    });

    const onInputChange = (event)=>{
        temp_message = event.target.value;
    };

    const newMessage = ()=>{
        setMessages(
            [
                ...messages,
                temp_message
            ]
        );
    };

    const newLocationMessage = (link)=>{
        setMessages(
            [
                ...messages,
                {
                    username:link.username,
                    message:<LinkTemplate link={link}/>,
                    time:link.time
                }
                
            ]
        );
    }

    const onClickSend = ()=>{
        const button = document.getElementById('send');
        const input = document.getElementById('enterMessage');
        if(input.value){
            button.setAttribute('disabled','disabled');
            input.value='';
            input.focus();
            socket.emit('sendMessage',temp_message,(message)=>{
                button.removeAttribute('disabled');
            });
        }
    };

    const onClickSendLocation = ()=>{
        if(!navigator.geolocation){
            alert('Your browser does not support sharing location');
        }
        else{
            const button = document.getElementById('location');
            button.setAttribute('disabled','disabled');
            navigator.geolocation.getCurrentPosition((position)=>{
                socket.emit('location',{
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                },()=>{
                    button.removeAttribute('disabled');
                });
            });
        }
    };

    return(
        <div className="Rendermessages">
            <div className="messages">
                <div id='message-head'>
                    <h1 className="GroupName">{roomName}</h1>
                    <button id='signout' onClick={onClickLogout}>Leave</button>
                </div>
                {messages ? messages.map((message,i)=>{
                    return <MessageTemplate key={i} message={message}/>
                })
                : null}
            </div>
            <div className="chatInput">
                <input name='message' placeholder='Enter your message' id='enterMessage' onChange={onInputChange} autoComplete='off'></input>
                <img alt='' id="send" src={Send} onClick={onClickSend}></img>
                <img alt='' id="location" src={Location} onClick={onClickSendLocation}></img>
            </div>
        </div>
    );
}
export default RenderMessages;
