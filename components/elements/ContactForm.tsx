import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>()
  const [responseMessage, setResponseMessage] = useState<string | null>(null)

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setResponseMessage(null)
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      await response.json()
      setResponseMessage('Wiadomość została wysłana pomyślnie!')
      reset()
    } catch (error) {
      console.error('Error:', error)
      setResponseMessage('Wystąpił błąd podczas wysyłania wiadomości.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row mt-50'>
        <div className='col-lg-6'>
          <div className='form-group'>
            <input
              className='form-control bg-gray-850 border-gray-800 color-gray-500'
              id='name'
              placeholder='Imię*'
              {...register('name', { required: true })}
            />
            {errors.name && <span className='mt-5'>To pole jest wymagane</span>}
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
            {errors.email && <span className='mt-5'>To pole jest wymagane</span>}
          </div>
        </div>
      </div>

      <div className='row'>
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
              placeholder='Temat'
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
          {errors.message && <span className='mt-5'>To pole jest wymagane</span>}
        </div>
      </div>

      <button
        className='btn btn-linear btn-load-more btn-radius-8 hover-up'
        type='submit'
        disabled={isSubmitting}
      >
        Wyślij
        <i className='fi-rr-arrow-small-right' />
      </button>
      {responseMessage && <p className='mt-5'>{responseMessage}</p>}
    </form>
  )
}
