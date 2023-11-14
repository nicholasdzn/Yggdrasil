import React from 'react'
import { IoMdSend } from "react-icons/io";

const ChatInput = ({ value, handleInput, handleSubmit }) => {
    return (
        <div className='flex flex-row justify-center'>
            <input type="text" className='rounded-l outline-none px-3 py-2 bg-transparent text-white border border-white w-full' value={value} onChange={handleInput} />
            <button className='p-3 bg-green-400 rounded-r' onClick={handleSubmit}><IoMdSend fill='#fff' /></button>
        </div>
    )
}

export default ChatInput