const React = require('react')
const { Link } = require('react-router')
const background = require('json!../../public/data.json').images.blogNav


const BlogNav = React.createClass({
  render(){
    return (
      <nav id='blogNav'>
        <img id='blogNavGif' src={background} />
        <table>
          <tbody>
            <tr>
              <td>
                <Link to='/'>Portfolio Site</Link>
              </td>
              <td>
                <Link to='/blog'>Posts Index</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    )
  }
})

module.exports = BlogNav