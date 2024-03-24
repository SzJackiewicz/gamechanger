import Link from 'next/link'
import data from '@/utils/blogData2'

const EditorPicked = () => {
  return (
    <div className='row'>
      <div className='row mt-70'>
        {data.slice(0, 2).map((item, i) => (
          <div
            className='col-lg-6'
            key={i}
          >
            <div
              className='card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn'
              data-wow-delay='.0s'
            >
              <div className='card-image'>
                <Link
                  className='link-post'
                  href='/single-sidebar'
                >
                  <img
                    src={`/assets/imgs/page/homepage3/${item.img}`}
                    alt='Genz'
                  />
                  <div className='card-info card-bg-2'>
                    <div className='info-bottom mb-15'>
                      <h4 className='color-white mb-15'>{item.title}</h4>
                      <div className='box-author'>
                        <img
                          src='assets/imgs/page/homepage3/author.jpg'
                          alt='Genz'
                        />
                        <div className='author-info'>
                          <h6 className='mr-15 color-gray-700'>{item.authorName}</h6>
                          <span className='color-gray-700 text-sm'>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditorPicked
