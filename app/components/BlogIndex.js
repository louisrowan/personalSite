const React = require('react')
const { Link } = require('react-router')

const BlogIndex = React.createClass({
  render(){
    const posts = this.props.posts.map((p, i) => {
      var url = `/blog/${p.url}`
      return  <div className='blogIndexDivs' key={p.url}>
                <Link to={url}>
                <div>
                  <h2>{p.title}</h2>
                  <p>{p.teaser}</p>
                </div>
                </Link>
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