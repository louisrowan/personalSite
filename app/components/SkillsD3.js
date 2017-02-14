const React = require('react')
const rd3 = require('react-d3')
const d3Force = require('d3-force')
const data = require('json!../../public/data.json').skills


const SkillsD3 = React.createClass({
  getInitialState() {
    return {
      simulation: '',
      skillFront: '',
      skillBack: '',
      skillAll: 'd3Active'
    }
  },
  componentDidMount () {
    const svg = d3.select('svg')
    svg
      .attr('height', '100%')
      .attr('width', '100%')

    const height = parseInt(svg.style('height'))
    const width = parseInt(svg.style('width'))
    const radius = d3.max([height, width])/16

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
      .classed('d3Circle', true)

    const circleDivs = nodes.append('text')
      .attr('dx', (d) => {
        return d.posX === 'left' ? width/5 + 100: 3*width/5 + 100
      })
      .attr('dy', (d) => d.posY)
      .text((d) => d.name)
      .classed('hiddenD3Text', true)
      .classed('shownD3Text', false)

    circles.on('mouseover', function(){
      d3.select(this)
        .classed('d3BubbleHover', true)
      tooltip
        .style('visibility', 'visible')
      const left = d3.select(this).attr('cx')
      const top = d3.select(this).attr('cy')
      const name = d3.select(this)[0][0].__data__.name
      tooltip.style('top', top - radius - 50 + 'px')
        .style('left',  left - 20 + "px")
        .text(name)

    }).on('mousemove', function(){
      // const left = d3.select(this).attr('cx')
      // const top = d3.select(this).attr('cy')
      // const name = d3.select(this)[0][0].__data__.name
      // tooltip.style('top', top - radius - 20 + 'px')
      //   .style('left',  left +"px")
      //   .text(name)
    }).on('mouseout', function() {
      d3.select(this)
        .classed('d3BubbleHover', false)
      tooltip
        .style('visibility', 'hidden')
    })

    const forceXNormal = d3Force.forceX((d) => {
      return width/2
    }).strength(0.05)

    const forceYNormal = d3Force.forceY((d) => {
      return height/2
    }).strength(0.05)

    const forceYFront = d3Force.forceY((d) => {
      if (d.type === 'front') {
        return d.posY
      } else {
        return 2*height
      }
    }).strength(0.05)

    const forceXFront = d3Force.forceX((d) => {
      if (d.posX === 'left') {
        return width/5
      } else {
        return 3*width/5
      }
    })

    const forceYBack = d3Force.forceY((d) => {
      if (d.type === 'back') {
        return d.posY
      } else {
        return 2*height
      }
    }).strength(0.05)

    const forceXBack = d3Force.forceX((d) => {
       if (d.posX === 'left') {
        return width/5
      } else {
        return 3*width/5
      }
    })


    const simulation = d3Force.forceSimulation()
      .force('x', forceXNormal)
      .force('y', forceYNormal)
      .force('collide', d3Force.forceCollide((d) => radius + 2 ))

    this.setState({ simulation })

    simulation.nodes(data)
      .on('tick', ticked)

    function ticked() {
      circles
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
    }

    d3.select('#skillsFront').on('click', function() {
      simulation
        .force('x', forceXFront)
        .force('y', forceYFront)
        .alphaTarget(0.5)
        .restart()

      circleDivs
        .classed('hiddenD3Text', (d) => {
          return d.type === 'front' ? false : true
        })
        .classed('shownD3Text', (d) => {
          return d.type === 'back' ? false : true
        })
    })

    d3.select('#skillsBack').on('click', function() {
      simulation
        .force('x', forceXBack)
        .force('y', forceYBack)
        .alphaTarget(0.5)
        .restart()

      circleDivs
        .classed('hiddenD3Text', (d) => {
          return d.type === 'back' ? false : true
        })
        .classed('shownD3Text', (d) => {
          return d.type === 'front' ? false : true
        })
    })

    d3.select('#skillsAll').on('click', function() {
      simulation
        .force('x', forceXNormal)
        .force('y', forceYNormal)
        .alphaTarget(0.5)
        .restart()

      circleDivs
        .classed('hiddenD3Text', true)
        .classed('shownD3Text', false)
    })
  },
  frontClick() {
    this.setState({ skillFront: 'd3Active', skillBack: '', skillAll: ''})
  },
  backClick() {
    this.setState({ skillBack: 'd3Active', skillFront: '', skillAll: ''})
  },
  allClick() {
    this.setState({ skillAll: 'd3Active', skillFront: '', skillBack: ''})
  },
  componentWillUnmount(){
    var simulation = this.state.simulation
    simulation.stop()

  },
  render() {
    return (
      <div id='d3SkillsContainer'>
      <div id='d3ButtonDiv'>
      <button id='skillsFront'
        className={'skillsButton ' + this.state.skillFront}
        onClick={() => this.frontClick() }>
        Front-End</button>
      <button id='skillsAll'
      className={'skillsButton ' + this.state.skillAll}
      onClick={() => this.allClick() }>
      All</button>
      <button id='skillsBack'
      className={'skillsButton ' + this.state.skillBack}
      onClick={() => this.backClick() }>
      Back-End</button>
      </div>
        <svg>
        </svg>
      </div>
    )
  }
})

module.exports = SkillsD3