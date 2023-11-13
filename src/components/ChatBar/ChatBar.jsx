import React from 'react'
import "./style.css"
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs"

const ChatBar = () => {
    return (
        <div className='top-0 left-0 fixed bg-zinc-800 h-full w-[15rem] p-3 flex flex-col chat-bar'>
            <div className='pb-3 flex flex-row items-center justify-evenly'>
                <Logo width={140} />
                <AiOutlineClose fill='#fff' className='cursor-pointer' size={20} />
            </div>
            <span className='border-b-2 border-solid border-gray-500'></span>
            <div className='hover:overflow-y-scroll flex flex-col pt-3'>
                <div className='flex flex-row items-center gap-3 border border-solid p-2 text-white rounded cursor-pointer border-gray-500'>
                    <AiOutlinePlus />
                    <h2>Novo Chat</h2>
                </div>
                <div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>
                    <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div><div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer'>
                        <BsChatLeft fill='#fff' />
                        <p>Chat 1</p>
                    </div>

                </div>
            </div>
        </div>
    )
};


export default ChatBar