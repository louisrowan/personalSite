const React = require('react')

const ProjectsContainer = React.createClass({
  getInitialState() {
    return {
      projectIndex: 0,
      projects: ['first', 'second']
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
    let shownProject;
    let project = this.state.projects[this.state.projectIndex]
    if (project === 'second') {
      shownProject = 'my second project'
    } else {
      shownProject = 'my first'
    }
    return (
      <div>
        <p>projects</p>
        <div className='leftArrowDiv arrowDiv' onClick={() => this.handleClick(-1)}></div>
        <div className='projectDiv'>
        {shownProject}
        </div>
        <div className='rightArrowDiv arrowDiv' onClick={() => this.handleClick(1)}></div>
      </div>
    )
  }
})

module.exports = ProjectsContainer