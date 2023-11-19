import React, { useEffect } from 'react'
import ChatBar from '../../components/ChatBar/ChatBar'
import "./style.css"
import ChatContent from '../../components/ChatContent/ChatContent'
import { useState } from 'react'
import ChatInput from '../../components/ChatInput/ChatInput'

import { createMessage, loadMessages } from '../../api/messagesApis'
import { renameChat, deleteChat } from '../../api/chatApis'

const Chat = () => {

    const [userInput, setUserInput] = useState('');
    const [chatID, setChatID] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([]);

    const addCurrentMessage = () => {
        const refreshedArray = [...messages];
        refreshedArray.push({"user": userInput});
        setMessages(refreshedArray);
    }

    const handleInput = (e) => {
        setUserInput(e.target.value);
    }

    const handleChatCardClick = (chatID) => {
        setChatID(chatID);
    };

    const handleSubmit = async () => {
        if (isLoading) {return}
        addCurrentMessage();
        createMessage(chatID, userInput, setIsLoading, setMessages);
    };

    useEffect(() => {
        console.log('Current ChatID', chatID)
        loadMessages(chatID, setMessages);
      }, [chatID]);

    return (
        <div className='flex flex-row h-screen w-screen overflow-y-hidden'>
            <ChatBar onClick={handleChatCardClick} chatID={chatID} onEdit={renameChat} onDelete={deleteChat}/>
            <ChatContent content={messages} chatID={chatID}>
                <ChatInput 
                value={userInput} 
                setValue={setUserInput}
                handleInput={handleInput} 
                handleSubmit={handleSubmit}
                disabled={isLoading} 
                />
            </ChatContent>
        </div>
    )
}

export default Chat