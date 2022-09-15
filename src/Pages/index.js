
import  useReducer  from "./user"
import { combineReducers } from "redux"
import hobbyReducer from "./hobby"
const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: useReducer
})

export default rootReducer