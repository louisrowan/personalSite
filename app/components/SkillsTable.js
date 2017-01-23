const React = require('react')
const data = require('json!../../public/data.json').skills


const SkillsTable = React.createClass({
  render() {
    var front = []
    var back = []
    var other = []
    data.forEach((d) => {
      if (d.type === 'front') {
        front.push(d)
      } else if (d.type === 'back') {
        back.push(d)
      } else {
        other.push(d)
      }
    })
    var frontLIs = front.map((d, i) => {
      return <li key={i}>{d.name}</li>
    })
    var backLIs = back.map((d, i) => {
      return <li key={i}>{d.name}</li>
    })
    var otherLIs = other.map((d, i) => {
      return <li key={i}>{d.name}</li>
    })
    return (
      <section id='skillsList'>
        <h2>Front-End</h2>
        <ul>
          {frontLIs}
        </ul>
        <h2>Back-End</h2>
        <ul>
          {backLIs}
        </ul>
        <h2>Other</h2>
        <ul>
          {otherLIs}
        </ul>
        <h2></h2>
      </section>
    )
  }
})

module.exports = SkillsTable