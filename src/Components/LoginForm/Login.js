import React,{useState} from 'react';
import './Login.css';

const Login = ({onClickLogin})=>{
    const [username,setUsername] = useState('');
    const [roomid,setRoomid] = useState('');

    const onChangeSetUsername = (e)=>{
        setUsername(e.target.value);
    }
    const onChangeSetRoomid = (e)=>{
        setRoomid(e.target.value);
    }
    return(
        <div className="wrapper">
            <h1 id="tag-line">Enjoy Unlimited chatting :)</h1>
            <div className="Login">
                <div className='color-overlay'></div>
                    <div className="box">
                        <h1>Join Room</h1>
                        <div className='user'>
                             <h3>Username</h3>
                            <input id='username' type='text' onChange={onChangeSetUsername} autoComplete='off' placeholder="Username"></input>
                        </div>
                        <div className='room'> 
                            <h3>Room ID</h3>
                            <input id='roomid' type='text' onChange={onChangeSetRoomid} autoComplete='off' placeholder="Room ID"></input>
                        </div>
                        <button id="join" onClick={()=>{onClickLogin({username,roomid})}}>Join</button>
                    </div>
            </div>
        </div>
    );
}

export default Login;