import React from 'react'
import ProductLoading from "../../components/ProductLoading";


function Products(){


    return(
        <>
            {<div className="w-full ml-5">
                <div className="mt-3 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {[1,2,3,4,5,6,7,8].map(item=><ProductLoading  key={item}/>)}
                </div>



            </div>}
        </>
    )
}export default Products

