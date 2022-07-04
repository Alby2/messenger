import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useDispatch } from 'react-redux'
import AuthContext from './context/AuthContext';
import { userChanged,isAuthChanged } from './redux/slices/auth';
import Routes from "./routes"


const App = () => {
  const [id, setId] = useState(null)
    const set =   useDispatch()
    useEffect(async() => {
      await axios({
        method:"GET",
        url:`${process.env.REACT_APP_URL_BACK}checkAuth/id`,
        withCredentials: true,
      }).then((res)=>{
          setId(res.data.user._id)
          set(userChanged(res.data.user))
          set(isAuthChanged())
      }).catch((err)=>{
        console.log('No token Aii')
      })
      
    }, [""])
    
    
  return (
    <>
    <AuthContext.Provider value={id}>
        
        <Routes />
    </AuthContext.Provider>
    </>
  )
}

export default App