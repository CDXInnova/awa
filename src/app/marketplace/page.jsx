import Card from '@/components/card/Card'
import React from 'react'
import { products } from '@/utils/products'

const Marketplace = () => {
  return (
    <div className="bg-zinc-900 flex justify-center text-white w-full overflow-y-auto" style={{ maxHeight: "calc(100vh - 70px)" }}>
      <div className='w-[80%] py-6 flex flex-wrap justify-between gap-8'>
        {
          products.map((product) => {
            return <Card key={product.id} product={product} />
          })
        }
      </div>
    </div>
  )
}

export default Marketplace