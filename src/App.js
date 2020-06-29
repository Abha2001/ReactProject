import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import SignUp from './components/auth/Signup';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CompanyInfo from './components/dashboard/CompanyInfo'
import Navbar from './components/navbar/navbar'


class App extends Component {
  render()
  {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route exact path="/companyinfo" component={CompanyInfo} />
            <Route path="/" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
