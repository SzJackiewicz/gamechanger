'use server'

import Link from 'next/link'
import AdditionalPosts from './AdditionalPosts'
import Image from 'next/image'
import { getInitHomePageData } from '@/lib/api/homePage'
import { base64Blur } from '@/components/elements/base64ImageBlur'

export const MainSection = () => {
  const { sgPost, isLoading, error } = getInitHomePageData()

  if (isLoading) return <div />
  if (error) return <div />

  const mainSection = sgPost?.sgMain
  const subSections = sgPost?.subposts

  return (
    <>
      {mainSection && subSections && (
        <div className='row'>
          <div className='col-xxl-6 col-xl-7 align-content-center col-md-12 my-lg-4 my-xl-0'>
            <div className='card-style-1 hover-up'>
              <div className='card-image-main '>
                <Link
                  className='link-post'
                  href={`/aktualnosci/${mainSection.slug}`}
                >
                  <Image
                    src={`${mainSection.coverImage.url}`}
                    alt='Article main cover'
                    className='img-opacity'
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    placeholder='blur'
                    blurDataURL={base64Blur}
                  />
                  <div className='img-backdrop' />
                  <div className='card-bg-2 card-info-main-article'>
                    <div className='info-bottom mb-15'>
                      <h4 className='color-white mb-15'>{mainSection.title}</h4>
                      <h6 className='color-white mb-15 font-sm-clamp ellipsis'>{mainSection.subtitle}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xxl-6 col-xl-5 col-md-12 my-sm-4 my-md-4 my-lg-0 '>
            <div className='box-list-posts'>
              <AdditionalPosts posts={subSections} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
