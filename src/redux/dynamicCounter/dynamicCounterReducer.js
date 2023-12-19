import { DDECREMENT, DINCREMENT } from "./actionTypes" 

const initialState = {
    value: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DINCREMENT:  
            return {
                ...state,
                value: state.value + action.payload.value
            }
    
        case DDECREMENT: 
            return {
                ...state,
                value: state.value - action.payload.value
            }    

        default:
            return state
    }
}

export default counterReducer;