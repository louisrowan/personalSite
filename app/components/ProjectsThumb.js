const React = require('react')

const ProjectsThumb = React.createClass({
  getInitialState () {
    return {
      hover: false
    }
  },
  mouseIn () {
    this.setState({ hover: true })
  },
  mouseOut () {
    this.setState({ hover: false })
  },
  render(){
    const data = this.props.data

    let hiddenDivClass;
    let sectionClass;
    this.state.hover ? hiddenDivClass = 'hiddenThumbDiv' : hiddenDivClass = 'hidden'
    this.state.hover ? sectionClass = 'hoverProjectsThumb' : sectionClass = 'projectsThumb'

    return (
      <section
      onMouseEnter={() => this.mouseIn()}
      onMouseLeave ={() => this.mouseOut()}
      className={sectionClass}>
        <div onClick={()=> this.props.expand()} className={hiddenDivClass}>
          <h2>View Project</h2>
        </div>
        <div className='projectsThumbHeader'>
          <h2>{data.name}</h2>
          <p>{data.teaser}</p>
        </div>
        <div className='thumbImgDiv'>
          <img src={data.image} />
          <div></div>
        </div>
      </section>
    )
  }
})

module.exports = ProjectsThumb