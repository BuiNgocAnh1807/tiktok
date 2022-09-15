export const addNewHobby = (hobby) => {
    return{
        type: 'ADD_HOBBY',
        payload: hobby
    }
}

export const setActionHobby = (hobby) => {
    return{
        type: 'SET_ACTION_HOBBY',
        payload: hobby
    }
}