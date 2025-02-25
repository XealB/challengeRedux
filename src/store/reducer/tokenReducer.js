import { PROCESS, SETNUMBER } from "../actions-type/token-action-type"



const initialState = {
    number: "",
    tokens: {
        100: 0,
        50: 0,
        1: 0
    }
}

const tokenReducer = (state=initialState, action) => {
    
    switch(action.type) {

        case SETNUMBER:
            return{
                ...state,
                number: action.payload
            }

        case PROCESS:
            return{
                ...state,
                tokens: {
                    100: Math.floor(state.number / 100),
                    50: Math.floor(state.number % 100 / 50),
                    1: state.number % 50
                }
            }

        default:
            return state
    }

}

export default tokenReducer