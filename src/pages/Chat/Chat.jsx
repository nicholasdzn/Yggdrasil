import React, { useEffect } from 'react'
import ChatBar from '../../components/ChatBar/ChatBar'
import "./style.css"
import ChatContent from '../../components/ChatContent/ChatContent'
import { useState } from 'react'
import ChatInput from '../../components/ChatInput/ChatInput'
import generateText from '../../api/cohereGenerate'
import axios from 'axios';

const Chat = () => {

    const [userInput, setUserInput] = useState('');
    // const [aiMsg, setAiMsg] = useState('');
    const [chatID, setChatID] = useState()
    const [isLoading, setIsLoading] = useState(false);


    const [messages, setMessages] = useState([]);

    const addCurrentMessage = () => {
        const refreshedArray = [...messages];
        refreshedArray.push({"user": userInput});
        setMessages(refreshedArray);
    }

    const createMessage = async (modelID, content) => {

        if (!chatID){return}

        try {

            setIsLoading(true);

            const data = {
                chatID: chatID,
                // modelID: modelID,
                modelID: 1,
                content: userInput
            }

            const res = await axios({
                method: 'POST',
                url: "http://localhost:3001/api/messages/create",
                data: data
            })

            console.log('response', res.status)
            
            if (res.status === 201) {
                console.log('Mensagem criada')
                loadMessages();
                setIsLoading(false);
            }
        }
        catch (error) {
            console.error('Erro:', error);
            setIsLoading(false);
        }
    }

    const loadMessages =  async () => {


        if (!chatID){return}

        console.log('Loading Messages for chatID:', chatID)

        try {

            const data = {chatID: chatID}

            const res = await axios({
                method: 'POST',
                url: "http://localhost:3001/api/messages/chatMessages",
                data: data
            })

            console.log('response', res.status)
            
            if (res.status === 200) {
                setMessages(res.data)
            }
        }
        catch (error) {
            console.error('Erro:', error);
        }

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
        createMessage();
    };

    useEffect(() => {
        console.log('Current ChatID', chatID)
        loadMessages();
      }, [chatID]);

    return (
        <div className='flex flex-row h-screen w-screen overflow-y-hidden'>
            <ChatBar onClick={handleChatCardClick}/>
            <ChatContent content={messages}>
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