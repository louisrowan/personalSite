const React = require('react')

const BlogPost = React.createClass({
  render(){

    const content = this.props.data.content.map((d, i) => {

      if (d[0] === 'p') {
        return <p key={i}>{d[1]}</p>
      }
      else if (d[0] === 'h2') {
        return <div key={i}><h2>{d[1]}</h2></div>
      }
      else if (d[0] === 'img') {
        return <img src={d[1]} key={i} />
      }
      else if (d[0] === 'a') {
        return <a href={d[1]} key={i}>{d[2]}</a>
      }
      else if (d[0] === 'ol') {
        let items = d[1].map((li, index) => <li key={index}>{li}</li>)
        return <ol key={i}>{items}</ol>
      }
    })

    return (
      <article>
        <div className='articleBackground'></div>
        <h1>{this.props.data.title}</h1>
        <section>{content}</section>
      </article>
    )
  }
})

module.exports = BlogPost