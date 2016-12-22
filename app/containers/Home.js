const React = require('react')
const HeaderContainer = require('./HeaderContainer')
const MainContainer = require('./MainContainer')
const SkillsContainer = require('./SkillsContainer')
const ProjectsContainer = require('./ProjectsContainer')

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
      currentComponent = <ProjectsContainer />
    } else if (content === 'skills'){
      currentComponent = <SkillsContainer />
    } else {
      currentComponent = <MainContainer />
    }

    return (
      <div className='homeContainer'>
        <div id='homeContentDiv'>
          <p onClick={() => this.handleClick('main') }>Main</p>
          <p onClick={() => this.handleClick('skills') }>Skills</p>
          <p onClick={() => this.handleClick('project') }>Project</p>

          {currentComponent}
        </div>
      </div>
    )
  }
})

module.exports = Home