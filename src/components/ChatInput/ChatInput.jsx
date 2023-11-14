import React from 'react';
import { IoMdSend } from "react-icons/io";

const ChatInput = ({ value, handleInput, handleSubmit }) => {
    return (
        <div className='flex flex-row justify-center bg-transparent outline outline-white outline-[2px] rounded-full'>
          <textarea 
            type="text"
            placeholder="Faça sua pergunta..." 
            className="rounded-full bg-transparent flex-1 px-4 pt-3 text-white focus:outline-none resize-none" 
            value={value} 
            onChange={handleInput}
            style={{ height: '50px' }} 
          />
          <button 
            className="bg-green-400 text-white rounded-full font-semibold px-8 hover:bg-green-300 focus:outline-none" 
            onClick={handleSubmit}
          >
            <IoMdSend size={'20px'} />
          </button>       
        </div>
    );
}

export default ChatInput;
