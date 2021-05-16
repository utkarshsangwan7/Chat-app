import React,{useState} from 'react';
import './App.css';
import Socketio from 'socket.io-client';
import RenderMessages from './Components/RenderMessages/RenderMessages';
import Login from './Components/LoginForm/Login';
import Users from './Components/RenderUsers/Users';

const socket = Socketio('https://evening-river-10552.herokuapp.com/', { transports: ['websocket', 'polling', 'flashsocket'] });
function App(){
  const [user,setUser] = useState({
      username:'',
      roomid:'',
      joined:false
  });
  const [room,setRoom] = useState({
    roomName : '',
    users : []
  });

  const onClickLogin = ({username,roomid})=>{
    setUser({
      username,
      roomid,
      joined:true
    });
  }

  const onClickLogout = ()=>{
    setUser({
      username:'',
      roomid:'',
      joined:false
    });
    socket.emit('signout');
  }

  const onChangeRoom = (response)=>{
    setRoom(response);
  }

  return(
    !user.joined
    ?
    <Login onClickLogin={onClickLogin}/>
    :(
      <div className="group-wrap">
      <div className="GroupList">
        <Users room={room}/>
      </div>
      <div className="Group">
        <RenderMessages socket={socket} user={user} onClickLogout={onClickLogout} onChangeRoom={onChangeRoom} roomName={room.roomName}/>
      </div>
      </div>
     ) 
  );
}

export default App;
