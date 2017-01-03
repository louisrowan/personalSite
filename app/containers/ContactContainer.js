const React = require('react')
const $ = require('jquery')

const ContactContainer = React.createClass({
  getInitialState () {
    return {
      email: '',
      message: ''
    }
  },
  handleEmailChange (email) {
    email = email.target.value
    this.setState({ email })
  },
  handleMessageChange (message) {
    message = message.target.value
    this.setState({ message })
  },
  handleSubmit (e) {
    e.preventDefault()
    let email = this.state.email
    let message = this.state.message
    $.ajax({
      method: 'post',
      dataType: 'json',
      url: "http://formspree.io/louis.rowan@icloud.com",
      data: { email: email, message: message }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
      console.log('error')
    })
  },
  render(){
    return (
      <div className='contactContainer'>
        <h1>test</h1>
        <form onSubmit={ (e) => this.handleSubmit(e)} >
          <input onChange={(email)=> this.handleEmailChange(email)} type="email" name="email" placeholder="Your email" />
          <textarea onChange={(message)=> this.handleMessageChange(message)} name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
        <h1>test</h1>
      </div>
    )
  }
})

module.exports = ContactContainer

// <form method="POST" action="http://formspree.io/louis.rowan@icloud.com">
