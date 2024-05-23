'use server'

import { heroSectionData } from '@/public/assets/data/heroSection/heroSectionData'

const SingleContent = ({ articleId }: { articleId: string | string[] | undefined }) => {
  return (
    <>
      <div
        className='content-detail border-gray-800'
        data-wow-delay='.3s'
      >
        <h3 className='color-white mb-30'>{(articleId && heroSectionData[Number(articleId)]?.subtitle) || ''}</h3>
        <p className='font-md-clamp color-gray-500'>{(articleId && heroSectionData[Number(articleId)]?.article) || ''}</p>

        <div
          className='bg-gray-850 box-quote'
          data-wow-delay='.1s'
        >
          <h3
            className='color-gray-500'
            data-wow-delay='.3s'
          >
            {(articleId && heroSectionData[Number(articleId)]?.subtitle) || ''}
          </h3>
        </div>
      </div>
    </>
  )
}
export default SingleContent
