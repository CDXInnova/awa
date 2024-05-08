"use client"

import React, { useState } from 'react';
import { HiUserGroup } from "react-icons/hi2";
import { BsPersonFillGear } from "react-icons/bs";
import { FaBox, FaTag, FaShoppingCart, FaSignOutAlt, FaCheckCircle, FaLink } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import ModalNivel from '../modal/ModalNivel';
import { useDisclosure } from "@nextui-org/react";
import { IoCopyOutline } from "react-icons/io5";


const Content = () => {
    const [nivel, setNivel] = useState("");
    const {
        isOpen: isModalNivelOpen,
        onOpen: onModalNivellOpen,
        onOpenChange: onModalNivelChange,
    } = useDisclosure();

    const handleClickNivel = (nivelNombre) => {
        setNivel(nivelNombre);
        onModalNivellOpen();
    }

    return (
        <div className="flex flex-col w-full overflow-y-auto max-h-[calc(100vh-64px)] gap-6">
            <ModalNivel isOpen={isModalNivelOpen} onOpenChange={onModalNivelChange} nivel={nivel} />
            <div className="flex flex-wrap justify-around mb-2 border-b-[2px] border-gray-700 pb-4">
                <div className="bg-zinc-900 hover:bg-zinc-700 hover:scale-105  transition-colors rounded-2xl shadow-lg sm:w-1/2 flex-1 max-w-[calc(50%-1rem)] p-3 px-4 m-2">
                    <div className="flex flex-col items-center justify-between mb-8">
                        <h2 className="font-extrabold text-[40px] lg:text-[50px] md:text-[30px] sm:text-[20px] text-sky-400 ">18</h2>
                        <p className="text-[20px] lg:text-[30px] md:text-[15px] sm:text-[10px] font-semibold text-gray-100">Vitalicios</p>
                        <HiUserGroup className="font-extrabold text-[30px] lg:text-[50px] md:text-[25px] sm:text-[20px] text-sky-400 " />
                    </div>
                </div>
                <div className="bg-zinc-900 hover:bg-zinc-700 hover:scale-105  transition-colors rounded-2xl shadow-lg sm:w-1/2 flex-1 max-w-[calc(50%-1rem)] p-3 px-4 m-2">
                    <div className="flex flex-col items-center justify-between mb-8">
                        <h2 className="font-extrabold text-[40px] lg:text-[50px] md:text-[30px] sm:text-[20px] text-sky-400">21</h2>
                        <p className="text-[20px] lg:text-[30px] md:text-[15px] sm:text-[10px] font-semibold text-gray-100">Usuarios</p>
                        <BsPersonFillGear className="font-extrabold text-[30px] lg:text-[50px] md:text-[25px] sm:text-[20px] text-sky-400" />
                    </div>
                </div>
                <div className="bg-zinc-900 hover:bg-zinc-700 hover:scale-105  transition-colors rounded-2xl shadow-lg sm:w-1/2 flex-1 max-w-[calc(50%-1rem)] p-3 px-4 m-2">
                    <div className="flex flex-col items-center justify-between mb-8">
                        <h2 className="font-extrabold text-[40px] lg:text-[50px] md:text-[30px] sm:text-[20px] text-sky-400">2</h2>
                        <p className="text-[20px] lg:text-[30px] md:text-[15px] sm:text-[10px] font-semibold text-gray-100">Containers</p>
                        <FaBox className="font-extrabold text-[30px] lg:text-[50px] md:text-[25px] sm:text-[20px] text-sky-400" />
                    </div>
                </div>
                <div className="bg-zinc-900 hover:bg-zinc-700 hover:scale-105  transition-colors rounded-2xl shadow-lg sm:w-1/2 flex-1 max-w-[calc(50%-1rem)] p-3 px-4 m-2">
                    <div className="flex flex-col items-center justify-between mb-8">
                        <h2 className="font-extrabold text-[40px] lg:text-[50px] md:text-[30px] sm:text-[20px] text-sky-400">4</h2>
                        <p className="text-[20px] lg:text-[30px] md:text-[15px] sm:text-[10px] font-semibold text-gray-100">Categorias</p>
                        <FaTag className="font-extrabold text-[30px] lg:text-[50px] md:text-[25px] sm:text-[20px] text-sky-400" />
                    </div>
                </div>
                <div className="bg-zinc-900 hover:bg-zinc-700 hover:scale-105  transition-colors rounded-2xl shadow-lg sm:w-1/2 flex-1 max-w-[calc(50%-1rem)] p-3 px-4 m-2">
                    <div className="flex flex-col items-center justify-between mb-8">
                        <h2 className="font-extrabold text-[40px] lg:text-[50px] md:text-[30px] sm:text-[20px] text-sky-400">0</h2>
                        <p className="text-[20px] lg:text-[30px] md:text-[15px] sm:text-[10px] font-semibold text-gray-100">Franquicias</p>
                        <FaShop className="font-extrabold text-[30px] lg:text-[50px] md:text-[25px] sm:text-[20px] text-sky-400" />
                    </div>
                </div>
                <div className="bg-zinc-900 hover:bg-zinc-700 hover:scale-105  transition-colors rounded-2xl shadow-lg sm:w-1/2 flex-1 max-w-[calc(50%-1rem)] p-3 px-4 m-2">
                    <div className="flex flex-col items-center justify-between mb-8">
                        <h2 className="font-extrabold text-[40px] lg:text-[50px] md:text-[30px] sm:text-[20px] text-sky-400">0</h2>
                        <p className="text-[20px] lg:text-[30px] md:text-[15px] sm:text-[10px] font-semibold text-gray-100">Ventas</p>
                        <FaShoppingCart className="font-extrabold text-[30px] lg:text-[50px] md:text-[25px] sm:text-[20px] text-sky-400" />
                    </div>
                </div>
            </div>


            <div className="w-full text-white px-6 border-b-[2px] mb-8 border-gray-700 pb-8">
                <h2 className="text-[30px] font-bold mb-3 text-left">INFORMACIÓN DE NEGOCIO</h2>
                <div id="referral-section" className="md:w-1/2 w-full flex justify-center items-center py-8">
                    <div className="bg-zinc-900 w-full p-4 rounded-2xl text-white text-center">
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <FaCheckCircle className="mr-2 text-green-400" />
                                    <span className="text-sm">enriquetelleria</span>
                                    <button>
                                        <IoCopyOutline />
                                    </button>
                                </div>
                                <button className="text-red-500 flex items-center">
                                    Logout <FaSignOutAlt className="ml-1" />
                                </button>
                            </div>

                            <div className="flex justify-between items-center mb-2">
                                <div className='flex gap-x-1'>
                                    <span className="text-sm text-gray-400">TXjz...7mBx</span>
                                    <button>
                                        <IoCopyOutline />
                                    </button>
                                </div>

                                <a href="#" className="text-blue-500 flex items-center">
                                    Tronscan <FaLink className="ml-1" />
                                </a>
                            </div>

                        </div>

                        <div className="w-full referral-info flex justify-around my-4 mb-8">
                            <div className="flex flex-col w-1/2">
                                <p className="w-full text-left text-sm mb-1">REFERIDOS: <span className="ml-2">0</span></p>
                                <p className="w-full text-left text-sm mb-1">BONOS: <span className="ml-2">0</span></p>
                                <p className="w-full text-left text-sm mb-1">RESIDUALES: <span className="ml-2">0</span></p>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <p className="w-full text-left text-sm mb-1">NIVEL: <span id="nivel" className="ml-2">1</span></p>
                                <p className="w-full text-left text-sm mb-1">CONTRIBUCIÓN: <span className="ml-2">$0</span></p>
                                <p className="w-full text-left text-sm mb-1">FRANQUICIADOS: <span className="ml-2">0</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex flex-wrap justify-center w-full gap-5 mb-6 px-4'>
                <div onClick={() => handleClickNivel("nivel1")} className="rounded-2xl bg-zinc-900 hover:scale-105 transition-all duration-100 md:w-[300px] sm:w-[200px] w-[150px] sm:h-[200px] h-[150px] p-2 overflow-hidden text-center cursor-pointer">
                    <div className='bg-sky-400 w-full sm:h-[120px] h-[90px] flex items-center justify-center text-center mb-3 rounded-xl'>
                        <FaShoppingCart className='text-[40px] text-zinc-900' />
                    </div>
                    <h4 className='text-white'>Nivel 1</h4>
                </div>
                <div onClick={() => handleClickNivel("nivel2")} className="opacity-50 rounded-2xl bg-zinc-900 md:w-[300px] sm:w-[200px] w-[150px] sm:h-[200px] h-[150px] p-2 overflow-hidden text-center ">
                    <div className='bg-sky-400 w-full sm:h-[120px] h-[90px] flex items-center justify-center text-center mb-3 rounded-xl'>
                        <FaShoppingCart className='text-[40px] text-zinc-900' />
                    </div>
                    <h4 className='text-white'>Nivel 2</h4>
                </div>
                <div onClick={() => handleClickNivel("nivel3")} className="opacity-50 rounded-2xl bg-zinc-900 md:w-[300px] sm:w-[200px] w-[150px] sm:h-[200px] h-[150px] p-2 overflow-hidden text-center">
                    <div className='bg-sky-400 w-full sm:h-[120px] h-[90px] flex items-center justify-center text-center mb-3 rounded-xl'>
                        <FaShoppingCart className='text-[40px] text-zinc-900' />
                    </div>
                    <h4 className='text-white'>Nivel 3</h4>
                </div>
                <div onClick={() => handleClickNivel("nivel4")} className="opacity-50 rounded-2xl bg-zinc-900 md:w-[300px] sm:w-[200px] w-[150px] sm:h-[200px] h-[150px] p-2 overflow-hidden text-center">
                    <div className='bg-sky-400 w-full sm:h-[120px] h-[90px] flex items-center justify-center text-center mb-3 rounded-xl'>
                        <FaShoppingCart className='text-[40px] text-zinc-900' />
                    </div>
                    <h4 className='text-white'>Nivel 4</h4>
                </div>
                <div onClick={() => handleClickNivel("nivel5")} className="opacity-50 rounded-2xl bg-zinc-900 md:w-[300px] sm:w-[200px] w-[150px] sm:h-[200px] h-[150px] p-2 overflow-hidden text-center ">
                    <div className='bg-sky-400 w-full sm:h-[120px] h-[90px] flex items-center justify-center text-center mb-3 rounded-xl'>
                        <FaShoppingCart className='text-[40px] text-zinc-900' />
                    </div>
                    <h4 className='text-white'>Nivel 5</h4>
                </div>
                <div onClick={() => handleClickNivel("nivel6")} className="opacity-50 rounded-2xl bg-zinc-900 md:w-[300px] sm:w-[200px] w-[150px] sm:h-[200px] h-[150px] p-2 overflow-hidden text-center ">
                    <div className='bg-sky-400 w-full sm:h-[120px] h-[90px] flex items-center justify-center text-center mb-3 rounded-xl'>
                        <FaShoppingCart className='text-[40px] text-zinc-900' />
                    </div>
                    <h4 className='text-white'>Nivel 6</h4>
                </div>
                <div onClick={() => handleClickNivel("nivel7")} className="opacity-50 rounded-2xl bg-zinc-900 md:w-[300px] sm:w-[200px] w-[150px] sm:h-[200px] h-[150px] p-2 overflow-hidden text-center ">
                    <div className='bg-sky-400 w-full sm:h-[120px] h-[90px] flex items-center justify-center text-center mb-3 rounded-xl'>
                        <FaShoppingCart className='text-[40px] text-zinc-900' />
                    </div>
                    <h4 className='text-white'>Nivel 7</h4>
                </div>
            </div>

            <div className="flex items-center w-full h-screen pb-10">
                <div className="md:w-1/2 w-full p-8 bg-zinc-900 rounded-lg shadow-lg">
                    <h2 className="text-[30px] text-white">Pre-Lanzamiento</h2>
                    <p className="text-sky-300 text-[20px]">
                        Canon para franquicias
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Content;
