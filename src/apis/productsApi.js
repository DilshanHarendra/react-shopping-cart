import axios from "../helper/axios";

export default {
    getAllProducts(){
        return axios.get('prasadhewage/ecommerce/shipments')
    }
}
