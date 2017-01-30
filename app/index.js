const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory, IndexRoute } = require('react-router')
const HomeContainer = require('./containers/HomeContainer')
const BlogContainer = require('./containers/BlogContainer')
const RoutesContainer = require('./containers/RoutesContainer')
require('../public/stylesheets/styles.css')
require('../public/stylesheets/nav.css')
require('../public/stylesheets/main.css')
require('../public/stylesheets/skills.css')
require('../public/stylesheets/projects.css')
require('../public/stylesheets/contact.css')
require('../public/stylesheets/responsive.css')
require('../public/stylesheets/animations.css')
require('../public/stylesheets/blog.css')

const App = React.createClass({
  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={RoutesContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='blog' component={BlogContainer} />
        </Route>
      </Router>
    )
  }
})



ReactDOM.render(
  <App />,
  document.getElementById('app')
)