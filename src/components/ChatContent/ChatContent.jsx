import React from 'react'
import { ImSphere } from "react-icons/im";

const ChatContent = () => {
    return (
        <div className='bg-zinc-700 w-full flex flex-col items-center'>
            <div className='text-white w-3/4 pt-3 gap-8 flex flex-col'>
                <div className='flex flex-row items-center gap-3 border-b pb-2 border-solid border-gray-400'>
                    <div className='p-2 bg-green-600 rounded'><ImSphere /></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis quae nam laborum repellat molestiae obcaecati. Quam maiores dicta autem, rem molestias aspernatur magnam, vel ad eligendi porro similique dolorem?</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <div className='p-2 bg-green-600 rounded'><ImSphere /></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis quae nam laborum repellat molestiae obcaecati. Quam maiores dicta autem, rem molestias aspernatur magnam, vel ad eligendi porro similique dolorem?</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <div className='p-2 bg-green-600 rounded'><ImSphere /></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis quae nam laborum repellat molestiae obcaecati. Quam maiores dicta autem, rem molestias aspernatur magnam, vel ad eligendi porro similique dolorem?</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <div className='p-2 bg-green-600 rounded'><ImSphere /></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis quae nam laborum repellat molestiae obcaecati. Quam maiores dicta autem, rem molestias aspernatur magnam, vel ad eligendi porro similique dolorem?</p>
                </div>
            </div>
        </div>
    )
}

export default ChatContent