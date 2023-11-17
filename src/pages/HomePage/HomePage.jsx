import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Logo from "../../Assets/Img/LogoChat2.png"
import "./Style.css"
const HomePage = () => {
    return (
        <>
            <div className='flex flex-col h-screen'>
                <Header />
                <section className='flex flex-col sm:flex-row items-center justify-center pt-5 gap-5 pb-5 main-content flex-1'>
                    <div className='flex flex-col items-center justify-center text-center order-last sm:order-1'>
                        <h1 className='text-4xl mb-4 font-bold 2xl:text-6xl'>Bem-vindo ao Nosso Site!</h1>
                        <p className='mb-6 2xl:text-4xl'>Explore as maravilhas do nosso conteúdo.</p>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 2xl:w-[20rem] 2xl:h-[5rem] 2xl:text-4xl 2xl:p-3'>Descubra Mais</button>
                    </div>
                    <img src={Logo} alt="" className='w-[15rem] 2xl:w-[25rem] order-1' />
                </section>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;