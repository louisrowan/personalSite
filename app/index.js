const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory, IndexRoute } = require('react-router')
const HomeContainer = require('./containers/HomeContainer')
const BlogContainer = require('./containers/BlogContainer')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')
require('../public/stylesheets/styles.css')
require('../public/stylesheets/responsive.css')
require('../public/stylesheets/animations.css')
require('../public/stylesheets/blog.css')

const App = React.createClass({
  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
        <IndexRoute component={HomeContainer} />
        <Route path='blog' component={BlogContainer} />
        </Route>
      </Router>
    )
  }
})

const Container = React.createClass({
  cloneChildren: function() {
    var key = this.props.location.pathname
    if (this.props.children) {
      return React.cloneElement(this.props.children, { key: key})
    }
  },
  render(){
    const key = this.props.children.props.route.component.displayName
    return (
      <div id='masterDiv'>
        <ReactCSSTransitionGroup
        transitionName='siteLayoutTransition'
        transitionEnterTimeout={800}
        transitionLeaveTimeout={800}>
          {this.cloneChildren()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)