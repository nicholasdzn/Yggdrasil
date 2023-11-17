import React from 'react'
import { BsChatLeft } from 'react-icons/bs'

const ChatCard = ({ content }) => {
    return (
        <>
            {content.map((item, index) =>
                <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer' key={index}>
                    <BsChatLeft fill='#fff' />
                    <p>{item.ChatName}</p>
                </div>)}
        </>
    )
}

export default ChatCard