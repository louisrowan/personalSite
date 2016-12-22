const React = require('react')
const HeaderContainer = require('./HeaderContainer')
const MainContainer = require('./MainContainer')

const Home = React.createClass({
  render(){
    return (
      <div className='homeContainer'>
        <MainContainer />
      </div>
    )
  }
})

module.exports = Home