import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <div className={this.props.className}>
        <form
          name='contact'
          method='post'
          action='/contact/thanks/'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type='hidden' name='form-name' value='contact' />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name='bot-field' onChange={this.handleChange} />
            </label>
          </div>
          <div className='flex my-6'>
            <div className='mr-6 flex-grow'>
              <label className='hidden' htmlFor={'name'}>
                Your name
              </label>
              <input
                className='w-full'
                type={'text'}
                name={'name'}
                onChange={this.handleChange}
                id={'name'}
                placeholder='Name'
                required={true}
              />
            </div>
            <div className='flex-grow'>
              <label className='hidden' htmlFor={'email'}>
                Email
              </label>
              <input
                className='w-full'
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                placeholder='E-mail'
                required={true}
              />
            </div>
          </div>
          <div className='my-6'>
            <label className='hidden' htmlFor={'message'}>
              Message
            </label>
            <textarea
              className='w-full'
              name={'message'}
              onChange={this.handleChange}
              id={'message'}
              placeholder='Message'
              required={true}
            />
          </div>
          <div>
            <button className='btn' type='submit'>
              Send
            </button>
          </div>
        </form>
      </div>
    )
  }
}
