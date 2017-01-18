const React = require('react')
const { Link } = require('react-router')
const background = require('json!../../public/data.json').images.background


const BlogContainer = React.createClass({
  render(){
    return (
      <div>
        <div id='blogBackground' style={{"background": `url(${background})`}}></div>
        <Link to ='/'>Back to my main site</Link>
          in BlogContainer
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
      </div>
    )
  }
})

module.exports = BlogContainer