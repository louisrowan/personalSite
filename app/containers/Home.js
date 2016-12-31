const React = require('react')
const { Link } = require('react-router')
const HeaderContainer = require('./HeaderContainer')
const MainContainer = require('./MainContainer')
const SkillsContainer = require('./SkillsContainer')
const ProjectsContainer = require('./ProjectsContainer')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')

const Home = React.createClass({
  getInitialState() {
    return {
      content: 'main'
    }
  },
  handleClick(e) {
    this.setState({ content: e })
  },
  render(){
    let currentComponent;
    let content = this.state.content
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
    } else {
      currentComponent =
      <div className='contentContainer' key='main'>
        <MainContainer />
      </div>
    }

    return (
      <div className='homeContainer'>
        <div id='homeContentDiv'>
          <table>
            <tbody>
              <tr>
                <td>
                  <Link onClick={() => this.handleClick('main') }>Main</Link>
                </td>
                <td>
                  <Link onClick={() => this.handleClick('skills') }>Skills</Link>
                </td>
                <td>
                  <Link onClick={() => this.handleClick('project') }>Projects</Link>
                </td>
              </tr>
            </tbody>
          </table>
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