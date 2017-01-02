const React = require('react')
const data = require('json!../../public/data.json').projects
const ProjectsThumb = require('../components/ProjectsThumb')
const ProjectsFullscreen = require('../components/ProjectsFullscreen')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')


const ProjectsContainer = React.createClass({
  getInitialState() {
    return {
      projectIndex: 0,
      projects: data,
      fullscreen: false
    }
  },
  handleScroll(val) {
    let index = this.state.projectIndex + val
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

            <ReactCSSTransitionGroup
            transitionName='projectFlip'
            transitionEnterTimeout={400}
            transitionLeaveTimeout={200}>
              <ProjectsThumb key={shownProject.name} expand={this.showFullscreen} data={shownProject} />
            </ReactCSSTransitionGroup>
            
          </div>
        <div className='rightArrowDiv arrowDiv' onClick={() => this.handleScroll(1)}></div>
      </div>
    )}

    else {
    return (
      <ReactCSSTransitionGroup
      transitionName='projectShow'
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
      transitionAppear={true}
      transitionAppearTimeout={300}>
        <ProjectsFullscreen key={shownProject.name} data={shownProject} hide={this.hideFullscreen} />
      </ReactCSSTransitionGroup>
    ) }
  }
})

module.exports = ProjectsContainer