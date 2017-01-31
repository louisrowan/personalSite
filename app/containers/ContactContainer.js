const React = require('react')
const ContactForm = require('../components/ContactForm')
const $ = require('jquery')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')
const data = require('json!../../public/data.json').images


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
    this.setState({ showForm: !this.state.showForm })
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
      success = <div className='formSuccess'><h1>Message sent, Thanks!</h1></div>
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
          handleShowForm = {this.handleShowForm}
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
                <td>
                  <a className='iconLink' href='tel:6173653595'>
                    <div className='contactPhone contactIMG'>
                    </div>
                  </a>
                </td><td><a href='tel:6173653595'>617-365-3595</a></td>
              </tr>
              <tr>
                <td>
                  <a className='iconLink' target="_blank" href="https://www.linkedin.com/in/louis-rowan-54869986">
                    <div className='contactIMG'>
                      <img src={data.linkedin} />
                    </div>
                  </a>
                </td>
                <td>
                  <a target="_blank" href="https://www.linkedin.com/in/louis-rowan-54869986">LinkedIn</a>
                </td>
             </tr>
             <tr>
                <td>
                  <a className='iconLink' target="_blank" href="https://github.com/louisrowan">
                    <div className='contactIMG'>
                      <img src={data.github} />
                    </div>
                  </a>
                </td>
                <td>
                  <a target="_blank" href="https://github.com/louisrowan">Github</a>
                </td>
              </tr>
             <tr>
                <td>
                <a className='iconLink' href='mailto:louis.rowan@icloud.com?Subject=Great%20Website!' target='_top'>
                  <div className='contactEmail contactIMG'>
                  </div>
                </a>
                </td>
                <td>
                  <a href='mailto:louis.rowan@icloud.com?Subject=Great%20Website!' target='_top'>louis.rowan@icloud.com</a>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 id='h2ClickContact' onClick={()=> this.handleShowForm()}>
          Or Click to Message me Directly</h2>
        </div>

        {success}
        
        <ReactCSSTransitionGroup
          transitionName='showForm'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
        {form}
        </ReactCSSTransitionGroup>

      </div>
    )
  }
})

module.exports = ContactContainer
