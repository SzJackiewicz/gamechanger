'use server'

export type SupportUsProps = {
  copy?: string
  subtitle?: string
  children?: React.ReactNode
}

export const SupportUs = ({ children, copy, subtitle }: SupportUsProps) => {
  return (
    <>
      <div className='list-logos mb-10'>
        <div className='container'>
          <div className='center-flex mt-50'>
            <h3 className='color-linear d-inline-block wow animate__animated animate__fadeInUp m-auto text-center'>{copy}</h3>
          </div>
          <div className='center-flex mt-30'>
            <h4 className='color-gray-100 wow animate__animated animate__fadeInUp m-auto font-md-clamp text-center'>{subtitle}</h4>
          </div>
          <div className='row center-flex-between'>{children}</div>
        </div>
      </div>
    </>
  )
}
