import React,{Component} from 'react'
import { Redirect } from 'react-router-dom'
import './auth.css'
class Login extends Component {
    state={
        name:'',
        password:'',
        error:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const storedName= localStorage.getItem('name');
        const storedPassword= localStorage.getItem('password');
        const {name, password}=this.state;
        if (name!==storedName || password!==storedPassword)
        this.setState({...this.state ,
            error:"Invalid Credentials"
        })
        else
        {
            localStorage.setItem('auth','true')
            window.location.reload()
        }
    }

    render()
    {
        console.log("Login")
        if(localStorage.getItem('auth'))
            return <Redirect to="/dashboard" />
        return(
            <div className="container">
                <form onSubmit ={this.handleSubmit} className="white">
                    <h3 className="grey-text text-darken-3">Log In</h3>
                    <div >
                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" onChange={this.handleChange}/>
                    </div>
                    <div >
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div >
                        {this.state.error?<p className="redText">{this.state.error}</p>:null}
                    </div>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;