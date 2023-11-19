import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaUser } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const ChatMsg = ({ content, firstRender }) => {
    return (
        <>
            {
                content.map((message, index) => {
                    const key = Object.keys(message)[0];
                    const value = message[key];
                    const isNewMessage = !firstRender;
                    return (
                        <div className='flex flex-row items-center gap-3 pb-2 border-solid' key={index}>
                            <div className={`p-2 rounded ${key === 'user' ? 'bg-green-600' : 'bg-violet-800'}`}>{key === 'user' ? <FaUser /> : <AiOutlineGlobal />}</div>
                            <div className={`p-2`}>
                                {key === 'model' && isNewMessage ? (
                                    <TypeAnimation 
                                    speed={100} 
                                    sequence={[value]}
                                    ></TypeAnimation>
                                ) : (
                                    <span>{value}</span>
                                )}
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default ChatMsg