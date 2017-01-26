const React = require('react')
const image = require('json!../../public/data.json').images.me
const { Link } = require('react-router')


const MainContainer = React.createClass({
  render(){
    return (
      <div>
        <h1>Hello,</h1>

        <div className='mainImg'>
          <img src={image} />
        </div>
        
        <p className='mainParagraph'>
          My name is <span className='emp'>Louis Rowan</span> and I'm a self-taught <span className='emp'>Software Engineer</span>. I enjoy writing code that is performant, maintainable and useful. I learned <span className='emp'>Ruby</span>, <span className='emp'>Rails</span>, <span className='emp'>JavaScript</span>, <span className='emp'>Git/Github</span> and <span className='emp'>SQL</span> at DevBootcamp San Francisco, then taught myself <span className='emp'>D3</span>, <span className='emp'>C/C++</span>, <span className='emp'>React</span>, <span className='emp'>Node/Webpack/NPM</span> and <span className='emp'>Redux</span>.
        </p>
        <p className='mainParagraph'>
          I graduated from the <span className='emp'>University of Connecticut</span> in 2013 with a BA in Economics, but more recently found a passion in the world of development. I am currently searching for the right opportunity, one where I can be a valued member of a team and be put into a position to continue learning and improving every day.
        </p>
        <p className='mainParagraph'>
          I have started a blog <span className='emp'><Link to='/blog'>here </Link></span>as a place to journal some of the new ideas and concepts that I'm learning. My last entry was about using CSS animations and transitions in React, check it out!
        </p>
      </div>
    )
  }
})

module.exports = MainContainer

// <span className='emp'></span>