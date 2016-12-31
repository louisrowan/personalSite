const React = require('react')

const MainContainer = React.createClass({
  render(){
    return (
      <div>
        <h1>Hi,</h1>

        <p>*insert pic here*</p>
        
        <p>
          My name is <span className='emp'>Louie</span> and I'm a self-taught <span className='emp'>Software Engineer</span>. I enjoy writing code that is performant, maintainable and useful. I learned <span className='emp'>Ruby</span>, <span className='emp'>Rails</span>, <span className='emp'>JavaScript</span>, <span className='emp'>Git/Github</span> and <span className='emp'>SQL</span> at DevBootcamp San Francisco, then taught myself <span className='emp'>C</span>, <span className='emp'>React</span>, <span className='emp'>Node/Webpack/NPM</span> and <span className='emp'>Redux</span>.
        </p>
      </div>
    )
  }
})

module.exports = MainContainer

// <span className='emp'></span>