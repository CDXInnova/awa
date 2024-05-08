import React from 'react';
import Image from 'next/image';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
    <div
        className={`w-[48px] h-[48px] rounded-[10px]
                    ${isActive && isActive === name ? 'bg-[#2c2f32]' : ''}
                    flex justify-center items-center
                    ${!disabled ? 'cursor-pointer hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#2c2f32] focus:ring-opacity-50' : 'opacity-50'} 
                    transition duration-150 ease-in-out
                    ${styles}`}
        onClick={!disabled ? handleClick : undefined}
        role={!disabled ? 'button' : undefined}
        tabIndex={!disabled ? 0 : undefined}
    >
        <Image
            src={imgUrl}
            alt="fund_logo"
            width={24}
            height={24}
            className={`${isActive && isActive !== name ? 'grayscale' : ''}`}
            objectFit="cover"
        />
    </div>
);

export default Icon;
