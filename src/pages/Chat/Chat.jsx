import React from 'react'
import ChatBar from '../../components/ChatBar/ChatBar'
import "./style.css"
import ChatContent from '../../components/ChatContent/ChatContent'
import { useState } from 'react'
import ChatInput from '../../components/ChatInput/ChatInput'
import generateText from '../../api/cohereGenerate'

const Chat = () => {
    const [userInput, setUserInput] = useState('');
    const [aiMsg, setAiMsg] = useState('');


    const handleInput = (e) => {
        setUserInput(e.target.value);
    }

    const handleSubmit = async () => {
        try {
            const apiResponse = await generateText(userInput);
            setAiMsg(apiResponse);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex flex-row h-screen w-screen overflow-y-hidden'>
            <ChatBar />
            <ChatContent msg={aiMsg}>
                <ChatInput value={userInput} setValue={setUserInput} handleInput={handleInput} handleSubmit={handleSubmit} />
            </ChatContent>
        </div>
    )
}

export default Chat