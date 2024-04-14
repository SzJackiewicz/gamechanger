import React from 'react'
import Head from 'next/head'
import { PortfolioFilter } from '../../components/elements/PortfolioFilter'
import Layout from '../../components/layout/Layout'
import { Testimonial } from '../../components/slider/Testimonial'
import Pagination from '../../components/elements/Pagination'
import { BoardMembers } from '../../components/sections/BoardMembers'
import { Navigation } from '../../types/types'

const Portfolio = ({ navigation }: { navigation: Navigation }) => {
  return (
    <>
      <Head>
        <title>Genz - Portfolio</title>
      </Head>
      <Layout navigation={navigation}>
        <div className='cover-home1'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-1' />
              <div className='col-xl-10 col-lg-12'>
                <div className='text-center mt-70 mb-50'>
                  <h2 className='color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp'>My Latest Projects</h2>
                  <p className='text-lg color-gray-500 wow animate__animated animate__fadeInUp'>
                    The convention is the main event of the year for professionals in
                    <br className='d-none d-lg-block' />
                    the world of design and architecture.
                  </p>
                </div>
                <PortfolioFilter
                  col={6}
                  show={6}
                />
                <Pagination />
                <BoardMembers />
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Portfolio
