import React from 'react'
import {Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import {AnimatePresence} from "framer-motion";
import {connect} from "react-redux";
import {openCloseCart} from "../store/actions/siteSettingsAction";

function BaseLayout(props){
    return(<div className="container mx-auto px-2 pt-5">
        <Outlet/>
        <button onClick={()=>props.openCloseCart()} className="fixed top-0 right-0 bg-black hover:bg-gray-800 w-12 h-12  text-white cursor-pointer">
            <div className="relative w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mx-auto ${props.cart.products.length>0?'mt-2':'mt-4'} `} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {
                    props.cart.products.length>0&&<span style={{fontSize:'8px',minWidth:'16px',minHeight:'16px'}} className="absolute bottom-0 right-2 mb-3 bg-primary  grid place-items-center text-black rounded-full">{props.cart.products.length}</span>

                }
            </div>
        </button>

        <AnimatePresence exitBeforeEnter>
            {props.siteSettings.isCartOpen&&<Cart/>}

        </AnimatePresence>

    </div>)
}const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps,{openCloseCart})(BaseLayout)
