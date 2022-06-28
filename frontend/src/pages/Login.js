import axios from 'axios'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {emailChanged,passwordChanged} from '../redux/slices/login'  
import { isAuthChanged } from '../redux/slices/auth'

const Login = () => {
    const set = useDispatch()
    const login = useSelector((state)=> state.login)
    const auth = useSelector((state)=>state.auth)
    const {isAuth} = auth
    const {email,password} = login
    console.log(`${process.env.REACT_APP_URL_BACK}auth/connexion`);
    const authUser = async()=>{
        await axios({
            method:'POST',
            url:`${process.env.REACT_APP_URL_BACK}auth/connexion`,
            data:{
                email,password
            },
            withCredentials:true
        }).then((response)=>{
            if(response.status === 200){
                console.log('response.data', response.data)
                set(isAuthChanged())
            };
        }).catch((error)=>{
            console.log('error', error)
        })
    }
  return (
    <div>
        {!isAuth ?(<>
        <input type="email" value={email}  onChange={(e)=> set(emailChanged(e.target.value))} />
        <input type="password" value={password} onChange={(e)=> set(passwordChanged(e.target.value))}  />
        <button onClick={()=> {authUser()}}>
            Connexion
        </button></>):"Vous etes connecté" }

    </div>
  )
}

export default Login