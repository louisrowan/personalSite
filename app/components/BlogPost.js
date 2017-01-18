const React = require('react')

const BlogPost = React.createClass({
  render(){

    const content = this.props.data.content.map((d) => {
      console.log(d)
      if (d[0] === 'p') {
        return <p>{d[1]}</p>
      }
      else if (d[0] === 'h1') {
        return <h1>{d[1]}</h1>
      }
    })

    return (
      <div>
        {this.props.data.title}
        {content}
      </div>
    )
  }
})

module.exports = BlogPost