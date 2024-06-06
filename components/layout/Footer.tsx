'use server'

import Link from 'next/link'
import React from 'react'
import 'primeicons/primeicons.css'
import {Layout} from "@/types/types";

type FooterProps = Layout

const Footer = ({ footerLogo, footerLogoAlt, footerSubtitle, iban, swift }: FooterProps) => {

  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='footer-1 border-gray-800'>
            <div className='row flex-row'>
              <div className='col-lg-2'>
                <div className=''>
                  <img
                    src={footerLogo?.url || '/assets/imgs/template/logo.png'}
                    alt={footerLogoAlt}
                  />
                </div>
                <p className='mb-20 mt-20 text-sm color-gray-500 '>
                  {footerSubtitle}
                </p>
              </div>
              <div className='col-lg-3'>
                <h6 className='text-lg mb-30 color-white '>Dane</h6>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='menu-footer'>
                      <li className=''>
                        <p className='color-gray-500'>IBAN: {iban}</p>
                      </li>
                      <li className=''>
                        <p className='color-gray-500'>SWIFT: {swift}</p>
                      </li>
                      <li className=''>
                        <p className='color-gray-500'>Santander Bank Polska S.A.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <h6 className='text-lg mb-30 color-white '>Rejestry</h6>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='menu-footer'>
                      <li className=''>
                        <p className='color-gray-500'>NIP: 5842849980</p>
                      </li>
                      <li className=''>
                        <p className='color-gray-500'>KRS: 0001095846</p>
                      </li>
                      <li className=''>
                        <p className='color-gray-500'>REGON: 528175660</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <h4 className='text-lg mb-30 color-white '>Adres</h4>
                <p className='text-sm color-gray-500 '>
                  GAME CHANGER FOUNDATION
                  <br />
                  Aleja Grunwaldzka 413
                  <br />
                  80-309 Gdańsk
                  <br />
                  kontakt@f-gc.pl
                  <br />
                  tel: 690-301-110
                </p>
                <div className='box-socials'>
                  <div
                    className='d-inline-block mr-30 wow animate__animated animate__fadeIn'
                    data-wow-delay='.0s'
                  >
                    <Link
                      className='color-gray-500 socialIcon'
                      href='https://www.facebook.com/FundacjaGC'
                    >
                      <i
                        className='pi pi-facebook'
                        style={{ fontSize: '1.5rem' }}
                      />
                    </Link>
                  </div>
                  <div
                    className='d-inline-block mr-20 wow animate__animated animate__fadeIn'
                    data-wow-delay='.2s'
                  >
                    <Link
                      className='color-gray-500 socialIcon'
                      href='https://www.linkedin.com/company/fundacja-game-changer'
                    >
                      <i
                        className='pi pi-instagram'
                        style={{ fontSize: '1.5rem' }}
                      />
                    </Link>
                  </div>
                  <div
                    className='d-inline-block wow animate__animated animate__fadeIn'
                    data-wow-delay='.4s'
                  >
                    <Link
                      className='color-gray-500 socialIcon'
                      href='https://www.instagram.com/fundacjagc'
                    >
                      <i
                        className='pi pi-linkedin'
                        style={{ fontSize: '1.5rem' }}
                      />
                    </Link>
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
