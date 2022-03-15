import React from 'react'

function CartItem(){
    return( <div className="flex items-center p-4">
        <img className="aspect-5/4 w-12 " src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGZhc2hpb258ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt=""/>
        <div className="px-2">
            <p className="line-clamp-1">this is product full name  this can be 2 3 lines Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consequuntur cupiditate deserunt doloremque, earum est facere ipsa iure maiores molestiae neque nesciunt obcaecati odio porro qui, sequi, tenetur ullam?</p>
            <p className="text-gray-500 text-sm">X | Front the dye print</p>
            <p className="text-gray-500 text-sm">Quantity 2</p>
        </div>
        <p className="text-primary whitespace-nowrap">$ 10.00</p>
    </div>)
}export default CartItem
