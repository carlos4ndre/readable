import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import HomePage from 'containers/HomePage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
