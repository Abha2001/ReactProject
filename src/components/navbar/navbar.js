import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar=(props)=>{
    if (localStorage.getItem('auth'))
    return(
        <nav className="nav-wrapper">
            <div className="container-left">
                <Link to="/companyInfo" className="companyinfo"><span>CompanyInfo</span></Link>
            </div>
            <div className="container-right">
                <Link to="/dashboard" className="home"><span>Home</span></Link>
            </div>
        </nav>
    )
    else
    return(
        <nav className="nav-wrapper">
            <div className="container-left">
                <Link to="/login" className="companyinfo"><span>Login</span></Link>
            </div>
            <div className="container-right">
                <Link to="/" className="home"><span>Signup</span></Link>
            </div>
        </nav>
    ) 
}

export default Navbar