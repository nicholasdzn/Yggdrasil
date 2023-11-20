import React from 'react'
import "./style.css"
import ChatMsg from '../ChatMsg/ChatMsg';

const ChatContent = ({ children, content, lastMessageIdBeforeUpdate }) => {

  return (
    <>
      <div className='bg-zinc-700 gridChat w-screen h-screen'>
        <div className='overflow-scroll px-20 text-white flex flex-col gap-3 py-5'>
          <ChatMsg content={content} lastMessageIdBeforeUpdate={lastMessageIdBeforeUpdate }/>
        </div>
        <div className='bg-zinc-600 flex flex-col justify-center px-20'>{children}</div>
      </div>
    </>
  );
};

export default ChatContent