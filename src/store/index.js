import { legacy_createStore as createStore, combineReducers} from "redux"
import tokenReducer from "./reducer/TokenReducer"





const store = createStore(
 combineReducers({
    tokens: tokenReducer
 }),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store