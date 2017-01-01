const React = require('react')
const data = require('json!../../public/data.json').projects
const ProjectsThumb = require('../components/ProjectsThumb')

const ProjectsContainer = React.createClass({
  getInitialState() {
    return {
      projectIndex: 0,
      projects: data,
      fullscreen: false
    }
  },
  handleScroll(val) {
    let index = this.state.projectIndex + 1
    if (index < 0 ) {
      index = this.state.projects.length - 1
    } else if (index >= this.state.projects.length) {
      index = 0
    }
    this.setState({ projectIndex: index})
  },
  showFullscreen() {
    this.setState({ fullscreen: true })
  },
  hideFullscreen() {
    this.setState({ fullscreen: false })
  },
  render(){
    let shownProject = this.state.projects[this.state.projectIndex]

    if (!this.state.fullscreen){
    return (
      <div>
        <h1>Projects</h1>
        <div className='leftArrowDiv arrowDiv' onClick={() => this.handleScroll(-1)}></div>
          <div className='projectDiv'>
            <ProjectsThumb expand={this.showFullscreen} data={shownProject} />
          </div>
        <div className='rightArrowDiv arrowDiv' onClick={() => this.handleScroll(1)}></div>
      </div>
    )}

    else {
    return (
      <div>
        <h1>{shownProject.name}</h1>
        <p onClick={() => this.hideFullscreen()}>Back to list</p>
      </div>
    ) }
  }
})

module.exports = ProjectsContainer