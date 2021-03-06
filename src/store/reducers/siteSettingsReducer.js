import {
    OPEN_CART,
    OPEN_CLOSE_CART


} from "../types/siteSettingsType";

const init ={
    isCartOpen:false

}

export default function siteSettingsReducer(state=init,action){
    switch (action.type){
        case OPEN_CLOSE_CART:{
            return{
                ...state,
                isCartOpen:!state.isCartOpen
            }
        };
        case OPEN_CART:{
            return{
                ...state,
                isCartOpen:true
            }
        };


        default:return state
    }
}
