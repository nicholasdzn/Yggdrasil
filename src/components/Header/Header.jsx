import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-center px-8 py-4 text-white font-regular text-center'>
            <div className='text-2xl'>LOGO</div>
            <ul className='flex gap-10 items-center'>
                <li>Sobre</li>
                <li>Contato</li>
                <Link to={"/login"}><li className='py-2 hover:bg-emerald-500 px-6 rounded-full font-bold'>Login</li></Link>
            </ul>
        </header>
    )
}

export default Header