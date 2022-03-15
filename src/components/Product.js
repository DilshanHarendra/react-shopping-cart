import React from 'react'

function Product({data}){
    return(
        <div className="w-full relative">
            {data.details.tag&&<span className="bg-black text-white text-xs  px-2 py-1 absolute top-0 right-0  block">{data.details.tag}</span>}

            <img className="product-image object-cover w-full" src={data.details.image} alt={data.name}/>
            <p className="text-center line-clamp-2 mt-4" style={{minHeight:'3.1rem'}}>{data.name}</p>
            <span className="bg-primary block mx-auto w-8" style={{minHeight:'2px'}}></span>
            <p className="text-center mt-3  ">$<span className="text-2xl font-semibold">{data.details.price}</span> </p>
            <p className="text-center text-gray-500">or 9  x $1.21</p>
            <button className="bg-black hover:bg-gray-800 text-white mt-5 px-4 py-2 w-full block">Add to cart</button>
        </div>
    )
}export default Product
