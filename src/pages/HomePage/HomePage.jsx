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
                <section className='flex flex-col sm:flex-row items-center justify-center pt-5 gap-10 pb-5 main-content flex-1'>
                    <div className='flex flex-col items-center sm:items-start justify-center order-last sm:order-1 max-w-[25rem] 2xl:max-w-[50rem] text-center sm:text-start'>
                        <h1 className='text-4xl pb-4 font-bold 2xl:text-6xl text-[#22577A]'>Yggdrasil, onde a tecnologia encontra a natureza</h1>
                        <p className='pb-6 2xl:text-4xl '>Na plataforma Yggdrasil, unimos inovação e consciência ambiental,
                            oferecendo um espaço digital para conexões significativas enquanto promovemos a sustentabilidade e a preservação da natureza.
                            Junte-se a nós para criar um mundo mais verde.</p>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 2xl:w-[20rem] 2xl:h-[5rem] 2xl:text-4xl 2xl:p-3 font-bold'>Descubra Mais</button>
                    </div>
                    <img src={Logo} alt="" className='w-[15rem] lg:w-[20rem] 2xl:w-[30rem] order-1' />
                </section>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
