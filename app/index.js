const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, browserHistory } = require('react-router')
const HomeContainer = require('./containers/HomeContainer')
const BlogContainer = require('./containers/BlogContainer')
require('../public/stylesheets/styles.css')
require('../public/stylesheets/responsive.css')
require('../public/stylesheets/animations.css')
require('../public/stylesheets/blog.css')

const App = React.createClass({
  render(){
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HomeContainer} />
        <Route path='/blog' component={BlogContainer} />
      </Router>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)