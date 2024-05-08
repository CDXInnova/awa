"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { menuLink } from './menuLink/menuLink';
import { RiAlipayFill } from "react-icons/ri";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className='flex h-screen pl-2 flex-col gap-3 py-4'>
            <div className='bg-zinc-800 rounded-xl w-full mb-4 p-3'>
                <RiAlipayFill className='text-emerald-500 text-[40px]'/> 
            </div>
            <div className="sidebar bg-zinc-800 rounded-xl flex flex-col justify-center items-center">
                {menuLink.map(({ name, imgUrl, link, disabled }) => (
                    <Link href={link} legacyBehavior key={name}>
                        <a className={`text-white text-[14px] mb-2 ${pathname === link ? 'active' : ''}`} tabIndex={disabled ? -1 : 0}>
                            <Icon
                                name={name}
                                imgUrl={imgUrl}
                                isActive={pathname === link}
                                disabled={disabled}
                                handleClick={() => { }}
                            />
                            {/* {!disabled && name} */}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
        
    );
};

export default Sidebar;