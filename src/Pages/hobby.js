
const initialState = {
    list: [],
    id: null
}

const hobbyReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case "ADD_HOBBY": {
            const newState = [...state.list]
            newState.push(action.payload)
            return {
                ...state,
                list: newState
            }
        }

        case "SET_ACTION_HOBBY": {
            return state
        }
        
        default:
            return state
    }
}

export default hobbyReducer