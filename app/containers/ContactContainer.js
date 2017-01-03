const React = require('react')
const $ = require('jquery')

const ContactContainer = React.createClass({
  getInitialState () {
    return {
      submitted: false,
      email: '',
      message: '',
      phone: ''
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
  handlePhoneChange (phone) {
    phone = phone.target.value
    this.setState({ phone })
  },
  handleSubmit (e) {
    e.preventDefault()
    let email = this.state.email
    let message = this.state.message
    let phone = this.state.phone
    let that = this
    $.ajax({
      method: 'post',
      dataType: 'json',
      url: "http://formspree.io/louis.rowan@icloud.com",
      data: { email: email, message: message, phone: phone }
    })
    .then((res) => {
      console.log(res)
      that.setState({ submitted: true })
    })
    .catch((err) => {
      console.log(err)
      console.log('error')
    })
  },
  render(){
    console.log(this.state.submitted)
    let formClass;
    this.state.submitted ? formClass = 'formSubmit' : formClass = ''
    let success;
    if (this.state.submitted) {
      success = <h1 className='formSuccess'>Success!</h1>
    } else {
      success = ''
    }
    return (
      <div className='contactContainer'>
        <h1>Contact Me</h1>
        {success}
        <form className={'contactForm ' + formClass} onSubmit={ (e) => this.handleSubmit(e)} >
          <input className='contactInput'
            onChange={(email)=> this.handleEmailChange(email)}
            type="email"
            name="email"
            placeholder="Your email" />
          <input className='contactInput'
            onChange={(phone)=> this.handlePhoneChange(phone)}
            type="text"
            name="phone"
            placeholder="Your phone number" />
          <br />
          <textarea className='contactTextarea'
            onChange={(message)=> this.handleMessageChange(message)}
            name="message"
            placeholder="Your message"></textarea>
          <br />
          <button className='contactSubmit' type="submit">Submit</button>
        </form>
      </div>
    )
  }
})

module.exports = ContactContainer

// <form method="POST" action="http://formspree.io/louis.rowan@icloud.com">
