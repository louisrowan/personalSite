const React = require('react')
const { Link } = require('react-router')

const BlogNav = React.createClass({
  render(){
    return (
      <nav id='blogNav'>
        <img id='blogNavGif' src={'https://media.giphy.com/media/YrAoJDF69XvMI/giphy.gif'} />
        <table>
          <tbody>
            <tr>
              <td>
                <Link to='/'>Main Site</Link>
              </td>
              <td>
                <Link>Posts</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    )
  }
})

module.exports = BlogNav