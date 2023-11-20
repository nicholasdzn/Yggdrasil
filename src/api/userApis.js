import axios from 'axios';

export const loginUser = async (formData) => {
    try {
        return await axios.post('http://localhost:3001/api/users/login', formData);
    }
    catch (error) {
        console.error('Erro:', error);
    }
}

export const registerUser = async (formData) => {
    try {
        console.log('Executing')
        return await axios.post('http://localhost:3001/api/users/create', formData);
    } catch (error) {
        if (error.response && error.response.status === 409){
            return error.response;
        }else {
            return error
        }
    }
}