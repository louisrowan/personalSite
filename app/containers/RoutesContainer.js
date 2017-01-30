const React = require('react')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')

const RoutesContainer = React.createClass({
  cloneChildren: function() {
    var key = this.props.routes
    if (this.props.children) {
      return React.cloneElement(this.props.children, { key: key})
    }
  },
  render(){
    var transition;
    let current = this.props.children.props.route.component.displayName
    if (current === 'HomeContainer'){
      transition = 'routeSlideDown'
    } else {
      transition = 'routeSlideUp'
    }

    return (
      <div id='masterDiv'>
        <ReactCSSTransitionGroup
        transitionName={transition}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={800}>
          {this.cloneChildren()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

module.exports = RoutesContainer