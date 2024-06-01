import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // eslint-disable-next-line no-console
    console.log({ data })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action='https://formsubmit.co/sz.jackiewicz@gmail.com'
      method='POST'
    >
      <div className='row mt-50'>
        <div className='col-lg-6'>
          <div className='form-group'>
            <input
              className='form-control bg-gray-850 border-gray-800 color-gray-500'
              id='name'
              placeholder='Imię*'
              {...register('name', { required: true })}
            />
            {errors.name && <span>To pole jest wymagane</span>}
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='form-group'>
            <input
              className='form-control bg-gray-850 border-gray-800 color-gray-500'
              id='email'
              type='email'
              placeholder='Email*'
              {...register('email', { required: true })}
            />
            {errors.email && <span>To pole jest wymagane</span>}
          </div>
        </div>
      </div>

      <div className='row '>
        <div className='col-lg-6'>
          <div className='form-group'>
            <input
              className='form-control bg-gray-850 border-gray-800 color-gray-500'
              id='phone'
              type='tel'
              placeholder='Telefon'
              {...register('phone', { required: false })}
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='form-group'>
            <input
              className='form-control bg-gray-850 border-gray-800 color-gray-500'
              id='subject'
              placeholder='Temat*'
              {...register('subject', { required: false })}
            />
          </div>
        </div>
      </div>

      <div className='col-lg-12'>
        <div className='form-group'>
          <textarea
            className='form-control bg-gray-850 border-gray-800 color-gray-500'
            id='message'
            placeholder='Wiadomość*'
            {...register('message', { required: true })}
          />
          {errors.message && <span>To pole jest wymagane</span>}
        </div>
      </div>

      <button
        className='btn btn-linear btn-load-more btn-radius-8 hover-up'
        type='submit'
      >
        Wyślij
        <i className='fi-rr-arrow-small-right' />
      </button>
    </form>
  )
}
