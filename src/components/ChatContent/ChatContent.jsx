import React, { useEffect, useRef, useState } from 'react';
import "./style.css"
import ChatMsg from '../ChatMsg/ChatMsg';
import Finka from "../../Assets/Img/finka.png"
import Gojo from "../../Assets/Img/gojo.png"

const ChatContent = ({ children, content, lastMessageIdBeforeUpdate, chatID, isLoading }) => {

  const [mostrarSegundaImagem, setMostrarSegundaImagem] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMostrarSegundaImagem(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className='bg-zinc-700 gridChat w-screen h-screen'>
        <div className={`overflow-y-auto px-20 text-white flex flex-col gap-3 py-5 ${!chatID && 'justify-center'}`}>
          {!chatID ? 
          <div className='flex flex-col gap-10 justify-center items-center'>
            <div>
              <h1 className='text-5xl font-bold'>Bem vindo ao Chat</h1>
              <p>Para começar, por favor crie ou selecione um novo chat!</p>
            </div>
            {!mostrarSegundaImagem ? <img src={Gojo} alt="" /> : <img src={Finka} alt="" />}
          </div> 
          : <ChatMsg content={content} lastMessageIdBeforeUpdate={lastMessageIdBeforeUpdate} isLoading={isLoading}/>}
        </div>
        <div className='bg-zinc-600 flex flex-col justify-center px-20'>{children}</div>
      </div>
    </>
  );
};

export default ChatContent