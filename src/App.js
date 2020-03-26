import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import LeftMenu from './components/Left-menu'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
)

export default App;
