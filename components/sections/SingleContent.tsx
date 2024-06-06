'use server'

import { StructuredText } from "react-datocms"

const SingleContent = ({post}) => {

return (
    <>
      <div
        className='content-detail border-gray-800'
        data-wow-delay='.3s'
      >
        <h3 className='color-white mb-30'>{post.title || ''}</h3>

        <div
          className='bg-gray-850 box-quote'
          data-wow-delay='.1s'
        >
          <h3
            className='color-gray-500'
            data-wow-delay='.3s'
          >
              <StructuredText data={post.content} />
          </h3>§
        </div>
      </div>
    </>
  )
}
export default SingleContent
