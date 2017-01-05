const React = require('react')
const rd3 = require('react-d3')
const d3Force = require('d3-force')
const data = require('json!../../public/data.json').skills


const SkillsD3 = React.createClass({
  componentDidMount () {
    const svg = d3.select('svg')
    svg
      .attr('height', '100%')
      .attr('width', '100%')

    const height = parseInt(svg.style('height'))
    const width = parseInt(svg.style('width'))

    const circles = svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', width/15)

    const forceXNormal = d3Force.forceX((d) => {
      return width/2
    }).strength(0.05)

    const forceXSplit = d3Force.forceX((d) => {
      if (d.type === 'front') {
        return width/4
      } else {
        return 3*width/4
      }
    })

    const simulation = d3Force.forceSimulation()
      .force('x', forceXNormal)
      .force('y', d3Force.forceY(height/2).strength(0.05))
      .force('collide', d3Force.forceCollide((d) => { console.log(d)
        return width/15 }))

    d3.select('#skillsLeft').on('click', function() {
      console.log('click')
      simulation
        .force('x', forceXSplit)
        .alphaTarget(0.5)
        .restart()
    })

    simulation.nodes(data)
      .on('tick', ticked)

    function ticked() {
      circles
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
    }






  },
  render() {
    return (
      <div id='d3SkillsContainer'>
      <button id='skillsLeft'>Left</button>
        <svg>
        </svg>
      </div>
    )
  }
})

module.exports = SkillsD3