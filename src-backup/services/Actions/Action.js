import {ADD_TO_CART}  from "../reducers/constants"
const addToCart = (data) =>{
     return {
            type: ADD_TO_CART,
            data: data
     }
}

export default addToCart;