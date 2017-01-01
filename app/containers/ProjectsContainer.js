const React = require('react')
const data = require('json!../../public/data.json').projects
const ProjectsThumb = require('../components/ProjectsThumb')

const ProjectsContainer = React.createClass({
  getInitialState() {
    return {
      projectIndex: 0,
      projects: data
    }
  },
  handleClick(val) {
    let index = this.state.projectIndex + 1
    if (index < 0 ) {
      index = this.state.projects.length - 1
    } else if (index >= this.state.projects.length) {
      index = 0
    }
    this.setState({ projectIndex: index})
  },
  render(){
    let shownProject = this.state.projects[this.state.projectIndex]

    return (
      <div>
        <h1>Projects</h1>
        <div className='leftArrowDiv arrowDiv' onClick={() => this.handleClick(-1)}></div>
          <div className='projectDiv'>
            <ProjectsThumb data={shownProject} />
          </div>
        <div className='rightArrowDiv arrowDiv' onClick={() => this.handleClick(1)}></div>
      </div>
    )
  }
})

module.exports = ProjectsContainer