const React = require('react')
const ContactForm = require('../components/ContactForm')
const $ = require('jquery')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')

const ContactContainer = React.createClass({
  getInitialState () {
    return {
      submitted: false,
      showForm: false,
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
  handleShowForm () {
    this.setState({ showForm: true })
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
 
    let success;
    if (this.state.submitted) {
      success = <div className='formSuccess'><h1>Success!</h1></div>
    } else {
      success = ''
    }

    let form;
    if (this.state.showForm) {
      form = 
        <ContactForm
          handleEmailChange = {this.handleEmailChange}
          handlePhoneChange = {this.handlePhoneChange}
          handleMessageChange = {this.handleMessageChange}
          handleSubmit = {this.handleSubmit}
          submitted = {this.state.submitted}
          />
    } else {
      form = ''
    }

    return (
      <div className='contactContainer'>
        <h1>Contact Me</h1>

        <div>
          <table className='contactTable'>
           <tbody>
             <tr>
                <td><div className='contactPhone'></div></td><td>Phone</td>
             </tr>
              <tr>
                <td><div className='contactLinkedIn'></div></td><td>LinkedIn</td>
             </tr>
             <tr>
                <td><div className='contactGithub'></div></td><td>Github</td>
              </tr>
             <tr>
                <td><div className='contactEmail'></div></td><td onClick={()=> this.handleShowForm()}>Email</td>
              </tr>
            </tbody>
          </table>
        </div>

        {success}
        
        <ReactCSSTransitionGroup
          transitionName='showForm'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={0}>
        {form}
        </ReactCSSTransitionGroup>

      </div>
    )
  }
})

module.exports = ContactContainer

// <form method="POST" action="http://formspree.io/louis.rowan@icloud.com">
