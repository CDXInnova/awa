import React from 'react'
import { RiSearchLine, RiShoppingCart2Fill   } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className='w-full h-[70px] bg-zinc-900 text-white flex items-center justify-center'>
        <div className='w-[80%] flex items-center justify-between py-3'>
            <div class="relative w-[500px]">
                <input type="text" class="bg-zinc-800 text-zinc-300 rounded-xl px-4 py-2 pr-10 w-full h-[40px]" placeholder="Buscar producto..." />
                <RiSearchLine  class="absolute top-0 right-0  h-[38px] w-10 text-white bg-sky-500 p-1 rounded-xl cursor-pointer"/>
            </div>
            <div className='flex items-center gap-x-4'>
                <button className='p-2 px-4 bg-sky-500 rounded-lg text-white cursor-pointer'>
                    Inicia Sesion
                </button>
                <RiShoppingCart2Fill className='text-sky-500 text-[35px] cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default NavBar