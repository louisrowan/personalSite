const React = require('react')

const HeaderContainer = React.createClass({
  render(){
    return (
      <div className='headerContainer'>
        <h1>header</h1>
        <p>My name is blah</p>
        <p>I do blah</p>
        <p>*picture of me here*</p>
      </div>
    )
  }
})

module.exports = HeaderContainer
