import React from 'react'
import "./style.css"
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect } from 'react';
import axios from 'axios';
import ChatCard from '../ChatCard/ChatCard';


const ChatBar = ( { onClick } ) => {

    const [chats, setChats] = useState([]);
    const [selectedChatID, setSelectedChatID] = useState(null);

    const loadChats = async () => {
        try {
            const token = localStorage.getItem('authtoken');
            const res = await axios({
                method: 'POST',
                url: "http://localhost:3001/api/chats/getChatNamesFromUserID",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (res.status === 200) {
                setChats(res.data);
            }
        }
        catch (error) {
            console.error('Erro:', error);
        }
    }

    const createChat = async (modelID, chatName) => {

        try {
            const token = localStorage.getItem('authtoken');

            const data = {
                modelID: modelID,
                chatName: chatName
            }

            const res = await axios({
                method: 'POST',
                url: "http://localhost:3001/api/chats/create",
                data: data,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log('response', res.status)
            if (res.status === 201) {
                loadChats();
            }
        }
        catch (error) {
            console.error('Erro:', error);
        }
    }

    useEffect(() => {
        loadChats();
      }, []);

    return (
        
        <aside className='bg-zinc-800 overflow-hidden h-full min-w-[20rem] pl-3 pt-3 pb- 3 flex flex-col chat-bar'>
            <div className='pb-3 flex flex-row items-center justify-evenly'>
                <Logo width={140} />
                <AiOutlineClose fill='#fff' className='cursor-pointer' size={20} />
            </div>
            <span className='border-b-2 border-solid border-gray-500 mr-3'></span>
            <div className='hover:overflow-y-scroll overflow-x-hidden flex flex-col pt-3 pr-3'>
                <div className='flex flex-row items-center gap-3 border border-solid p-2 text-white rounded cursor-pointer border-gray-500' onClick={() => createChat(1, 'new chat')}>
                    <AiOutlinePlus />
                    <h2>Novo Chat</h2>
                </div>
                <div>
                    <ChatCard 
                    content={chats} 
                    onChatCardClick={onClick}
                    setSelectedChatID={setSelectedChatID}
                    selectedChatID={selectedChatID}
                    />
                </div>
            </div>
        </aside>
    )
};


export default ChatBar