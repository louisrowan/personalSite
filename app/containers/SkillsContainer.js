const React = require('react')
const SkillsD3 = require('../components/SkillsD3')

const SkillsContainer = React.createClass({
  render(){
    return (
      <div className='skillsContainer'>
        <p>skills</p>
        <p>Ruby</p>
        <p>Rails</p>
        <SkillsD3 />
      </div>
    )
  }
})

module.exports = SkillsContainer