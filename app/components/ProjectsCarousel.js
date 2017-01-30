const React = require('react')
const ProjectsThumb = require('../components/ProjectsThumb')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')



const ProjectsCarousel = React.createClass({
  getInitialState() {
    return {
      projectIndex: this.props.index,
      projects: this.props.data
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
    this.props.updateIndex(index)
  },
  render(){
    let shownProject = this.state.projects[this.state.projectIndex]

    let navCircles = (
      <div className='projectsCirclesList'>
        {this.state.projects.map((p, i) => {
          if (i === this.state.projectIndex){
            return <div key={i} className='activeCircle listCircle'></div>
          } else {
            return <div key={i} className='inactiveCircle listCircle'></div>
          }
        })}
      </div>
    )

    return (
      <div className='projectsComponent'>
        <h1>Projects</h1>
        <div className='leftArrowDiv arrowDiv' onClick={() => this.handleScroll(-1)}></div>
          <div className='projectDiv'>
            <ReactCSSTransitionGroup
            transitionName='projectFlip'
            transitionEnterTimeout={400}
            transitionLeaveTimeout={200}>
              <ProjectsThumb key={shownProject.name} expand={this.props.showFullscreen} data={shownProject} />
            </ReactCSSTransitionGroup>
            
          </div>
        <div className='rightArrowDiv arrowDiv' onClick={() => this.handleScroll(1)}></div>
        {navCircles}
      </div>
    )
  }
})

module.exports = ProjectsCarousel