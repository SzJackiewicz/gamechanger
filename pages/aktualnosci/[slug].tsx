import React from 'react'
import Layout from '../../components/layout/Layout'
import Breadcrumb from '../../components/elements/Breadcrumb'
import SingleContent from '@/components/sections/SingleContent'
import { useRouter } from 'next/router'
import { SupportUs } from '@/components/sections/SupportUs'
import {getBlogData} from "@/lib/api/blog";

export default function BlogDetails() {
  const router = useRouter()

  const slug = router.query.slug

  if (!slug) {
    return
  }

  const {post, isLoading, error} = getBlogData(slug);

  if (isLoading) return <div />;
  if (error) return <div />;

  return (
    <Layout>
      <div className='cover-home3'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-1' />
            <div className='col-xl-10 col-lg-12'>
              <div className='pt-30 border-bottom border-gray-800 pb-20'>
                <div className='box-breadcrumbs'>
                  <Breadcrumb title={post.title} />
                </div>
              </div>
              <div className='row mt-50 align-items-end'>
                <div className='col-lg-8 m-auto text-center'>
                  <h3 className='color-linear'>{post.title}</h3>
                </div>
              </div>
              <div className='mt-30'>
                <div className='mb-3 center-flex'>
                  <img
                    src={`${post.coverImage.url}`}
                    alt='Genz'
                  />
                </div>

                <div
                  className='box-author col-lg-9 m-auto'
                  data-wow-delay='.2s'
                >
                  <img
                    src='/assets/imgs/page/about/author2.png'
                    alt='Genz'
                  />
                  <div className='author-info'>
                    <span className='color-gray-700 text-sm mr-30'>25 April 2023</span>
                    <span className='color-gray-700 text-sm'>3 minuty czytania</span>
                  </div>
                </div>
                <div
                  className='col-lg-9 m-auto'
                  data-wow-delay='.2s'
                >
                  <div className='row mb-40'>
                    <div className='col-md-6 mb-10' />
                  </div>
                  <SingleContent
                    data-wow-delay='.2s'
                    post={post}
                  />
                </div>
              </div>
            </div>
          </div>
          <SupportUs />
        </div>
      </div>
    </Layout>
  )
}
