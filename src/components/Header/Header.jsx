import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-center px-8 py-4 text-white font-regular text-center'>
            <div className=''><Logo height={50} width={150} /></div>
            <ul className='flex gap-10 items-center ul-header'>
                <li className='li-header'>Sobre</li>
                <li className='li-header'>Contato</li>
                <Link to={"/login"}><li className='py-2 hover:bg-emerald-500 px-6 rounded-full font-bold li-header'>Login</li></Link>
            </ul>
        </header>
    )
}

export default Header