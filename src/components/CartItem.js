import React from 'react'

function CartItem({data}){
    return( <div className="flex items-center p-4">
                <img className="aspect-5/4 w-12 " src={data.details.image} alt={data.name}/>
                <div className="px-2">
                    <p className="line-clamp-1">{data.name}</p>
                    <p className="text-gray-500 text-sm">Quantity {data.qty}</p>
                </div>
                <p className="text-primary whitespace-nowrap">$ {data.details.price}</p>
            </div>)
}export default CartItem
