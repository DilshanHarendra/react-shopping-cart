import React, {useEffect, useState} from 'react'
import Product from "../../components/Product";
import {connect} from "react-redux";
import {getProducts} from "../../store/actions/productsAction";

function Products(props){


    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        props.getProducts().then(()=>{
            setLoading(false)
        })
    },[])


    return(
        <>
            {!loading&&<div className="w-full ml-5">
                <div className="w-full flex items-center justify-between">
                    <p>{props.products.products.length} Product(s) found</p>

                    <div className="flex items-center w-1/4">
                        <label htmlFor="" className="whitespace-nowrap">Order by</label>
                        <select name="" id="" className="ml-2 form-select block w-full  text-sm p-2 bg-gray-100 focus:bg-gray-100 border-solid border border-gray-200 focus:outline-none rounded focus:border-primary">
                            <option value="">Name</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {props.products.products.map(product=><Product data={product} key={product.id}/>)}
                </div>
            </div>}
        </>
    )
}const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps,{getProducts})(Products)

