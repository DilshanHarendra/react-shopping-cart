import React, {useEffect, useState} from 'react'
import ProductFilters from "./ProductFilters";
import Products from "./Products";
import {connect} from "react-redux";
import {getProducts} from "../../store/actions/productsAction";
import ProductsLoading from "./ProductsLoading";

function Home(props){

    const[loading,setLoading]=useState(true)
    const [products,setProducts]=useState([])
    useEffect(()=>{
        if (props.products.products.length==0){
            props.getProducts().then(res=>{
                setProducts(res)
                setLoading(false)
            })
        }else {
                setProducts(props.products.products)
                setLoading(false)
        }

    },[])

    function sizeFilter(size){
        setLoading(true)
        if (size){
            let filterProducts=props.products.products.filter(pro=>pro.details.size==size)
            setProducts(filterProducts)
            setLoading(false)
        }else {
            setProducts(props.products.products)
            setLoading(false)
        }

    }

    return(<div className="flex items-start justify-between">
            <ProductFilters sizeFilter={sizeFilter}/>
        {
            loading?
                <ProductsLoading/>
                :
                <Products products={products}/>
        }

     </div>)
}const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps,{getProducts})(Home)


