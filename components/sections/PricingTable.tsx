'use server'

import Link from 'next/link'
import React from 'react'

export const PricingTable = () => {
  return (
    <div
      className='wow animate__animated animate__fadeInUp'
      data-wow-delay='.2s'
    >
      <div className='text-center mt-30 mb-10'>
        <h2 className='color-linear d-inline-block mb-10'>Wesprzyj nas</h2>
      </div>
      <div className='row mt-50 mb-30'>
        <div className='col-lg-4'>
          <div className='card-pricing border-gray-800 bg-gray-850 mb-30'>
            <div className='card-pricing-top border-gray-800'>
              <h4 className='color-white mb-10'>Jednorazowo</h4>
              <p className='text-lg color-gray-500 mb-15'>Best for personal use</p>
              <p className='text-base color-gray-500 mb-30'>Get started without creadit card or payment method</p>
              <Link
                className='btn btn-border-linear'
                href='#'
              >
                Wesprzyj nas
              </Link>
            </div>
            <div className='card-pricing-bottom'>
              <h6 className='color-white mb-25'>Co zyskujesz:</h6>
              <ul className='list-checked'>
                <li>Unlimited Storage</li>
                <li>Unlimited Members</li>
                <li>Two-Factor Authentication</li>
                <li>Collaborative Docs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card-pricing border-gray-800 bg-gray-850 mb-30'>
            <div className='card-pricing-top border-gray-800'>
              <h4 className='color-white mb-10'>Co miesiąc</h4>
              <p className='text-lg color-gray-500 mb-15'>Best for personal use</p>
              <p className='text-base color-gray-500 mb-30'>Get started without creadit card or payment method</p>
              <Link
                className='btn btn-border-linear'
                href='#'
              >
                Wesprzyj nas
              </Link>
            </div>
            <div className='card-pricing-bottom'>
              <h6 className='color-white mb-25'>Co zyskujesz:</h6>
              <ul className='list-checked'>
                <li>Unlimited Storage</li>
                <li>Unlimited Members</li>
                <li>Two-Factor Authentication</li>
                <li>Collaborative Docs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card-pricing border-gray-800 bg-gray-850 mb-30'>
            <div className='card-pricing-top border-gray-800'>
              <h4 className='color-white mb-10'>Podaruj przedmiot</h4>
              <p className='text-lg color-gray-500 mb-15'>Best for personal use</p>
              <p className='text-base color-gray-500 mb-30'>Get started without creadit card or payment method</p>
              <Link
                className='btn btn-border-linear'
                href='#'
              >
                Wesprzyj nas
              </Link>
            </div>
            <div className='card-pricing-bottom'>
              <h6 className='color-white mb-25'>Co zyskujesz:</h6>
              <ul className='list-checked'>
                <li>Unlimited Storage</li>
                <li>Unlimited Members</li>
                <li>Two-Factor Authentication</li>
                <li>Collaborative Docs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
