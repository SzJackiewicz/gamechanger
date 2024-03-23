import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import EditorPicked from '@/components/sections/EditorPicked'
import PopularCategories from '@/components/sections/PopularCategories'
import RecentPosts from '@/components/sections/RecentPosts'

export default function Home({navigation}) {

  return (
    <>
      <Head>
        <title>Genz - Creative Personal Blog Portfolio NextJS Template</title>
      </Head>
      <Layout navigation={navigation}>
        <div className='cover-home1'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-1' />
              <div className='col-xl-12 col-lg-12'>
                <EditorPicked />
                <PopularCategories />
                <div className='row mt-70'>
                  <div className='col-lg-8'>
                    <RecentPosts />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
