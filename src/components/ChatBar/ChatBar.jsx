import React from 'react'
import "./style.css"
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect } from 'react';
import ChatCard from '../ChatCard/ChatCard';

import { loadChats, createChat } from '../../api/chatApis';

const ChatBar = ( { onClick, onEdit, onDelete } ) => {

    const [chats, setChats] = useState([]);
    const [selectedChatID, setSelectedChatID] = useState(null);

    useEffect(() => {
        loadChats(setChats);
      }, []);

    return (
        
        <aside className='bg-zinc-800 overflow-hidden h-full min-w-[20rem] pl-3 pt-3 pb- 3 flex flex-col chat-bar'>
            <div className='pb-3 flex flex-row items-center justify-evenly'>
                <Logo width={140} />
                <AiOutlineClose fill='#fff' className='cursor-pointer' size={20} />
            </div>
            <span className='border-b-2 border-solid border-gray-500 mr-3'></span>
            <div className='hover:overflow-y-scroll overflow-x-hidden flex flex-col pt-3 pr-3'>
                <div className='flex flex-row items-center gap-3 border border-solid p-2 text-white rounded cursor-pointer border-gray-500' onClick={() => createChat(1, 'new chat', setChats)}>
                    <AiOutlinePlus />
                    <h2>Novo Chat</h2>
                </div>
                <div>
                    <ChatCard 
                    content={chats} 
                    onChatCardClick={onClick}
                    setSelectedChatID={setSelectedChatID}
                    selectedChatID={selectedChatID}
                    onDeleteChat={onDelete}
                    onEditChatName={onEdit}
                    setChats={setChats}
                    />
                </div>
            </div>
        </aside>
    )
};


export default ChatBar