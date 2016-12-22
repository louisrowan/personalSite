const React = require('react')
const ReactDOM = require('react-dom')

const App = React.createClass({
  render(){
    return (
      <p>In React</p>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)