const React = require('react')
const { Link } = require('react-router')

const BlogIndex = React.createClass({
  render(){
    console.log(this.props)
    const posts = this.props.posts.map((p, i) => {
      var url = `/blog/${p.url}`
      return  <p key={i}><Link to={url}>{p.title}</Link></p>
    })
    return (
      <article>
        <div className='articleBackground'></div>
        {posts}
      </article>
    )
  }
})

module.exports = BlogIndex