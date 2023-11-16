import Login from "../pages/Login/Login";
import axios from "axios";
import { useEffect } from "react";
const Private = ({ Item }) => {
    var signed = false
    const token = localStorage.getItem('authtoken');
    useEffect(() => {
        const apiCall = async (token) => {
            try {
                console.log(token);
                // const response = await axios.post('http://localhost:3001/api/users/auth', {
                //     headers: {
                //         'Authorization': `Bearer ${token}`,
                //     }
                // });
                const res = await axios({
                    method: 'POST',
                    url: "http://localhost:3001/api/users/auth",
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log(res);
                if (res.status === 200) {
                    signed = true;
                }
                else if (res.status === 403 || res.status === 401) {
                    signed = false
                }
            }
            catch (error) {
                console.error('Erro:', error);
                signed = false;
            }
        }
        apiCall(token);
    }, []);

    console.log(`caguei no mato: ${signed}`);

    return signed > 0 ? Item : <Login />
}

export default Private;