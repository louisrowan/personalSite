const React = require('react')


const ProjectsFullscreen = React.createClass({
  render(){
    console.log('show')
    let data = this.props.data
    return (
      <div className='projectFullscreenDiv'>
        <h1>{data.name}</h1>
        <div className='projectFullscreenImgDiv'>
          <img src={data.image} />
        </div>
        <p>{data.description}</p>
        <ul>
          {data.technologies.map((d, i) => {
            return <li key={i}>{d}</li>
          })}
        </ul>
        <a href={data.github}>See the code</a>
        <h4>What I learned:</h4>
        <p>{data.learned}</p>


        <p onClick={()=> this.props.hide()}>Back</p>
      </div>
    )
  }
})

module.exports = ProjectsFullscreen