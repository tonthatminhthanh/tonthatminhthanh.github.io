import {
    Link
} from 'react-router-dom'
import { useState } from 'react';

import { IoMenu } from "react-icons/io5";

function NavbarListItem({label, path, isMobile=false})
{
    let spaceOut = isMobile ? 'w-full ' : 'ml-4 hover:rounded-md'
    return (
        <li className={'list-none ' + spaceOut + ' p-1 transition-all  dark:hover:bg-white dark:hover:text-gray-600 hover:bg-gray-800 hover:text-white'}><Link to={path}>{label}</Link></li>
    )
}

function NavbarList()
{
    return (
        <ul className='lg:flex font-semibold hidden ml-auto items-stretch'>
            <NavbarListItem label="My skills" path="/pages/Skills"></NavbarListItem>
            <NavbarListItem label="Contact me" path="/pages/Contact"></NavbarListItem>
        </ul>
    )
}

function HamburgerButton({isOpen, setIsOpen})
{
    function handleClick()
    {
        setIsOpen(!isOpen)
    }

    return (
        <button type='button' className='transition-all rounded-md dark:hover:bg-white dark:hover:text-gray-600 hover:bg-gray-800 hover:text-white ml-auto lg:hidden text-4xl' onClick={handleClick}><IoMenu /></button>
    )
}

function NavbarHam({isOpen})
{
    let isHidden = isOpen ? 'flex' : 'hidden'

    return (
        <ul className={'justify-center lg:hidden dark:bg-gray-600 bg-gray-400 dark:text-white text-black font-semibold w-full ml-auto ' + isHidden}>
            <div className='m-auto text-center w-full'>
                <NavbarListItem isMobile={true} label="My skills" path="/pages/Skills"></NavbarListItem>
                <NavbarListItem isMobile={true} label="Contact me" path="/pages/Contact"></NavbarListItem>
            </div>
        </ul>
    )
}

export default function NavbarHeader()
{
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className='mb-4'>
            <div className="transition-all pl-2 pr-2 lg:h-10 h-14 flex lg:text-base lg:sticky text-sm dark:bg-gray-600 bg-gray-300 dark:text-white text-gray-900 lg:m-1 lg:rounded-md items-center">
                <Link to="/" className="transition-all hover:rounded-md dark:hover:bg-white dark:hover:text-gray-600 hover:bg-gray-800 hover:text-white font-bold text-2xl font-mono">Thanh's Website</Link>
                <NavbarList />
                <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <NavbarHam isOpen={isOpen} />
        </div>
    )
}