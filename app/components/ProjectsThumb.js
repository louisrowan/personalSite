const React = require('react')

const ProjectsThumb = React.createClass({
  render(){
    const data = this.props.data

    const technologies = data.technologies.map((t) => {
      return <li>{t}</li>
    })
    
    return (
      <section className='projectsThumb'>
        <p>{data.name}</p>
        <p>{data.description}</p>
        {technologies}
        <p>test</p>
        <div className='thumbImgDiv'>
          <img src={data.image} />
          <div></div>
        </div>
      </section>
    )
  }
})

module.exports = ProjectsThumb