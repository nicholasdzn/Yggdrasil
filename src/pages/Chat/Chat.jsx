import React from 'react'
import ChatBar from '../../components/ChatBar/ChatBar'
import "./style.css"
import ChatContent from '../../components/ChatContent/ChatContent'
import ChatInput from '../../components/ChatInput/ChatInput'

const Chat = () => {
    return (
        <div className='flex flex-row h-screen w-screen overflow-y-hidden'>
            <ChatBar />
            <ChatContent />
        </div>
    )
}

export default Chat