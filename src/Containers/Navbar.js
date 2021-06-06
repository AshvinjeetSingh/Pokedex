import React from 'react'
import '../CSS/navbar.css'
import {NavLink} from 'react-router-dom'

import '../CSS/navbar.css'

const Navbar = (props) => {
    const {value,count,changeHandler} =props
   
    return (
        <div>
            <nav>
                <img src="https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="/" className="logo"/>
                <h4>Total count {count}</h4>
                <div>
                <input value={value} name={value} placeholder={"Enter Pokemon Name.."} onChange={changeHandler} maxLength={12}/>
                <NavLink to={'/pokemon/test'}>Search</NavLink>
                </div>
                
            </nav>
        </div>
    )
}



export default Navbar
