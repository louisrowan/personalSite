const React = require('react')
const SkillsD3 = require('../components/SkillsD3')
const SkillsTable = require('../components/SkillsTable')

const SkillsContainer = React.createClass({
  render(){
    return (
      <div className='skillsContainer'>
        <h1>Skills</h1>
        <SkillsD3 />
        <SkillsTable />
      </div>
    )
  }
})

module.exports = SkillsContainer