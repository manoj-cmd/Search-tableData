import { ADD_TO_CART } from "../reducers/constants";
const inisialState = {
    cardData: []
}
export default function cardIteam(state = inisialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data
            }
            break;
        default:
            return state
    }
}