import React from 'react'
import Image from 'next/image'

const Card = ({ product }) => {
  return (
    <div className='w-[250px] h-[410px] rounded-3xl bg-zinc-800 shadow-xl flex flex-col '>
      <div className=' flex justify-center items-center relative mb-2'>
        <div className='absolute -top-2 -right-2 bg-sky-600 text-white p-3 rounded-xl'>
          -{product?.descuento}%
        </div>
        <div className='w-full flex items-center justify-center overflow-hidden rounded-2xl bg-white'>
          <Image
            alt="product"
            src={product?.URL_imagen}
            quality={100}
            sizes='100vw'
            width={200}
            height={200}
            className='w-[200px] h-[200px] object-cover rounded-lg'
          />
        </div>
      </div>
      <div className='w-full p-2 flex flex-col'>
        <span className='bg-zinc-700 rounded-lg p-2 text-[14px] font-bold w-[105px] tex-center mb-1'>Recibilo Hoy</span>
        <span className='text-white text-[14px] mb-2'>{product?.marca}</span>
        <div className='text-gray-300 text-[14px] mb-2'>I{product?.modelo}</div>
        <span className='text-gray-300 text-[12px]'><del>$/{product?.precio_anterior}</del></span>
        <span className='text-gray-300 text-[14px] '>$/{product?.precio_actual}</span>
        <span className='text-sky-400 text-[17px] font-bold'>$/{product?.precio_con_oferta}</span>
      </div>
    </div>
  )
}

export default Card