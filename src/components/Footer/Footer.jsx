import React from 'react';
import Logo from '../Logo/Logo'
const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white flex flex-col items-center text-center p-4">
            <div className='pb-2'><Logo height={50} width={150} /></div>
            <p>©{new Date().getFullYear()} Desenvolvido por TMNG DEVS. Todos os direitos reservados.</p>
            <div className='flex flex-row gap-2'>
                <a href="/termos" className="text-blue-300 hover:text-blue-500">Termos de Uso</a> |
                <a href="/privacidade" className="text-blue-300 hover:text-blue-500">Política de Privacidade</a>
            </div>
        </footer>
    );
}

export default Footer;
