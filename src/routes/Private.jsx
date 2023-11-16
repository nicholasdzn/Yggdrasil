import Login from "../pages/Login/Login";
import axios from "axios";
import { useEffect, useState } from "react";

const Private = ({ Item }) => {
    const [signed, setSigned] = useState(false);
    const token = localStorage.getItem('authtoken');

    useEffect(() => {
        const apiCall = async (token) => {
            try {
                const res = await axios({
                    method: 'POST',
                    url: "http://localhost:3001/api/users/auth",
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                if (res.status === 200) {
                    setSigned(true);
                }
                else if (res.status === 403 || res.status === 401) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo deu errado, tente novamente mais tarde",
                    });
                    setSigned(false);
                }
            }
            catch (error) {
                console.error('Erro:', error);
                setSigned(false);
            }
        }
        apiCall(token);
    }, []);

    return signed > 0 ? Item : <Login />
}

export default Private;