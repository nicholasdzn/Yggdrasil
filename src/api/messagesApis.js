import axios from 'axios';

export const createMessage = async (chatID, content, setIsLoading, setMessages) => {

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
            loadMessages(chatID, setMessages);
            setIsLoading(false);
        }
    }
    catch (error) {
        console.error('Erro:', error);
        setIsLoading(false);
    }
}

export const loadMessages =  async (chatID, setMessages) => {

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
            setMessages(res.data)
        }
    }
    catch (error) {
        console.error('Erro:', error);
    }

}


