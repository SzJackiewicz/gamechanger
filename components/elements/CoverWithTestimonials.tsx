import React from 'react'

type Props = {
  title?: string
  subtitle?: string
  img?: string
}

export const CoverWithTestimonials = ({ title, subtitle }: Props) => {
  // img przekazać do styli
  return (
    <div className='cover-relative m-auto'>
      <div className='cover-testimonials'>
        <p className='color-gray-200 font-xl-clamp'>{title}</p>
        <p className='color-gray-200 mt-3 font-l-clamp'>{subtitle}</p>
      </div>
    </div>
  )
}
