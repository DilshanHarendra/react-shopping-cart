import {combineReducers} from 'redux'
import siteSettingsReducer from "./siteSettingsReducer";
import productsReducer from "./productsReducer";






const rootReducer =combineReducers({
  siteSettings:siteSettingsReducer,
  products:productsReducer

})
export default rootReducer;
