const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory, IndexRoute, Link } = require('react-router')
const HomeContainer = require('./containers/HomeContainer')
const BlogContainer = require('./containers/BlogContainer')
const BlogIndex = require('./components/BlogIndex')
const BlogPost = require('./components/BlogPost')
const RoutesContainer = require('./containers/RoutesContainer')
require('../public/stylesheets/styles.css')
require('../public/stylesheets/nav.css')
require('../public/stylesheets/main.css')
require('../public/stylesheets/mainResponsive.css')
require('../public/stylesheets/skills.css')
require('../public/stylesheets/skillsResponsive.css')
require('../public/stylesheets/projects.css')
require('../public/stylesheets/projectsResponsive.css')
require('../public/stylesheets/contact.css')
require('../public/stylesheets/contactResponsive.css')
require('../public/stylesheets/animations.css')
require('../public/stylesheets/responsive.css')
require('../public/stylesheets/blog.css')
require('../public/stylesheets/blogResponsive.css')

const App = React.createClass({
  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={RoutesContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='/blog' component={BlogContainer}>
          <IndexRoute component={BlogIndex} />
          <Route path='/blog/:id' component={BlogPost} />
        </Route>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)