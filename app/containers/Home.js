const React = require('react')
const { Link } = require('react-router')
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
    console.log(e)
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
          <Link onClick={() => this.handleClick('main') }>
            <p>Main</p></Link>
          <Link onClick={() => this.handleClick('skills') }>
            <p>Skills</p></Link>
          <Link onClick={() => this.handleClick('project') }>
            <p>Projects</p></Link>

          {currentComponent}
        </div>
      </div>
    )
  }
})

module.exports = Home