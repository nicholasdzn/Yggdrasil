import React from 'react'
import "./style.css"
const ChatBar = () => {
    return (
        <nav className='flex h-full flex-col nav-chat justify-around bg-slate-500'>
            <div>
                <ol>
                    <li>
                        <a href="">Chat1</a>
                    </li>
                    <li>
                        <a href="">Chat2</a>
                    </li>
                </ol>
            </div>
            <div>
                <h2>Usuário</h2>
            </div>
        </nav>
    )
}

export default ChatBar