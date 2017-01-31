const React = require('react')
const { Link } = require('react-router')
const background = require('json!../../public/data.json').images.blogNav
const posts = require('json!../../public/blog/blog.json').posts


const BlogNav = React.createClass({
  getInitialState(){
    return {
      dropdown: 'hideDropdown'
    }
  },
  showNav(){
    this.setState({ dropdown: 'showDropdown'})
  },
  hideNav(){
    this.setState({ dropdown: 'hideDropdown'})
  },
  render(){
    let listItems = posts.map((p) => {
      var url = `/blog/${p.url}`
      return <li key={p.id}><Link to={url}>{p.title}</Link></li>
    })
    return (
      <nav id='blogNav' onMouseLeave={() => this.hideNav()}>
        <img id='blogNavGif' src={background} />
        <table>
          <tbody>
            <tr>
              <td>
                <Link to='/'>Portfolio Site</Link>
              </td>
              <td id='dropdownTD'>
                <Link onClick={()=> this.showNav()}>Posts</Link>
                <ul id='blogDropdownList' className={this.state.dropdown}
                onClick={()=> this.hideNav()}>
                  <li>
                    <Link to='/blog'>Posts Index</Link>
                  </li>
                  {listItems}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    )
  }
})

module.exports = BlogNav