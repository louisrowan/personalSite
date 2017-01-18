const React = require('react')
const { Link } = require('react-router')
const posts = require('json!../../public/blog.json').posts
const BlogPost = require('../components/BlogPost')
const background = require('json!../../public/data.json').images.background


const BlogContainer = React.createClass({
  render(){

    const blogPosts = posts.map((p, i) => {
      return <BlogPost key={i} data={p} />
    })

    return (
      <div>
        <div id='blogBackground' style={{"background": `url(${background})`}}></div>
        <Link to ='/'>Back to my main site</Link>
      
        {blogPosts}
          
      </div>
    )
  }
})

module.exports = BlogContainer