import React, { useEffect } from 'react'
import ChatBar from '../../components/ChatBar/ChatBar'
import "./style.css"
import ChatContent from '../../components/ChatContent/ChatContent'
import { useState } from 'react'
import ChatInput from '../../components/ChatInput/ChatInput'
import generateText from '../../api/cohereGenerate'

const Chat = () => {

    const [userInput, setUserInput] = useState('');
    const [aiMsg, setAiMsg] = useState('');

    const [messages, setMessages] = useState([]);

    const createMessage = async (chatID, modelID, content) => {

        try {

            const data = {
                chatID: chatID,
                modelID: modelID,
                content: content
            }

            const res = await axios({
                method: 'POST',
                url: "http://localhost:3001/api/messages/create",
                data: data,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            console.log('response', res.status)
            
            if (res.status === 201) {
                console.log('Mensagem criada')
                loadMessages();
            }
        }
        catch (error) {
            console.error('Erro:', error);
        }
    }

    const loadMessages =  async (chatID) => {

        try {

            const data = {chatID: chatID}

            const res = await axios({
                method: 'POST',
                url: "http://localhost:3001/api/messages/chatMessages",
                data: data,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
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


    // const handleInput = (e) => {
    //     setUserInput(e.target.value);
    // }

    // const handleSubmit = async () => {
    //     try {
    //         const apiResponse = await generateText(userInput);
    //         setAiMsg(apiResponse);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

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

    useEffect(() => {
        loadMessages();
      }, []);

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