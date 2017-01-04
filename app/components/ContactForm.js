const React = require('react')

const ContactForm = React.createClass({
  render () {
    let formClass;
    this.props.submitted ? formClass = 'formSubmit' : formClass = ''
    return (
      <form className={'contactForm ' + formClass} onSubmit={ (e) => this.props.handleSubmit(e)} >
        <input className='contactInput'
          onChange={(email)=> this.props.handleEmailChange(email)}
          type="email"
          name="email"
          placeholder="Your email" />
        <input className='contactInput'
          onChange={(phone)=> this.props.handlePhoneChange(phone)}
          type="text"
          name="phone"
          placeholder="Your phone number" />
        <br />
        <textarea className='contactTextarea'
          onChange={(message)=> this.props.handleMessageChange(message)}
          name="message"
          placeholder="Your message"></textarea>
        <br />
        <button className='contactSubmit' type="submit">Submit</button>
      </form>
    )
  }
})

module.exports = ContactForm