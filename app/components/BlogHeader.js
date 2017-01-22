const React = require('react')

const BlogHeader = React.createClass({
  render(){
    return (
      <header>
        <div className='articleBackground'></div>
        <div id='blogHeaderLeft'>
          <h2>My JS Blog</h2>
          <h2>Louis Rowan</h2>
        </div>
        <div id='blogHeaderRight'>
          <h3>
            <a className='iconLink' target="_blank" 
            href="https://github.com/louisrowan">
            Github
            </a>
          </h3>
          <h3>
            <a target="_blank" 
            href="https://www.linkedin.com/in/louis-rowan-54869986">
              LinkedIn
            </a>
          </h3>
          <h3>
            <a className='iconLink' 
              href='mailto:louis.rowan@icloud.com?Subject=Great%20Website!' target='_top'>
              louis.rowan@icloud.com
            </a>
          </h3>
        </div>
      </header>
    )
  }
})

module.exports = BlogHeader