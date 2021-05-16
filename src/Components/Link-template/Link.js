import React from 'react';

const Link = ({link})=>{
    return(
        <a href={link.message} target='_blank' rel="noreferrer">This is my location!!</a>
    );
}

export default Link;