const React = require('react')
const SkillsD3 = require('../components/SkillsD3')

const SkillsContainer = React.createClass({
  render(){
    return (
      <div className='skillsContainer'>
        <h1>Skills</h1>
        <SkillsD3 />
      </div>
    )
  }
})

module.exports = SkillsContainer