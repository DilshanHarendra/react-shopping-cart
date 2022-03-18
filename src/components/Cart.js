import React from 'react'
import CartItem from "./CartItem";
import {motion} from "framer-motion";
import {sideBarAnimation} from "../helper/animations";
import {connect} from "react-redux";
import {openCloseCart} from "../store/actions/siteSettingsAction";
function Cart(props){




    return(<motion.div
            variants={sideBarAnimation}
            initial="init"
            animate="animate"
            exit="exit"
            className="fixed right-0 top-0 text-white h-screen  max-h-screen  overflow-x-hidden  w-400 bg-gray-900 z-10">
        <button onClick={()=>props.openCloseCart()} className="text-white absolute left-0 hover:text-red-500 top-0  w-10 h-10 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <div  style={{width:'5rem'}} className="relative h-8 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {props.cart.products.length>0&& <span  style={{fontSize:'8px',minWidth:'16px',minHeight:'16px'}} className="absolute bottom-0 right-5  bg-primary   -mb-1  grid place-items-center text-black rounded-full">{props.cart.products.length}</span>}

        </div>

        {
            props.cart.products.length>0?
                <>
                    <div className="pb-24 overflow-y-auto scroll-hide" style={{maxHeight:'80vh'}}>
                        {props.cart.products.map(product=><CartItem key={product.id} data={product}/>)}

                    </div>
                    <div className="px-4 mt-2 absolute w-full bottom-0">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 uppercase">subtotal</p>
                            <div>
                                <p className="text-primary text-right">${props.cart.total}</p>
                            </div>
                        </div>
                        <button className="bg-black uppercase w-full py-2 mb-2 cursor-pointer hover:bg-gray-800 mt-3">
                            checkout
                        </button>
                    </div>
                </>
                :
                <>
                    <p className="text-center text-gray-500">No Products</p>
                </>


        }




    </motion.div>)
}const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps,{openCloseCart})(Cart)
