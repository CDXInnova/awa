"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className='h-full bg-zinc-900'>
      <nav className='bg-zinc-900 top-0 w-full p-3 py-4 flex justify-between z-40'>
        <div className="md:flex hidden flex-1"></div>
        <div className="md:flex hidden items-center">
          <div className="flex gap-x-2 items-center">
            <Image src="/images/logoHero.png" className="w-[3rem] h-[3rem] drop-shadow-lg" alt="panda_logo" width={500}
              height={500} />
            <p className="font-bold drop-shadow-xl tracking-wider text-[22px] text-white">INAWAY</p>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end gap-x-4'>
          {
            pathname !== "/auth/login" && <Link href="/auth/login" className='px-5 py-1 font-semibold border-[2px] rounded-lg text-sky-300 border-sky-500 bg-transparent text-[18px] hover:bg-sky-300 hover:border-sky-300 hover:text-zinc-950 transition delay-50'>
              Inicia Sesión
            </Link>
          }
          {
            pathname !== "/auth/signup" && <Link href="/auth/signup" className='px-5 py-1 font-semibold border-[2px] rounded-lg text-white border-sky-500 bg-sky-500 text-[18px] hover:bg-sky-300 hover:border-sky-300 hover:text-zinc-950 transition delay-50'>
              Regístrate
            </Link>
          }
        </div>
      </nav>
      {children}
    </div>
  )
}

export default AuthLayout