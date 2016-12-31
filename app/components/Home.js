const React = require('react')
const HeaderContainer = require('../containers/HeaderContainer')
const MainContainer = require('../containers/MainContainer')
const SkillsContainer = require('../containers/SkillsContainer')
const ProjectsContainer = require('../containers/ProjectsContainer')
const ContactContainer = require('../containers/ContactContainer')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')

const Home = React.createClass({
  render(){
    let currentComponent;
    let content = this.props.content
    if (content === 'project'){
      currentComponent =
      <div className='contentContainer' key='project'>
        <ProjectsContainer />
      </div>
    } else if (content === 'skills'){
      currentComponent = 
      <div className='contentContainer' key='skills'>
        <SkillsContainer />
      </div>
    } else if (content==='contact'){
      currentComponent =
      <div className='contentContainer' key='contact'>
        <ContactContainer />
      </div>
    } else {
      currentComponent =
      <div className='contentContainer' key='main'>
        <MainContainer />
      </div>
    }

    return (
      <div className='homeContainer'>
        <div id='homeContentDiv'>
          <div id='contentSpace'>
          <ReactCSSTransitionGroup
          transitionName="component"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={300}>
          {currentComponent}
          </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Home