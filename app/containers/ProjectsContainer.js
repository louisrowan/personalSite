const React = require('react')

const ProjectsContainer = React.createClass({
  render(){
    return (
      <div className='contentContainer'>
        <p>projects</p>
        <ul>
        <li>project 1</li>
        <li>project 2</li>
        </ul>
      </div>
    )
  }
})

module.exports = ProjectsContainer