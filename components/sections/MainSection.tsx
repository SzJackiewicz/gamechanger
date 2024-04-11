import Link from 'next/link'
import data from '@/utils/blogData2'
import { useWindowSize } from 'usehooks-ts'

export const MainSection = () => {
  const { width = 0 } = useWindowSize()

  const SmallPosts = () => {
    if (width > 500) {
      return data.slice(1, 4).map((item, i) => (
        <div
          className='card-list-posts wow animate__animated animate__fadeIn'
          data-wow-delay={`${i / 10}s`}
          key={i}
        >
          <div className='card-image hover-up mt-5'>
            <Link href={`/blog/${item.id}`}>
              <img
                src={`/assets/imgs/page/healthy/${item.img}`}
                alt='Gamechanger'
              />
            </Link>
          </div>
          <div className='card-info'>
            <Link
              className='btn btn-tag bg-gray-800 hover-up'
              href={`/blog/${item.id}`}
            >
              {item.category}
            </Link>
            <Link href={`/blog/${item.id}`}>
              <h4 className='mt-15 mb-20 color-white text-xl'>{item.title}</h4>
            </Link>
            <p className='color-gray-500'>{item.excerpt}</p>
          </div>
        </div>
      ))
    } else {
      return data.slice(1, 4).map((item, i) => (
        <div
          className='card-style-1 hover-up wow animate__animated animate__fadeIn'
          data-wow-delay='.0s'
          key={i}
        >
          <div className='card-image'>
            <Link
              className='link-post'
              href='/single-sidebar'
            >
              <img
                src={`/assets/imgs/page/homepage3/${item.img}`}
                alt='Article main cover'
              />
              <div className='card-info card-bg-2'>
                <div className='info-bottom mb-15'>
                  <h4 className='color-white mb-15'>{item.title}</h4>
                  <h6 className='color-white mb-15'>Podtytuł Podtytuł Podtytuł Podtytuł Podtytuł</h6>
                  <div className='box-author'>
                    <div className='author-info'>
                      <span className='color-gray-700 text-sm'>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))
    }
  }

  return (
    <div className='row'>
      <div className='col-xxl-6 col-xl-7 align-content-center col-md-12'>
        {data.slice(0, 1).map((item, i) => (
          <div key={i}>
            <div
              className='card-style-1 hover-up wow animate__animated animate__fadeIn'
              data-wow-delay='.0s'
            >
              <div className='card-image'>
                <Link
                  className='link-post'
                  href='/single-sidebar'
                >
                  <img
                    src={`/assets/imgs/page/homepage3/${item.img}`}
                    alt='Article main cover'
                  />
                  <div className='card-info card-bg-2'>
                    <div className='info-bottom mb-15'>
                      <h4 className='color-white mb-15'>{item.title}</h4>
                      <h6 className='color-white mb-15'>Podtytuł Podtytuł Podtytuł Podtytuł Podtytuł</h6>
                      <div className='box-author'>
                        <div className='author-info'>
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
      <div className='col-xxl-6 col-xl-5 col-md-12'>
        <div className='box-list-posts gap-4'>
          <SmallPosts />
        </div>
      </div>
    </div>
  )
}
