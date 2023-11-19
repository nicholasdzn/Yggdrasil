import React from 'react';
import { IoMdSend } from "react-icons/io";
import { Circles } from 'react-loader-spinner';

const ChatInput = ({ value, handleInput, handleSubmit, setValue, disabled }) => {

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
            setValue('');
        }
    }

    return (
        <div className='flex flex-row justify-center bg-transparent border border-white rounded-lg'>
            <textarea
                type="text"
                placeholder="Faça sua pergunta..."
                className=" rounded-lg bg-transparent flex-1 px-4 py-1 text-white focus:outline-none resize-none"
                value={value}
                onChange={handleInput}
                onKeyDown={handleKey}
                disabled={disabled}
            />
            <button
                className="bg-green-400 text-white rounded-lg px-6 hover:bg-green-300 focus:outline-none"
                onClick={handleSubmit}
            >
                {disabled ? (
                    <Circles
                    height="40"
                    width="40"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
                ): (<IoMdSend size={'20px'} />
                )}

            </button>
        </div>
    );
}

export default ChatInput;
