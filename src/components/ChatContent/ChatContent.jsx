import React from 'react'
import { ImSphere } from "react-icons/im";
import ChatInput from '../ChatInput/ChatInput';
import "./style.css"

const ChatContent = ({ children, msg }) => {
    return (
        <>
            <div className='bg-zinc-700 gridChat w-screen h-screen'>
                <div className='overflow-scroll px-20 text-white flex flex-col gap-3 py-5'> {/* div conteudo do chat */}
                    <div className='flex flex-row items-center gap-3 pb-2 border-solid'>
                        <div className='p-2 bg-green-600 rounded'><ImSphere /></div>
                        <p>{msg}</p>
                    </div>
                </div>
                <div className='bg-zinc-600 flex flex-col justify-center px-20'> {/* Div Footer / Input field */}
                    {children}
                </div>
            </div>
        </>
    )
}

export default ChatContent