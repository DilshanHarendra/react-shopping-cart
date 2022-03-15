import {GET_PRODUCTS} from "../types/productsType";

const init ={
    products:[]

}

export default function productsReducer(state=init,action){
    switch (action.type){
        case GET_PRODUCTS:{
            return{
                ...state,
                products:action.payload
            }
        };


        default:return state
    }
}
