const React = require('react')
const image = require('json!../../public/data.json').images.me
const { Link } = require('react-router')
const LinkPopup = require('../components/LinkPopup')


const MainContainer = React.createClass({
  render(){
    return (
      <div>
      <LinkPopup />
        <h1>Hello,</h1>

        <div className='mainImg'>
          <img src={image} />
        </div>
        
        <p className='mainParagraph'>
          My name is <span className='emp'>Louis Rowan</span> and I'm a self-taught <span className='emp'>Software Engineer</span>. I enjoy writing code that is performant, maintainable and useful. I learned <span className='emp'>Ruby</span>, <span className='emp'>Rails</span>, <span className='emp'>JavaScript</span>, <span className='emp'>Git/Github</span> and <span className='emp'>SQL</span> at DevBootcamp San Francisco, then taught myself <span className='emp'>D3</span>, <span className='emp'>C/C++</span>, <span className='emp'>React</span>, <span className='emp'>Node/Webpack/NPM</span> and <span className='emp'>Redux</span>.
        </p>
        <p className='mainParagraph'>
          I graduated from the <span className='emp'>University of Connecticut</span> in 2013 with a <span className='emp'>BA in Economics</span>, but more recently found a passion in the world of development. I have started a <span className='emp'><Link to='/blog'>Blog </Link></span>as a place to journal some of the new ideas and concepts that I'm learning. My last entry was about creating an interactive bubble chart in D3, <span className='emp'><Link to='/blog/d3bubblechart'>check it out!</Link></span>
        </p>
      </div>
    )
  }
})

module.exports = MainContainer

// <span className='emp'></span>