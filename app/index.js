const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory } = require('react-router')
const Home = require('./containers/Home')

const App = React.createClass({
  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home}>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)