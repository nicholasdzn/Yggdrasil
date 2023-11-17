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
                        <h1 className='text-4xl mb-4 font-bold 2xl:text-6xl text-[#22577A]'>Welcome to our Website</h1>
                        <p className='mb-6 2xl:text-4xl max-w-[25rem] 2xl:max-w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat corporis blanditiis dolor sapiente odit dolorem sit! Perferendis molestias, saepe quasi pariatur amet in. Recusandae facilis autem a vitae doloribus.</p>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 2xl:w-[20rem] 2xl:h-[5rem] 2xl:text-4xl 2xl:p-3'>Descubra Mais</button>
                    </div>
                    <img src={Logo} alt="" className='w-[15rem] 2xl:w-[20rem] order-1' />
                </section>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
