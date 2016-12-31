const React = require('react')
const data = require('json!../../public/data.json').projects

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
        <p>projects</p>
        <div className='leftArrowDiv arrowDiv' onClick={() => this.handleClick(-1)}></div>
          <div className='projectDiv'>
            <ul>
            <li>{shownProject.name}</li>
            <li>{shownProject.description}</li>
            </ul>
          </div>
        <div className='rightArrowDiv arrowDiv' onClick={() => this.handleClick(1)}></div>
      </div>
    )
  }
})

module.exports = ProjectsContainer