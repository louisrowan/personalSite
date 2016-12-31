const React = require('react')

const Nav = React.createClass({
  render(){
    return (
      <nav>
        <table>
          <tbody>
            <tr>
                <td onClick={() => this.props.handleClick('main') }>Main</td>
                <td onClick={() => this.props.handleClick('skills') }>Skills</td>
                <td onClick={() => this.props.handleClick('project') }>Projects</td>
                <td onClick={() => this.props.handleClick('contact')}>Contact</td>
            </tr>
          </tbody>
        </table>
      </nav>
    )
  }
})

module.exports = Nav