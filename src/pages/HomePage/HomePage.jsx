import React from 'react';
import Header from '../../components/Header/Header';
import Logo from "../../Assets/Img/LogoChat2.png"
import Yggdrasil from "../../Assets/Img/IggDrasil.png"
import "./Style.css"
const HomePage = () => {
    return (
        <div className='bg-white flex flex-col h-screen'>
            <Header />
            <div className='flex flex-1 items-center justify-center'>
                <div className='flex flex-col items-center text-center'>
                    <h1 className='text-black text-4xl mb-4'>Bem-vindo ao Nosso Site!</h1>
                    <p className='text-black mb-6'>Explore as maravilhas do nosso conteúdo.</p>
                    <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Descubra Mais</button>
                </div>
                <img src={Logo} alt='Descrição da Imagem' className='max-w-md' />
            </div>
        </div>
    );
}

