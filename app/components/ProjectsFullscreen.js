const React = require('react')
const logos = require('json!../../public/data.json').images


const ProjectsFullscreen = React.createClass({
  render(){
    let data = this.props.data

    let githubContent;
    if (data.github) {
      githubContent = (
             <tr>
                <td>
                  <a className='iconLink' target="_blank" href={data.github}>
                    <div className='contactIMG'>
                      <img src={logos.github} />
                    </div>
                  </a>
                </td>
                <td>
                  <a target="_blank" href={data.github}>See the Code</a>
                </td>
              </tr>
      )
    } else {
      githubContent = <tr></tr>
    }

    let herokuContent;
    if (data.heroku) {
      herokuContent = (
              <tr>
                <td>
                  <a className='iconLink' target="_blank" href={data.heroku}>
                    <div className='contactIMG'>
                      <img src={logos.heroku} />
                    </div>
                  </a>
                </td>
                <td>
                  <a target="_blank" href={data.heroku}>Deployed on Heroku</a>
                </td>
              </tr>
              )} else {
        herokuContent = <tr></tr>
      }

    return (
      <div className='projectFullscreenDiv projectsComponent'>
        <div id='projectsBackButton' className='leftArrowDiv arrowDiv' onClick={()=> this.props.hide()}>
        </div>
        <h1>{data.name}</h1>

        <table className='contactTable'>
           <tbody>
              {githubContent}
              {herokuContent}
            </tbody>
          </table>
        <div className='fullscreenHalf'>
          <div className='projectFullscreenImgDiv'>
            <img src={data.image} />
          </div>
          <ul className='projectSkillsList'>
          {data.technologies.map((d, i) => {
            return <li key={i}>{d}</li>
          })}
        </ul>

        </div>

        <div className='fullscreenHalf'>
          <h2>About</h2>
          <p>{data.description}</p>
          <h2>What I Learned</h2>
          <p>{data.learned}</p>
        </div>

      </div>
    )
  }
})

module.exports = ProjectsFullscreen