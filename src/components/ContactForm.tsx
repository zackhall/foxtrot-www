import React from 'react'
import { navigate } from 'gatsby-link'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Error = ({ name }) => (
  <span className='text-red-700 text-sm'>
    <ErrorMessage name={name} />
  </span>
)

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string(),
  company: Yup.string(),
  title: Yup.string(),
  aircraftType: Yup.string(),
  airport: Yup.string(),
  message: Yup.string()
    .min(10, 'Too short')
    .max(500, 'Too long')
    .required('Required'),
  botfield: Yup.string(),
})

export default ({ className }) => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      phone: '',
      company: '',
      title: '',
      aircraftType: '',
      airport: '',
      message: '',
      botfield: '',
    }}
    validationSchema={schema}
    onSubmit={(values, actions) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact-page', ...values }),
      })
        .then(() => {
          actions.resetForm()
          navigate('/contact/thanks')
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          actions.setSubmitting(false)
        })
    }}
  >
    <Form
      name='contact-page'
      data-netlify={true}
      data-netlify-honeypot='botfield'
      className={className}
    >
      <div className='hidden'>
        <label>Don’t fill this out: </label>
        <Field name='botfield' />
      </div>

      <div className='flex my-6'>
        <div className='flex-grow'>
          <label htmlFor='name' className='hidden'>
            Name
          </label>
          <Field name='name' className='w-full' placeholder='Name (Required)' />
          <Error name='name' />
        </div>
      </div>

      <div className='flex my-6'>
        <div className='flex-grow mr-3'>
          <label htmlFor='email' className='hidden'>
            Email
          </label>
          <Field
            type='email'
            name='email'
            className='w-full'
            placeholder='E-mail (Required)'
          />
          <Error name='email' />
        </div>
        <div className='flex-grow ml-3'>
          <label htmlFor='phone' className='hidden'>
            Phone
          </label>
          <Field
            name='phone'
            type='tel'
            className='w-full'
            placeholder='Phone'
          />
          <Error name='phone' />
        </div>
      </div>

      <div className='flex my-6'>
        <div className='flex-grow mr-3'>
          <label htmlFor='company' className='hidden'>
            Company
          </label>
          <Field name='company' className='w-full' placeholder='Company' />
          <Error name='company' />
        </div>
        <div className='flex-grow ml-3'>
          <label htmlFor='title' className='hidden'>
            Title
          </label>
          <Field name='title' className='w-full' placeholder='Title' />
          <Error name='title' />
        </div>
      </div>

      <div className='flex my-6'>
        <div className='flex-grow mr-3'>
          <label htmlFor='aircraftType' className='hidden'>
            Aircraft Type
          </label>
          <Field
            name='aircraftType'
            className='w-full'
            placeholder='Aircraft Type'
          />
          <Error name='aircraftType' />
        </div>
        <div className='flex-grow ml-3'>
          <label htmlFor='airport' className='hidden'>
            Airport
          </label>
          <Field name='airport' className='w-full' placeholder='Airport' />
          <Error name='airport' />
        </div>
      </div>

      <div className='my-6'>
        <label htmlFor='message' className='hidden'>
          Message
        </label>
        <Field
          name='message'
          component='textarea'
          className='w-full'
          placeholder='Message (Required)'
        />
        <Error name='message' />
      </div>

      <div className='my-6'>
        <button className='btn' type='submit'>
          Send
        </button>
      </div>
    </Form>
  </Formik>
)
