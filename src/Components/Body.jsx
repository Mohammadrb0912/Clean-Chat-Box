import React from 'react'
import Chat from './Chat'

export default function Body(props) {

    const chats = props.chatsList.map((chat , index) => {
        const isLeft = 'recive' === chat.type;
        return <Chat
            key={index}
            time={chat.time}
            message={chat.message}
            gravatar={isLeft ? props.gravatars.user2 : props.gravatars.user1}
            isLeft={isLeft} />
    })

  return (
         <div className="panel-body">
           <div className="chats">
              {chats}   
           </div>
         </div>
  )
}
