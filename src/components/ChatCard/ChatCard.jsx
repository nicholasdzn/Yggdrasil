// import React from 'react'
// import { BsChatLeft } from 'react-icons/bs'

// const ChatCard = ({ content }) => {
//     return (
//         <div>
//             {content.map((item, index) =>
//                 <div className='mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer' key={index}>
//                     <BsChatLeft fill='#fff' />
//                     <p>{item.ChatName}</p>
//                 </div>)}
//         </div>
//     )
// }


// const ChatCard = ({ content, onChatCardClick, setSelectedChatID, selectedChatID }) => {
//     return (
//       <>
//         {content.map((item, index) => (
//           <div
//           className={`mt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer ${
//             item.ChatID === selectedChatID ? 'bg-zinc-700' : ''
//           }`}
//             key={index}
//             onClick={() => {
//               setSelectedChatID(item.ChatID)
//               onChatCardClick(item.ChatID)
//             }} 
//           >
//             <BsChatLeft fill='#fff' />
//             <p>{item.ChatName}</p>
//           </div>
//         ))}
//       </>
//     );
// };

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { BsChatLeft } from 'react-icons/bs';
import { FaEllipsisH, FaTrashAlt, FaEdit } from 'react-icons/fa';

const ChatCard = ({ content, onChatCardClick, setSelectedChatID, selectedChatID, onEditChatName, onDeleteChat }) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [newChatName, setNewChatName] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
    setNewChatName(content.find((item) => item.ChatID === selectedChatID)?.ChatName || '');
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEditChatName(selectedChatID, newChatName);
  };

  const handleDeleteClick = () => {
    onDeleteChat(selectedChatID);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSaveClick();
    }
}

  return (
    <>
      {content.map((item, index) => (
        <div
          className={`pt-2 flex flex-row items-center gap-3 p-2 text-white hover:bg-zinc-700 cursor-pointer  ${
            item.ChatID === selectedChatID ? 'bg-zinc-700' : ''
          }`}
          key={index}
          onClick={() => {
            setSelectedChatID(item.ChatID);
            onChatCardClick(item.ChatID);
          }}
        >
          <BsChatLeft fill='#fff' />
          {isEditing && item.ChatID === selectedChatID ? (
          <p className='hidden'>{item.ChatName}</p>
          ):<p>{item.ChatName}</p>
          }
          
          {item.ChatID === selectedChatID && (
          <div className='flex flex-row gap-2 ml-auto order-last'>
              <FaTrashAlt onClick={handleDeleteClick}/>
              <FaEdit onClick={handleEditClick}/>
          </div>
          
          )}
          {isEditing && item.ChatID === selectedChatID ? (
            <>
              <input
                type='text'
                value={newChatName}
                onChange={(e) => setNewChatName(e.target.value)}
                className='text-white border rounded order-1 bg-transparent outline-none'
                placeholder={item.chatName}
                onKeyDown={handleKey}
              />
              {/* <button onClick={handleSaveClick}>Salvar</button> */}
            </>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default ChatCard;