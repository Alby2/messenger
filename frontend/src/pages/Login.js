import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {emailChanged,passwordChanged} from '../redux/slices/login'  
import { isAuthChanged,userChanged } from '../redux/slices/auth'
import AuthContext from '../context/AuthContext'

const Login = () => {
    const auth = useSelector((state)=> state.auth)
    const {isAuth} = auth
    console.log(isAuth);

    const set = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const authUser = async()=>{
        await axios({
            method:'POST',
            url:`${process.env.REACT_APP_URL_BACK}auth/connexion`,
            data:{
                email,password
            },
            withCredentials:true
        }).then((res)=>{
            if(res.status === 200){
                set(userChanged(res.data.user))
                set(isAuthChanged())
            
            };
        }).catch((error)=>{
            console.log('error', error)
        })
    }
  return (
    <div>
        {!isAuth ?(<>
        <input type="email" value={email}  onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  />
        <button onClick={()=> {authUser()}}>
            Connexion
        </button></>):"Vous etes connecté" }

    </div>
  )
}

export default Login