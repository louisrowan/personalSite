const React = require('react')
const { Link } = require('react-router')

const Nav = React.createClass({
  render(){
    return (
      <nav>
        <table>
          <tbody>
            <tr>
                <td onClick={() => this.props.handleClick('main') }><Link>Main</Link></td>
                <td onClick={() => this.props.handleClick('skills') }><Link>Skills</Link></td>
                <td onClick={() => this.props.handleClick('project') }><Link>Projects</Link></td>
                <td onClick={() => this.props.handleClick('contact')}><Link>Contact</Link></td>
                <td><Link to='/blog'>Blog</Link></td>
            </tr>
          </tbody>
        </table>
      </nav>
    )
  }
})

module.exports = Nav