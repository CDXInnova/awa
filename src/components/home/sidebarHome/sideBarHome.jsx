"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import { BiSolidDownArrow } from "react-icons/bi";
import { FaCoins } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";

const SidebarHome = ({ isOpen, onClose }) => {
    const [areUserOptionsOpen, setAreUserOptionsOpen] = useState(false);

    return (
        <div className={`${!isOpen && "hidden"} fixed inset-0 bg-gray-600/70 z-40`} onClick={onClose}>
            <div className={`bg-zinc-800 min-h-screen w-80 fixed top-0 left-0 transition-all duration-300 z-50 p-4`} onClick={(e) => e.stopPropagation()}>
                <div className='flex flex-col gap-4'>
                    <div className="w-full flex items-center justify-center mb-4">
                        <Image src="/images/logoBlanco.png" alt="logo" width={170} height={60} />
                    </div>
                    <h4 id="username" className="text-2xl font-bold text-white text-center">Jared Delgado Tejada</h4>
                    <div className="p-4 space-y-4">
                        <div className="bg-zinc-700 border-zinc-600 p-4 rounded-xl text-white">
                            <div className="flex items-center justify-between bg-sky-600 rounded-t-xl rounded-b-lg p-2">
                                <FaCoins className="text-xl text-white" />
                                <span className="text-sm font-semibold">Your Token Balance</span>
                            </div>
                            <div id="inaway-balance" className="mt-6 text-lg font-semibold text-center">
                                200 INAWAY
                            </div>
                        </div>
                        <div className="bg-zinc-700 border-zinc-600 p-4 rounded-xl text-white">
                            <div className="flex items-center justify-between bg-sky-600 rounded-t-xl rounded-b-lg p-2">
                                <FaMoneyCheckAlt className="text-xl text-white" />
                                <span className="text-sm font-semibold">Your Total Puchases</span>
                            </div>
                            <div className="mt-6 text-lg font-semibold text-center">
                                300 USDT
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg text-gray-200">Wallet Conectada<span className="text-sky-400 font-bold">:</span></h3>
                        <div id="contract-interface" className="flex items-center gap-x-2 justify-center">
                            <i className="fa-solid fa-wallet"></i>
                            <p id="wallet-info" className="text-white">TXjz...7mBx</p>
                        </div>
                    </div>
                    <ul className="space-y-2 text-white">
                        <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Inicio</a></li>
                        <li >
                            <button
                                className="py-2 px-4 hover:bg-gray-700 flex justify-between items-center w-full text-left"
                                onClick={() => setAreUserOptionsOpen(!areUserOptionsOpen)}
                            >
                                Usuarios
                                <BiSolidDownArrow />
                            </button>
                            {areUserOptionsOpen && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 hover:rounded-b-lg">Equipo</a></li>
                                    <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 hover:rounded-b-lg">Clientes</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 hover:rounded-b-lg">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default SidebarHome;
