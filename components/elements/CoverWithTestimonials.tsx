import React from 'react'

type Props = {
  title?: string
  subtitle?: string
  img?:string
}

export const CoverWithTestimonials = ({ title, subtitle, img }: Props) => {
  // img przekazać do styli
  return (
    <div className='cover-relative m-auto'>
      <div className='cover-testimonials'>
        <h3 className='color-gray-200'>{title}</h3>
        <h5 className='color-gray-200 mt-3'>{subtitle}</h5>
      </div>
    </div>
  )
}
