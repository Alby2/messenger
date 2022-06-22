import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from '../containers/Navbar';
import App from '../pages/App';
import Conversations from '../pages/Conversations';
import Login from '../pages/Login';
import Signin from '../pages/Signin';
const index = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Navbar/>} >
                <Route index element={<App />} />
                <Route path='conversations' element={<Conversations/>} />
                <Route path='connexion' element={<Login />} />
                <Route path='inscription' element={<Signin />} />
            </Route>

        </Routes>
    </Router>
  )
}

export default index