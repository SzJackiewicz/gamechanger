import React, { useState } from 'react'
import { SupportOption } from './SupportOption/SupportOption'
import { SupportValue } from './SupportOption/SupportValue'

export const SupportUsForm = () => {
  const [activeValueOptionId, setActiveValueOptionId] = useState<number | null>(null)
  const [activeSupportOptionId, setActiveSupportOptionId] = useState<number | null>(null)

  const valueOptions = [
    { id: 1, label: '20 zł' },
    { id: 2, label: '50 zł' },
    { id: 3, label: '100 zł' },
  ]

  const supportOptions = [
    { id: 1, label: 'Co miesiąc' },
    { id: 2, label: 'Jednorazowo' },
  ]

  // Now handleOptionClick takes an additional parameter to identify the option group
  const handleOptionClick = (id: number, type: 'value' | 'support') => {
    if (type === 'value') {
      setActiveValueOptionId(id)
    } else if (type === 'support') {
      setActiveSupportOptionId(id)
    }
  }

  return (
    <div className='col-xl-6 row mx-auto support-us-form m-5'>
      <div className='text-center mt-30'>
        <h2 className='color-linear d-inline-block'>Wesprzyj nas</h2>
      </div>
      <div className='row mt-50'>
        {valueOptions.map((option) => (
          <SupportValue
            key={option.id}
            optionValue={option.label}
            isActive={activeValueOptionId === option.id}
            onOptionClick={() => handleOptionClick(option.id, 'value')}
          />
        ))}
      </div>
      <div className='row'>
        {supportOptions.map((option) => (
          <SupportOption
            key={option.id}
            optionValue={option.label}
            isActive={activeSupportOptionId === option.id}
            onOptionClick={() => handleOptionClick(option.id, 'support')}
          />
        ))}
      </div>
      <div className='w-full center-flex flex-column mt-3 '>
        <h5 className='color-gray-300'>Na co przeznaczamy Twoje środki?</h5>
        <ol className=''>
          <li className='m-3 text-base'>Lorem ipsum dolor sit amet</li>
          <li className='m-3 text-base'>Lorem ipsum dolor sit amet</li>
          <li className='m-3 text-base'>Lorem ipsum dolor sit amet</li>
          <li className='m-3 text-base'>Lorem ipsum dolor sit amet</li>
          <li className='m-3 text-base'>Lorem ipsum dolor sit amet</li>
        </ol>
      </div>
      <h4 className='col-xl-6 text-xl color-gray-300'>Sposoby płatności</h4>
      <div className='center-flex gap-4 px-5 '>
        <div className='payment-methods border-gray-800 bg-gray-850 mb-20 center-flex w-25 m-2'>
          <label className='color-gray-300'>BLIK</label>
        </div>
        <div className='payment-methods border-gray-800 bg-gray-850 mb-20 center-flex w-25 m-2'>
          <label className='color-gray-300'>PAYU</label>
        </div>
        <div className='payment-methods border-gray-800 bg-gray-850 mb-20 center-flex w-25 m-2'>
          <label className='color-gray-300'>KARTA</label>
        </div>
        <div className='payment-methods border-gray-800 bg-gray-850 mb-20 center-flex w-25 m-2'>
          <label className='color-gray-300'>PRZELEWY24</label>
        </div>
      </div>
      <div className='go-to-payment'>
        <h6 className='color-gray-300'>DALEJ</h6>
      </div>
    </div>
  )
}
