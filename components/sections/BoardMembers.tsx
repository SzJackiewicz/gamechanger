export const BoardMembers = ({ title }: { title?: string }) => {
  return (
    <>
      <div className='text-center mt-70 mb-20'>
        <h3 className='color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp'>{title}</h3>
      </div>
      <div className='box-features bg-gray-850'>
        <div className='flex flex-row flex-wrap align-items-center justify-content-center '>
          <div
            className='borad-member wow animate__animated animate__fadeIn'
            data-wow-delay='0s'
          >
            <span className='item-icon bg-gray-950 icon-motion' />
            <h5 className='color-white mb-15'>Barbara Nowak</h5>
            <p className='text-base color-gray-500'>Członek Zarządu</p>
          </div>
          <div
            className='borad-member wow animate__animated animate__fadeIn'
            data-wow-delay='0.1s'
          >
            <span className='item-icon bg-gray-950 icon-ui' />
            <h5 className='color-white mb-15'>Jan Kowalski</h5>
            <p className='text-base color-gray-500'>Członek Zarządu</p>
          </div>
          <div
            className='borad-member wow animate__animated animate__fadeIn'
            data-wow-delay='0.2s'
          >
            <span className='item-icon bg-gray-950 icon-branding' />
            <h5 className='color-white mb-15'>Jacek Szymkiewicz</h5>
            <p className='text-base color-gray-500'>Członek Zarządu</p>
          </div>
        </div>
      </div>
    </>
  )
}
