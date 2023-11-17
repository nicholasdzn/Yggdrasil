import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Logo from "../../Assets/Img/LogoChat2.png"
import "./Style.css"
const HomePage = () => {
    return (
        <>
            <Header />
            <section className='flex flex-col h-screen sm:flex-row items-center justify-center pt-5 gap-5 pb-5 main-content'>
                <div className='flex flex-col items-center justify-center text-center order-last sm:order-1'>
                    <h1 className='text-4xl mb-4 font-bold'>Bem-vindo ao Nosso Site!</h1>
                    <p className='mb-6'>Explore as maravilhas do nosso conteúdo.</p>
                    <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Descubra Mais</button>
                </div>
                <img src={Logo} alt="" className='w-[15rem] sm:w-[20rem] order-1' />
            </section>
            <Footer />
        </>
    );
}

export default HomePage;