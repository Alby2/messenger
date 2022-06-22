import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { isAuthChanged } from "../redux/slices/conversation";


const App = () => {
    const conversations = useSelector((state)=>state.conversation)
    
    const set = useDispatch()
  return (
    <>
    <div>
        {conversations.isAuth}
        <button onClick={()=> set(isAuthChanged())}>
            setState
        </button>
    </div>
    </>
  )
}

export default App