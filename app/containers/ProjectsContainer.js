const React = require('react')
const data = require('json!../../public/data.json').projects
const ProjectsCarousel = require('../components/ProjectsCarousel')
const ProjectsFullscreen = require('../components/ProjectsFullscreen')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')


const ProjectsContainer = React.createClass({
  getInitialState() {
    return {
      projectIndex: 0,
      fullscreen: false
    }
  },
  showFullscreen() {
    this.setState({ fullscreen: true })
  },
  hideFullscreen() {
    this.setState({ fullscreen: false })
  },
  handleCurrent(i) {
    this.setState({ projectIndex: i })
  },
  render(){
    let shownProject = data[this.state.projectIndex]

    let content;
    let currentTransition
    if (this.state.fullscreen){
      content =
      <ProjectsFullscreen key={shownProject.name} data={shownProject} hide={this.hideFullscreen} />
      currentTransition = 'projectsFullscreenTransition'
    } else {
      content = <ProjectsCarousel index={this.state.projectIndex} data={data} showFullscreen={this.showFullscreen} updateIndex={this.handleCurrent} />
      currentTransition = 'projectsCarouselTransition'
    }
    return (
      <div id='projectsContainerDiv'>
        <ReactCSSTransitionGroup
        transitionName={currentTransition}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={300}>
        {content}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

module.exports = ProjectsContainer