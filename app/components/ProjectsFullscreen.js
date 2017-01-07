const React = require('react')
const logos = require('json!../../public/data.json').images


const ProjectsFullscreen = React.createClass({
  render(){
    console.log('show')
    let data = this.props.data

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
                  <a target="_blank" href="https://github.com/louisrowan">Deployed on Heroku</a>
                </td>
              </tr>
              )} else {
        herokuContent = ''
      }
    return (
      <div className='projectFullscreenDiv'>
        <div id='projectsBackButton' className='leftArrowDiv arrowDiv' onClick={()=> this.props.hide()}>
        </div>
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
        <table className='contactTable'>
           <tbody>
             <tr>
                <td>
                  <a className='iconLink' target="_blank" href={data.github}>
                    <div className='contactIMG'>
                      <img src={logos.github} />
                    </div>
                  </a>
                </td>
                <td>
                  <a target="_blank" href="https://github.com/louisrowan">See the Code</a>
                </td>
              </tr>

              {herokuContent}

            </tbody>
          </table>
        <h4>What I learned:</h4>
        <p>{data.learned}</p>

      </div>
    )
  }
})

module.exports = ProjectsFullscreen