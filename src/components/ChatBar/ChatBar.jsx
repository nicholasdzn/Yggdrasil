import React from 'react'
import "./style.css"
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs"
import { useEffect } from 'react';
import axios from 'axios';

const ChatBar = () => {
    const [chat, setChat] = useState([]);
    const handleClick = async () => {
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
                setChat(res.data);
                console.log(`chat ${res.data}`);
            }
        }
        catch (error) {
            console.error('Erro:', error);
        }
    }

    useEffect(() => {
        const apiChats = async () => {
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
                    setChat(res.data);
                    console.log(`responsa = ${JSON.stringify(res.data)} `);
                }
            }
            catch (error) {
                console.error('Erro:', error);
            }
        }
        apiChats();
    }, []);

    return (
        <aside className='bg-zinc-800 overflow-hidden h-full min-w-[15rem] pl-3 pt-3 pb- 3 flex flex-col chat-bar'>
            <div className='pb-3 flex flex-row items-center justify-evenly'>
                <Logo width={140} />
                <AiOutlineClose fill='#fff' className='cursor-pointer' size={20} />
            </div>
            <span className='border-b-2 border-solid border-gray-500 mr-3'></span>
            <div className='hover:overflow-y-scroll flex flex-col pt-3 pr-3'>
                <div className='flex flex-row items-center gap-3 border border-solid p-2 text-white rounded cursor-pointer border-gray-500' onClick={handleClick}>
                    <AiOutlinePlus />
                    <h2>Novo Chat</h2>
                </div>
                <div>
                    {chat.map((item, index) => {
                        <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer' key={index}>
                            <BsChatLeft fill='#fff' />
                            <p>{item.ChatName}</p>
                        </div>
                    })}
                </div>
            </div>
        </aside>
    )
};


export default ChatBar