const React = require('react')

const ProjectsThumb = React.createClass({
  render(){
    const data = this.props.data

    const technologies = data.technologies.map((t, i) => {
      return <li key={i}>{t}</li>
    })

    return (
      <section className='projectsThumb'>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <p onClick={() => this.props.expand() }>Show</p>
        <p>
          <a href={data.github}>Code</a>
        </p>
        <h2>Technologies used:</h2>
        <ul>
          {technologies}
        </ul>
        <div className='thumbImgDiv'>
          <img src={data.image} />
          <div></div>
        </div>
      </section>
    )
  }
})

module.exports = ProjectsThumb