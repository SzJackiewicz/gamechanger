const Accordion = () => {
  return (
    <div
      className='accordion'
      id='accordionFaqs'
    >
      <div className='accordion-item border-gray-800 wow animate__animated animate__fadeIn'>
        <h2 className='accordion-header'>
          <a
            href='/public/downloads/statut.pdf'
            download
          >
            <button className='accordion-button collapsed'>
              <span className='heading-4 color-white'>Statut</span>
            </button>
          </a>
        </h2>
        <div className='accordion-collapse collapse'>
          <div className='accordion-body'>
            Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula
            eleifend velit, luctus mattis ante nulla condimentum nulla.
          </div>
        </div>
      </div>
      <div className='accordion-item border-gray-800 wow animate__animated animate__fadeIn'>
        <h2 className='accordion-header'>
          <a
            href='/public/downloads/ksiega.pdf'
            download
          >
            <button className='accordion-button collapsed'>
              <span className='heading-4 color-white'>Księga znaku</span>
            </button>
          </a>
        </h2>
        <div className='accordion-collapse collapse'>
          <div className='accordion-body'>
            Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula
            eleifend velit, luctus mattis ante nulla condimentum nulla.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
