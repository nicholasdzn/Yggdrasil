import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Logo from "../../Assets/Img/LogoChat2.png"
import "./Style.css";

const HomePage = () => {
    return (
        <>
            <div className='flex flex-col h-screen'>
                <Header />
                <section className='flex flex-col sm:flex-row items-center justify-center pt-5 gap-5 pb-5 main-content flex-1'>
                    <div className='flex flex-col items-start justify-center order-last sm:order-1'>
                        <div className='flex flex-col text-[4rem] mb-10 text-left font-bold text-[#22577A]'>
                            <h1 className='leading-tight'>Welcome to our</h1> {/* Ajuste no leading e mb */}
                            <h1 className='leading-tight'>Website!</h1>
                        </div>
                        
                        <p className='mb-6'>Explore as maravilhas do nosso conteúdo.</p>
                        
                
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Descubra Mais</button>
                    </div>
                    <img src={Logo} alt="" className='w-[15rem] sm:w-[20rem] order-1' />
                </section>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
