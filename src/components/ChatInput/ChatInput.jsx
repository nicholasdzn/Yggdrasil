import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";

const ChatInput = ({ handleSubmit, value }) => {

    const handleInput = (event) => {
        setValue(event.target.value);
    };

    const handleTextAreaInput = (event) => {
        const textArea = event.target;
        textArea.style.height = 'auto'; // Reseta a altura para recalcular a nova altura
        if (textArea.scrollHeight > 140) {
            textArea.style.overflowY = 'scroll'; // Ativa a barra de rolagem
            textArea.style.height = '100px'; // Define a altura máxima
        } else {
            textArea.style.overflowY = 'hidden'; // Esconde a barra de rolagem se não for necessária
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    };

    return (
        <div className='flex flex-row justify-center bg-transparent outline outline-white outline-[2px] rounded-lg'>
            <textarea
                type="text"
                placeholder="Faça sua pergunta..."
                className=" rounded-lg bg-transparent flex-1 px-4 py-2 text-white focus:outline-none resize-none overflow-hidden"
                value={value}
                onChange={handleInput}
                onInput={handleTextAreaInput}
                style={{ maxHeight: '140px' }}  // Altura máxima com barra de rolagem
            />
            <button
                className="bg-green-400 text-white rounded-lg px-6 hover:bg-green-300 focus:outline-none"
                onClick={() => handleSubmit(value)}
            >
                <IoMdSend size={'20px'} />
            </button>
        </div>
    );
}

export default ChatInput;
