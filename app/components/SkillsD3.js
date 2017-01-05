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
    const radius = width/15

    const tooltip = d3.select('#d3SkillsContainer')
      .append('div')
      .style('position', 'absolute')
      .style('z-index', '10')
      .style('visibility', 'hidden')
      .classed('tooltipDiv', 'true')
      .text('')
      .style('background', 'black')
      .style('color', 'white')
      .style('padding', '10px')

    const nodes = svg.selectAll('circle')
      .data(data)
      .enter()
      .append('g')

    const patterns = nodes.append('pattern')
      .attr('id', (d) => d.name )
      .attr('height', '100%')
      .attr('width', '100%')
      .attr('patternContentUnits', 'objectBoundingBox')
      .append('image')
      .attr('height', '1')
      .attr('width', '1')
      .attr('preserveAspectRatio', 'none')
      .attr('xmlns:xlink', 'http://www.w3.org/1999/xLink')
      .attr('xlink:href', (d) => d.image)

    const circles = nodes.append('circle')
      .attr('r', radius)
      .style('fill', (d) => `url(#${d.name})`)
      .style('stroke', 'black')
      .style('stroke-width', '2px')

    circles.on('mouseover', function(){
      tooltip
        .style('visibility', 'visible')

    }).on('mousemove', function(){
      const left = d3.select(this).attr('cx')
      const top = d3.select(this).attr('cy')
      console.log(top)
      const name = d3.select(this)[0][0].__data__.name
      tooltip.style('top', top - radius - 20 + 'px')
        .style('left',  left +"px")
        .text(name)
    })

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