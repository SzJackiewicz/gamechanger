import Link from 'next/link'
import data from '@/utils/blogData2'

const EditorPicked = () => {
  return (
    <div className='row'>
      <div className='row mt-70'>
        {data.slice(0, 4).map((item, i) =>
          i < 1 ? (
            <div
              className='col-lg-6 wow animate__animated animate__fadeIn'
              key={i}
            >
              <div className='card-blog-1 hover-up'>
                <div className='card-image mb-20 mh-315 bdr-16'>
                  <Link
                    className='post-type'
                    href={`/blog/${item.id}`}
                  />
                  <Link href={`/blog/${item.id}`}>
                    <img
                      src={`/assets/imgs/page/healthy/${item.img}`}
                      alt='Genz'
                    />
                  </Link>
                </div>
                <div className='card-info'>
                  <div className='row'>
                    <div className='col-7'>
                      <Link
                        className='color-gray-700 text-sm'
                        href={`/blog/${item.id}`}
                      >
                        #PomagaMY
                      </Link>
                    </div>
                    <div className='col-5 text-end'>
                      <span className='color-gray-700 text-sm timeread'>{item.duration} mins read</span>
                    </div>
                  </div>
                  <Link href={`/blog/${item.id}`}>
                    <h4 className='color-white mt-20'>{item.title}</h4>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className='col-lg-4 wow animate__animated animate__fadeIn'
              data-wow-delay='.1s'
              key={i}
            >
              <div className='card-blog-1 hover-up'>
                <div className='card-image mb-20 mh-200 bdr-16 '>
                  <Link
                    className='post-type'
                    href={`/blog/${item.id}`}
                  />
                  <Link href={`/blog/${item.id}`}>
                    <img
                      src={`/assets/imgs/page/healthy/${item.img}`}
                      alt='Genz'
                    />
                  </Link>
                </div>
                <div className='card-info'>
                  <div className='row'>
                    <div className='col-7'>
                      <Link
                        className='color-gray-700 text-sm'
                        href={`/blog/${item.id}`}
                      >
                        {' '}
                        #Design
                      </Link>
                    </div>
                    <div className='col-5 text-end'>
                      <span className='color-gray-700 text-sm timeread'>{item.duration} mins read</span>
                    </div>
                  </div>
                  <Link href='/single-sidebar'>
                    <h5 className='color-white mt-20'>{item.title}</h5>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default EditorPicked
