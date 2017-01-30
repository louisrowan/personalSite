const React = require('react')
const { Link } = require('react-router')

const BlogIndex = React.createClass({
  render(){
    const posts = this.props.posts.map((p, i) => {
      var url = `/blog/${p.url}`
      return  <div key={i}>
                <Link to={url}>{p.title}</Link>
                <p>{p.url}</p>
              </div>
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