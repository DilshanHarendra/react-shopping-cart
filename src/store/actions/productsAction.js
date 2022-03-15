import {GET_PRODUCTS} from "../types/productsType";
import productsApi from "../../apis/productsApi";



export const getProducts = ()=>dispatch=>{
   return new Promise((resolve,reject)=>{
       productsApi.getAllProducts().then(res=>{
           dispatch({
               type: GET_PRODUCTS,
               payload:res.data
           })
           resolve(res.data)
       }).catch(err=>{
            reject(err)
       })

   })




}



