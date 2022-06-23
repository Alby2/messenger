import React from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {emailChanged,firstnameChanged,lastnameChanged,passwordChanged} from '../redux/slices/signin'
const Signin = () => {
  const signin = useSelector((state)=>state.signin)
  const {email,firstname,lastname,password} = signin
  const set = useDispatch()
  const signUser = async()=>{
    await axios({
      method:"post",
      url:"http://localhost:8080/api/v1/auth/inscription",
      data:{
        email,password,firstname,lastname
      }
    }).then((response)=>{
      console.log('response :>> ', response.data);
    }).catch((error)=>{
      console.log('error :>> ', error);
    })
  }
  return (
    <div>
      
        <input type="email" value={email} onChange={(e)=> set(emailChanged(e.target.value))} /><br />
        <input type="text" value={firstname} onChange={(e)=>{set(firstnameChanged(e.target.value))}} /><br />
        <input type="text" value={lastname} onChange={(e)=>{set(lastnameChanged(e.target.value))}} /><br />
        <input type="password" value={password} onChange={(e)=>{set(passwordChanged(e.target.value))}} /><br />
        <button onClick={()=> {signUser()}}>Inscription</button>
    </div>
  )
}

export default Signin