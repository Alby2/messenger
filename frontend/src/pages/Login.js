import axios from 'axios'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {emailChanged,passwordChanged} from '../redux/slices/login'  

const Login = () => {
    const set = useDispatch()
    const login = useSelector((state)=> state.login)
    const {email,password} = login
    const authUser = async()=>{
        axios({
            method:'POST',
            url:"http://localhost:8080/api/v1/auth/connexion",
            data:{
                email,password
            }
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log('error', error)
        })
    }
  return (
    <div>
        <input type="email" value={email}  onChange={(e)=> set(emailChanged(e.target.value))} />
        <input type="password" value={password} onChange={(e)=> set(passwordChanged(e.target.value))}  />
        <button onClick={()=> {authUser()}}>
            Connexion
        </button>

    </div>
  )
}

export default Login