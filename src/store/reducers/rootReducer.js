import {combineReducers} from 'redux'
import siteSettingsReducer from "./siteSettingsReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";






const rootReducer =combineReducers({
  siteSettings:siteSettingsReducer,
  products:productsReducer,
  cart:cartReducer

})
export default rootReducer;
