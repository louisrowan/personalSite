const React = require('react')
const Home = require('../components/Home')
const Nav = require('../components/Nav')
const background = require('json!../../public/data.json').images.background_city

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
        <div id='layoutDiv' className='pageContainer'>
          <div id='layoutBackground'>
              <img src={background} />
                <div></div>
            </div>
          <Nav handleClick={this.handleClick} />
          <Home content={this.state.content} />
        </div>
    )
  }
})

module.exports = HomeContainer