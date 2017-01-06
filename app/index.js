const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory } = require('react-router')
const HomeContainer = require('./containers/HomeContainer')
require('../public/stylesheets/styles.css')
require('../public/stylesheets/responsive.css')

const App = React.createClass({
  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={HomeContainer}>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)