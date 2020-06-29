import React from 'react';
import './dashboard.css';
import {Redirect} from 'react-router-dom'

const CompanyInfo =()=>{
    if(!localStorage.getItem('auth'))
        return <Redirect to="/" />
    return(
        <div className="container">
            <h3><span>Company: </span>Geeksynergy Technologies Pvt Ltd</h3>
            <h3><span>Address: </span>Sanjaynagar, Bengaluru-56</h3>
            <h3><span>Phone: </span>XXXXXXXX09</h3>
            <h3><span>Email: </span>XXXXXX@gmail.com</h3>
        </div>
    )
}

export default CompanyInfo;