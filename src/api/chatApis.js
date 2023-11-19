import axios from 'axios';


export const deleteChat = async (chatID, setChats) => {
    try {

        const token = localStorage.getItem('authtoken');

        const data = {chatID: chatID}
        
        const res = await axios({
            method: 'POST',
            url: "http://localhost:3001/api/chats/delete",
            data: data,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (res.status === 200) {
            loadChats(setChats);
        }
    }
    catch (error) {
        console.error('Erro:', error);
    }
}

export const renameChat = async (chatID, newName, setChats) => {
    try {
        console.log('Rename chat', chatID);
        const token = localStorage.getItem('authtoken');
        const data = {chatID: chatID, newName: newName};
        const res = await axios({
            method: 'POST',
            url: "http://localhost:3001/api/chats/rename",
            data: data,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            loadChats(setChats);
        }
    }
    catch (error) {
        console.error('Erro:', error);
    }
}

export const loadChats = async (setChats) => {
    try {
        const token = localStorage.getItem('authtoken');
        const res = await axios({
            method: 'POST',
            url: "http://localhost:3001/api/chats/getChatNamesFromUserID",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            setChats(res.data);
        }
    }
    catch (error) {
        console.error('Erro:', error);
    }
}

export const createChat = async (modelID, chatName, setChats) => {

    try {
        const token = localStorage.getItem('authtoken');

        const data = {
            modelID: modelID,
            chatName: chatName
        }

        const res = await axios({
            method: 'POST',
            url: "http://localhost:3001/api/chats/create",
            data: data,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log('response', res.status)
        if (res.status === 201) {
            loadChats(setChats);
        }
    }
    catch (error) {
        console.error('Erro:', error);
    }
}

