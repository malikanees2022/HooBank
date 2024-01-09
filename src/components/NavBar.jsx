import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../Constants/index'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className="bg-[#00040F] w-full overflow-hidden">
                <div className="sm:px-16 px-6 flex justify-center items-center">
                    <div className="xl:max-w-[1280px] w-full text-white">
                        <nav className='w-full flex py-6 justify-between items-center navbar'>
                            <img src={logo} alt="HooBank" className='w-[124px] h-[32px]' />
                            <ul className='gap-x-10 list-none md:flex hidden justify-end items-center flex-1'>
                                {navLinks.map((nav, index) => (
                                    <li key={nav.id}
                                        className={`font-poppins font-normal cursor-pointer text-base text-white`}
                                    >
                                        <a href={`#${nav.id}`}>
                                            {nav.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className='md:hidden sm:flex justify-end items-center'>
                                <img
                                    className='w-[28px]  object-contain h-[28px] cursor-pointer'
                                    src={toggle ? close : menu}
                                    alt="Hamburger"
                                    onClick={() => setToggle((prev) => !prev)}
                                />
                            </div>
                            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                                <ul className='gap-y-4 list-none flex flex-col justify-end items-center flex-1'>
                                    {navLinks.map((nav, index) => (
                                        <li key={nav.id}
                                            className={`font-poppins font-normal cursor-pointer text-base text-white`}
                                        >
                                            <a href={`#${nav.id}`}>
                                                {nav.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
