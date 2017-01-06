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
      .text('JavaScript')
      .style('background', 'black')
      .style('color', 'white')

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

    const forceYNormal = d3Force.forceY((d) => {
      return height/2
    }).strength(0.05)

    const forceYFront = d3Force.forceY((d) => {
      if (d.type === 'front') {
        return height/2
      } else {
        return 2*height
      }
    }).strength(0.05)

    const forceYBack = d3Force.forceY((d) => {
      if (d.type === 'back') {
        return height/2
      } else {
        return 2*height
      }
    }).strength(0.05)

    const simulation = d3Force.forceSimulation()
      .force('x', forceXNormal)
      .force('y', forceYNormal)
      .force('collide', d3Force.forceCollide((d) => { console.log(d)
        return width/15 }))

    d3.select('#skillsFront').on('click', function() {
      simulation
        .force('y', forceYFront)
        .alphaTarget(0.5)
        .restart()
    })

    d3.select('#skillsBack').on('click', function() {
      simulation
        .force('y', forceYBack)
        .alphaTarget(0.5)
        .restart()
    })

    d3.select('#skillsAll').on('click', function() {
      simulation
        .force('y', forceYNormal)
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
      <button id='skillsFront'>Front-End</button>
      <button id='skillsAll'>All</button>
      <button id='skillsBack'>Back-End</button>
        <svg>
        </svg>
      </div>
    )
  }
})

module.exports = SkillsD3