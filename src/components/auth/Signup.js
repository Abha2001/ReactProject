import React,{Component} from 'react'
import { Redirect } from 'react-router-dom'
import './auth.css'

class Signup extends Component {
    state={
        name:'',
        password:'',
        email:'',
        phoneno:'',
        profession:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
        console.log(e.target.id,e.target.value)
    }

    handleSubmit=(e)=>{
        console.log('hi')
        const {name,password,email,phoneno,profession}=this.state;
        localStorage.setItem('name',name);
        localStorage.setItem('password',password);
        localStorage.setItem('email',email);
        localStorage.setItem('phoneno',phoneno);
        localStorage.setItem('profession',profession);
    }
    render()
    { if(localStorage.getItem('name'))
        return <Redirect to="/login" />
        return(
            <div className="container">
                <form onSubmit ={this.handleSubmit} className="white">
                    <h3>Sign Up</h3>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="phoneno">Phone No</label>
                        <input type="phoneno" id="phoneno" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Profession:
                        <select id="profession" value={this.state.profession} onChange={this.handleChange}>
                            <option value="engineer">Engineer</option>
                            <option value="doctor">Doctor</option>
                            <option value="lawyer">Lawyer</option>
                            <option value="entertainer">Entertainer</option>
                            <option value="student">Student</option>
                            <option value="entrepreneur">Entrepreneur</option>
                            <option value="others">Others</option>
                        </select>
                        </label>
                    </div>
                    <br/>
                    <button className="btn pink">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;