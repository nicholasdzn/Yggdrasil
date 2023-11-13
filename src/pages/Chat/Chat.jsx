import React from 'react'
import ChatBar from '../../components/ChatBar/ChatBar'
import "./style.css"
import ChatContent from '../../components/ChatContent/ChatContent'

const Chat = () => {
    return (
        <div className='flex flex-row'>
            <ChatBar />
            <ChatContent />
        </div>
    )
}

export default Chat