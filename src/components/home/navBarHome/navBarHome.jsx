"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import { IoNotifications } from "react-icons/io5";
import { BiSolidDownArrow, BiMenu } from "react-icons/bi";

const NavBarHome = ({ onToggleSidebar }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-sky-600 py-3 rounded-md flex justify-between items-center px-4">
            <button onClick={onToggleSidebar} className="text-white focus:outline-none">
                <BiMenu size={30} />
            </button>

            <div className="flex items-center gap-x-4">
                <button id="notifications" className="text-white focus:outline-none">
                    <IoNotifications size={20} />
                </button>

                <div className="relative">
                    <button onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none flex items-center gap-x-2">
                        <Image src="/images/logoBlanco.png" alt="" width={35} height={35} className="rounded-full" />
                        <h4 className="text-white">Jared Delgado</h4>
                        <BiSolidDownArrow />
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-xl z-10">
                            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Perfil</a>
                            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Salir Sesión</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBarHome;
