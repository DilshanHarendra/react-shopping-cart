import React from 'react'
import Product from "../../components/Product";

function Products(props){


    return(
        <>
            {<div className="w-full ml-5">
                <div className="w-full flex items-center justify-between">
                    <p>{props.products.length} Product(s) found</p>

                    <div className="flex items-center w-1/4">
                        <label htmlFor="" className="whitespace-nowrap">Order by</label>
                        <select name="" id="" className="ml-2 form-select block w-full  text-sm p-2 bg-gray-100 focus:bg-gray-100 border-solid border border-gray-200 focus:outline-none rounded focus:border-primary">
                            <option value="">Name</option>
                        </select>
                    </div>
                </div>
                {
                    props.products.length>0?
                        <div className="mt-3 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                            {props.products.map(product=><Product data={product} key={product.id}/>)}
                        </div>
                        :
                        <div className="w-full mt-3 grid place-items-center h-60">
                            <p className="font-semibold text-xl">No Products</p>
                        </div>
                }

            </div>}
        </>
    )
}export default Products

