const React = require('react')
const { Link } = require('react-router')

const Nav = React.createClass({
  render(){
    return (
      <nav id='siteNav'>
        <table>
          <tbody>
            <tr>
                <td><Link onClick={() => this.props.handleClick('main')} >Main</Link></td>
                <td><Link onClick={() => this.props.handleClick('skills') }>Skills</Link></td>
                <td><Link onClick={() => this.props.handleClick('project') }>Projects</Link></td>
                <td><Link onClick={() => this.props.handleClick('contact')}>Contact</Link></td>
                <td><Link to='/blog'>Blog</Link></td>
            </tr>
          </tbody>
        </table>
      </nav>
    )
  }
})

module.exports = Nav