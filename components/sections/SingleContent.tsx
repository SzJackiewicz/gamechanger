'use server'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { heroSectionData } from '@/public/assets/data/heroSection/heroSectionData'

const SingleContent = ({ articleId, content }: { articleId: string | string[] | undefined; content?: MDXRemoteSerializeResult }) => {
  return (
    <>
      <div
        className='content-detail border-gray-800'
        data-wow-delay='.3s'
      >
        <h3 className='color-white mb-30'>{(articleId && heroSectionData[Number(articleId)]?.subtitle) || ''}</h3>
        <p className='text-xl color-gray-500'>{(articleId && heroSectionData[Number(articleId)]?.article) || ''}</p>
        {content && (
          <div className='font-md-clamp color-gray-500'>
            <MDXRemote {...content} />
          </div>
        )}
        <div
          className='bg-gray-850 box-quote'
          data-wow-delay='.1s'
        >
          <h3
            className='color-gray-500'
            data-wow-delay='.3s'
          >
            {(articleId && heroSectionData[Number(articleId)].subtitle) || ''}
          </h3>
        </div>
      </div>
    </>
  )
}
export default SingleContent
