const React = require('react')
const Home = require('../components/Home')
const Nav = require('../components/Nav')

const HomeContainer = React.createClass({
  getInitialState() {
    return {
      content: 'main'
    }
  },
  handleClick(e) {
    this.setState({ content: e })
  },
  render(){
    return (
      <div id='layoutDiv'>
        <Nav handleClick={this.handleClick} />
        <Home content={this.state.content} />
      </div>
    )
  }
})

module.exports = HomeContainer