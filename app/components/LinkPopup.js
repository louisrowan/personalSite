const React = require('react')
const { Link } = require('react-router')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')


const LinkPopup = React.createClass({
  getInitialState(){
    return {
      hide: ''
    }
  },
  hidePopup(e){
    e.preventDefault()
    this.setState({ hide: 'hidePopup'})
  },
  render(){
    return (
      <ReactCSSTransitionGroup
      transitionName='popupTransition'
      transitionAppear={true}
      transitionAppearTimeout={3000}
      transitionEnter={false}
      transitionLeave={false}>
        <Link to='/blog' className={'popupLink ' + this.state.hide}>
          <div className='popupX' onClick={(e)=> this.hidePopup(e)}></div>
          <div className='popupBox'>
            <p>About the code</p>
          </div>
        </Link>
      </ReactCSSTransitionGroup>
    )
  }
})

module.exports = LinkPopup