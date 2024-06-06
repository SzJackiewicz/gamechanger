import React from 'react'
import Layout from '../../components/layout/Layout'
import Breadcrumb from '../../components/elements/Breadcrumb'
import SingleContent from '@/components/sections/SingleContent'
import { useRouter } from 'next/router'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import {getBlogData} from "@/lib/api/blog";

const BlogDetails = () => {
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
            <div className='col-xl-12 col-lg-12'>
              <div className='pt-30 border-bottom border-gray-800 pb-20'>
                <div className='box-breadcrumbs'>
                  <Breadcrumb title={post.title} />
                </div>
              </div>
              <div className='row mt-50 align-items-end'>
                <div className='col-lg-8 m-auto text-center'>
                  <h3 className='color-linear font-xl-clamp'>{post.title}</h3>
                </div>
              </div>
              <div className='mt-30'>
                <div className='mb-3 center-flex w-75 h-75 m-auto '>
                  <img
                    src={`${post.coverImage.url}`}
                    alt='cover'
                  />
                </div>

                <div
                  className='col-xl-12 col-lg-12 col-md-9 m-auto p-1'
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
          <PartnersLogs />
        </div>
      </div>
    </Layout>
  )
}

export default BlogDetails