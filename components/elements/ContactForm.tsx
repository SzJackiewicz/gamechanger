import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  imie: string
  email: string
  telefon: string
  temat: string
  wiadomosc: string
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = () => {
    alert('Formularz został wysłany!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row mt-50'>
        <div className='col-lg-6'>
          <div className='form-group'>
            <input
              className='form-control bg-gray-850 border-gray-800 color-gray-500'
              id='imie'
              placeholder='Imię*'
              {...register('imie', { required: true })}
            />
            {errors.imie && <span>To pole jest wymagane</span>}
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
              id='telefon'
              type='tel'
              placeholder='Telefon*'
              {...register('telefon', { required: true })}
            />
            {errors.telefon && <span>To pole jest wymagane</span>}
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='form-group'>
            <input
              className='form-control bg-gray-850 border-gray-800 color-gray-500'
              id='temat'
              placeholder='Temat*'
              {...register('temat', { required: true })}
            />
            {errors.temat && <span>To pole jest wymagane</span>}
          </div>
        </div>
      </div>

      <div className='col-lg-12'>
        <div className='form-group'>
          <textarea
            className='form-control bg-gray-850 border-gray-800 color-gray-500'
            id='wiadomosc'
            placeholder='Wiadomość*'
            {...register('wiadomosc', { required: true })}
          />
          {errors.wiadomosc && <span>To pole jest wymagane</span>}
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
