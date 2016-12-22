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

          {currentComponent}
        </div>
      </div>
    )
  }
})

module.exports = Home