const React = require('react')
const posts = require('json!../../public/blog/blog.json').posts
const BlogPost = require('../components/BlogPost')
const BlogNav = require('../components/BlogNav')
const BlogHeader = require('../components/BlogHeader')
const background = require('json!../../public/data.json').images.background

const BlogContainer = React.createClass({
  render(){

    const blogPosts = posts.map((p, i) => {
      return <BlogPost key={i} data={p} />
    })

    return (
      <div className='pageContainer'>
        <BlogNav posts={posts} />
        <div id='blogBackground' style={{"background": `url(${background})`}}></div>
        <div id='blogPostsDiv'>
          <BlogHeader />
          {blogPosts}
        </div>
          
      </div>
    )
  }
})

module.exports = BlogContainer