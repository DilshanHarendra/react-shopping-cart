import React from 'react'
import Product from "../../components/Product";

function Products(){
    return(
            <div className="w-full ml-5">
                <div className="w-full flex items-center justify-between">
                        <p>17 Product(s) found</p>

                        <div className="flex items-center w-1/4">
                            <label htmlFor="" className="whitespace-nowrap">Order by</label>
                            <select name="" id="" className="ml-2 form-select block w-full  text-sm p-2 bg-gray-100 focus:bg-gray-100 border-solid border border-gray-200 focus:outline-none rounded focus:border-primary">
                                <option value="">Name</option>
                            </select>
                        </div>
                    </div>
                <div className="mt-2 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {[1,2,3,4,5,6,7,8,9].map(product=><Product key={product}/>)}
                </div>
            </div>
    )
}export default Products
