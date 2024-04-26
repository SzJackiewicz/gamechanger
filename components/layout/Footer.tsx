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
                  Naszą misją jest promowanie zdrowia psychicznego poprzez sport i w obszarze sportu.
                </p>
              </div>
              <div className='col-lg-3'>
                <h6 className='text-lg mb-30 color-white wow animate__animated animate__fadeInUp'>Dane</h6>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='menu-footer'>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          IBAN: PL45 1090 1098 0000 0001 5773 9195
                        </Link>
                      </li>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          SWIFT: WBKPPLPP
                        </Link>
                      </li>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          Santander Bank Polska S.A.
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <h6 className='text-lg mb-30 color-white wow animate__animated animate__fadeInUp'>Rejestry</h6>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='menu-footer'>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          NIP: 5842849980
                        </Link>
                      </li>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          KRS: 0001095846
                        </Link>
                      </li>
                      <li className='wow animate__animated animate__fadeInUp'>
                        <Link
                          className='color-gray-500'
                          href='/blog-archive'
                        >
                          REGON: 528175660
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <h4 className='text-lg mb-30 color-white wow animate__animated animate__fadeInUp'>Adres</h4>
                <p className='text-sm color-gray-500 wow animate__animated animate__fadeInUp'>
                  GAME CHANGER FOUNDATION
                  <br />
                  Aleja Grunwaldzka 413
                  <br />
                  80-309 Gdańsk
                  <br />
                  biuro@f-gc.pl
                  <br />
                  tel: 690-301-110
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
