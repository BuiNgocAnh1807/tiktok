import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addNewHobby } from "../action/actionIndex"

const randomNumber = () => {
    return Math.floor(Math.random() * 100)
}

function HomePage(options) {
    
    const hobbyList = useSelector(state => state.hobby.list)
    const dispatch = useDispatch()
    
    const handleHomeList = () =>{

        const newId = randomNumber()

        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }

        const action = addNewHobby(newHobby)
        dispatch(action)
    }


    return (
        <ul>
            <button onClick={handleHomeList}>Click</button>
            {hobbyList.map(hobby => {
                return (
                    <li key={hobby.id}>{hobby.title}</li>
                )
            })}
        </ul>
    )
}

export default HomePage