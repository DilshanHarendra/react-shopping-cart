import {
    OPEN_CLOSE_CART
} from "../types/siteSettingsType";


export const openCloseCart = ()=>dispatch=>{
    dispatch({
        type: OPEN_CLOSE_CART,
        payload:''
    })

}



