const React = require('react')
const posts = require('json!../../public/blog/blog.json').posts
const BlogPost = require('../components/BlogPost')
const BlogNav = require('../components/BlogNav')
const BlogHeader = require('../components/BlogHeader')
const background = require('json!../../public/data.json').images.background
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')


const BlogContainer = React.createClass({
  cloneChildren: function() {
    var key = this.props.location.pathname
    if (this.props.children) {
      return React.cloneElement(this.props.children, { posts: posts, key: key})
    }
  },
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
          <div id='blogContentRelativeDiv'>
            <ReactCSSTransitionGroup
            transitionName='blogContentTransition'
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={500}>
            {this.cloneChildren()}
            </ReactCSSTransitionGroup>
          </div>
        </div>
          
      </div>
    )
  }
})

module.exports = BlogContainer