import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div>
        <ul>
            <li>
                <Link to="/"> Acceuil</Link>
                <Link to="conversations"> Conversations</Link>
                <Link to="inscription">Inscription</Link>
                <Link to="connexion"> Connexion</Link>
            </li>
        </ul>
    </div>
    <Outlet />
    </>
  )
}

export default Navbar