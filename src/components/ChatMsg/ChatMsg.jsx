import React, { useRef, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaUser } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const ChatMsg = ({ content, lastMessageIdBeforeUpdate, isLoading  }) => {

    const lastMessageRef = useRef(null);

    useEffect(() => {
        if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [content]);
    
    return (
        <>
        
        {
            content.map((message, index) => {
                
                const key = Object.keys(message)[0];
                const value = message[key];
                
                return (
                    <div className='flex flex-row items-center gap-3 pb-2 border-solid' key={index} ref={index === content.length - 1 ? lastMessageRef : null}>
                        <div className={`p-2 rounded ${key === 'user' ? 'bg-green-600' : 'bg-violet-800'}`}>{key === 'user' ? <FaUser /> : <AiOutlineGlobal />}</div>
                            <div className={`p-2`}>
                            {key === 'model' && lastMessageIdBeforeUpdate && message.id > lastMessageIdBeforeUpdate ? (
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