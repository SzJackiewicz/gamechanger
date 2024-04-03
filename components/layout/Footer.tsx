import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='footer-1 border-gray-800'>
            <div className='row flex-row'>
              <div className='col-lg-2'>
                <div className='wow animate__animated animate__fadeInUp'>
                  <img
                    src='/assets/imgs/template/logo.png'
                    alt='Genz'
                  />
                </div>
                <p className='mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp'>
                  When an unknown prnoto sans took a galley and scrambled it to make.
                </p>
              </div>
              <div className='col-lg-3'>
                <h6 className='text-lg mb-30 color-white wow animate__animated animate__fadeInUp'>Categories</h6>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='menu-footer'>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          43 1123 2202 0000 0000 8978 6765
                        </Link>
                      </li>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          43 1123 2202 0000 0000 8978 6765
                        </Link>
                      </li>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          43 1123 2202 0000 0000 8978 6765
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <h6 className='text-lg mb-30 color-white wow animate__animated animate__fadeInUp'>Categories</h6>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='menu-footer'>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          NIP: 123-456-78-90
                        </Link>
                      </li>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          KRS: 123-456-78-90
                        </Link>
                      </li>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          43 1123 2202 0000 0000 8978 6765
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <h4 className='text-lg mb-30 color-white wow animate__animated animate__fadeInUp'>Adres</h4>
                <p className='text-sm color-gray-500 wow animate__animated animate__fadeInUp'>
                  Grunwaldzka 493
                  <br />
                  Gdańsk, 80-460
                  <br />
                  Polska
                </p>
                <div className='box-socials'>
                  <div
                    className='d-inline-block mr-30 wow animate__animated animate__fadeIn'
                    data-wow-delay='.0s'
                  >
                    <Link
                      className='icon-socials icon-twitter color-gray-500'
                      href='https://twitter.com'
                    />
                  </div>
                  <div
                    className='d-inline-block mr-20 wow animate__animated animate__fadeIn'
                    data-wow-delay='.2s'
                  >
                    <Link
                      className='icon-socials icon-linked color-gray-500'
                      href='https://www.linkedin.com'
                    />
                  </div>
                  <div
                    className='d-inline-block wow animate__animated animate__fadeIn'
                    data-wow-delay='.4s'
                  >
                    <Link
                      className='icon-socials icon-insta color-gray-500'
                      href='https://www.instagram.com'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
