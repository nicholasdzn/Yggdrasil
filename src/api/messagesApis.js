import axios from 'axios';

export const createMessage = async (chatID, content, setIsLoading, setMessages, messages, inPlace=false) => {

    if (!chatID){return}

    try {

        setIsLoading(true);

        const data = {
            chatID: chatID,
            // modelID: modelID,
            modelID: 1,
            content: content
        }

        const res = await axios({
            method: 'POST',
            url: "http://localhost:3001/api/messages/create",
            data: data
        })

        if (res.status === 201) {

            const data = {chatID: chatID}

            const res = await axios({
                method: 'POST',
                url: "http://localhost:3001/api/messages/chatMessages",
                data: data
            })

            if (res.status === 200) {
                loadMessages(chatID, setMessages, messages, inPlace)
            }

            setIsLoading(false);
        }
    }
    catch (error) {
        console.error('Erro:', error);
        setIsLoading(false);
    }
}

export const loadMessages =  async (chatID, setMessages, messages, inPlace=true) => {

    if (!chatID){return}

    console.log('Loading Messages for chatID:', chatID)

    try {

        const data = {chatID: chatID}

        const res = await axios({
            method: 'POST',
            url: "http://localhost:3001/api/messages/chatMessages",
            data: data
        })

        if (res.status === 200) {
            const messagesWithId = res.data.map(message => ({
                ...message,
                id: Date.now()
            }));

            if (!inPlace){
                const lastUserMessage = messagesWithId[messagesWithId.length -2]
                const lastModelMessage = messagesWithId[messagesWithId.length -1]
                const updatedMessages = [...messages]
                updatedMessages.push(lastUserMessage);
                updatedMessages.push(lastModelMessage);
                setMessages(updatedMessages)
            } else {
                setMessages(messagesWithId)
            }

        }
    }
    catch (error) {
        console.error('Erro:', error);
    }

}


