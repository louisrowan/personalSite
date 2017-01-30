const React = require('react')

const BlogPost = React.createClass({

  render(){
    const post = this.props.posts.filter((p) => {
      return p.url === this.props.router.params.id
    })[0]

    const content = post.content.map((d, i) => {

      if (d[0] === 'p') {
        return <p key={i}>{d[1]}</p>
      }
      else if (d[0] === 'h3') {
        return <div key={i}><h3>{d[1]}</h3></div>
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
        <h1>{post.title}</h1>
        <h3>{post.date}</h3>
        <section>{content}</section>
      </article>
    )
  }
})

module.exports = BlogPost