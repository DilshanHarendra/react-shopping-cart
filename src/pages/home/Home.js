import React from 'react'
import ProductFilters from "./ProductFilters";
import Products from "./Products";

function Home(props){
    return(<div className="flex items-start justify-between">
            <ProductFilters/>
            <Products/>
     </div>)
}export default Home
