import React , {component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

 const App = () =>  {
    return(
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
    )
}
export default App
