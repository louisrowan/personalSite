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

    const technologies = data.technologies.map((t, i) => {
      return <td key={i}>{t}</td>
    })

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
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <p onClick={() => this.props.expand() }>Show</p>
        <p>
          <a href={data.github}>Code</a>
        </p>
        <table>
          <tbody>
            <tr>
            {technologies}
            </tr>
          </tbody>
        </table>
        <div className='thumbImgDiv'>
          <img src={data.image} />
          <div></div>
        </div>
      </section>
    )
  }
})

module.exports = ProjectsThumb