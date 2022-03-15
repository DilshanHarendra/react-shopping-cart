import React from 'react'

function Product(){
    return(
        <div className="w-full relative">
            <span className="bg-black text-white text-xs  px-2 py-1 absolute top-0 right-0  block">Free shipping</span>
            <img className="aspect-5/4 w-full " src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGZhc2hpb258ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt=""/>
            <p className="text-center line-clamp-2 mt-4" style={{minHeight:'3.1rem'}}>this is product full name  this can be 2 3 lines Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consequuntur cupiditate deserunt doloremque, earum est facere ipsa iure maiores molestiae neque nesciunt obcaecati odio porro qui, sequi, tenetur ullam?</p>
            <span className="bg-primary block mx-auto w-8" style={{minHeight:'2px'}}></span>
            <p className="text-center mt-3  ">$<span className="text-2xl font-semibold">10.45</span> </p>
            <p className="text-center text-gray-500">or 9  x $1.21</p>
            <button className="bg-black hover:bg-gray-800 text-white mt-5 px-4 py-2 w-full block">Add to cart</button>
        </div>
    )
}export default Product
