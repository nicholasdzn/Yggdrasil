import React from 'react'
import { ImSphere } from "react-icons/im";
import ChatInput from '../ChatInput/ChatInput';
import "./style.css"

// const ChatContent = ({ children }) => {
//     return (
//         <>
//             <div className='bg-zinc-700 gridChat w-screen h-screen'>
//                 <div className='overflow-scroll px-20 text-white flex flex-col gap-3 py-5'> {/* div conteudo do chat */}
//                     <div className='flex flex-row items-center gap-3 pb-2 border-solid'>
//                         <div className='p-2 bg-green-600 rounded'><ImSphere /></div>
//                         <p>{msg}</p>
//                     </div>
//                 </div>
//                 <div className='bg-zinc-600 flex flex-col justify-center px-20'> {/* Div Footer / Input field */}
//                     {children}
//                 </div>
//             </div>
//         </>
//     )
// }

const ChatContent = ({ children, content }) => {
    console.log("Conteudo recebido", content);
    return (
      <>
        <div className='bg-zinc-700 gridChat w-screen h-screen'>
          <div className='overflow-scroll px-20 text-white flex flex-col gap-3 py-5'>
            {content.map((message, index) => {
              const key = Object.keys(message)[0];
              const value = message[key];
              return (
                <div className='flex flex-row items-center gap-3 pb-2 border-solid' key={index}>
                  <p>{key === 'user' ? 'model' : 'user'}</p>
                  <div className={`p-2 ${key === 'user' ? 'bg-green-600' : 'bg-blue-600'} rounded`}>
                    {value}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='bg-zinc-600 flex flex-col justify-center px-20'>
            {children}
          </div>
        </div>
      </>
    )
}

export default ChatContent