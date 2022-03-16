import {ADD_TO_CART} from "../types/cartType";

const init ={
    products:[],
    total:0,

}

export default function cartReducer(state=init,action){
    switch (action.type){
        case ADD_TO_CART:{
            let index=state.products.findIndex(product=>product.id==action.payload.id)
            let total=state.total+action.payload.details.price
            if (index>-1){
                let product=state.products[index]
                let products=[...state.products]
                products.splice(index,1)
                products.push({
                    ...product,
                    qty:product.qty+1
                })
                return {
                    ...state,
                    products,
                    total
                }

            }else {
                return{
                    ...state,
                    products:[...state.products,{...action.payload,qty:1}],
                    total
                }
            }



        };


        default:return state
    }
}
