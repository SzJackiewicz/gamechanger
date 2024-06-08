'use server'

import Link from 'next/link'
import React from 'react'
import 'primeicons/primeicons.css'
import {getInitData} from "@/lib/api/getInitData";

const Footer = () => {

  const { layout, address, contact, register, isLoading, error } = getInitData();

  if (isLoading) return <div/>;
  if (error || !address || !contact || !layout || !register) return <div/>;

  return (
    <>
      <footer className='footer mb-30'>
        <div className='container'>
          <div className='footer-1 border-gray-800'>
            <div className='row flex-row'>
              <div className='col-lg-2'>
                <div className=''>
                  <img
                    src={layout.footerLogo.url || '/assets/imgs/template/logo.png'}
                    alt={layout.footerLogoAlt}
                  />
                </div>
                <p className='mb-20 mt-20 text-sm color-gray-500 '>{layout.footerSubtitle}</p>
              </div>
              <div className='col-lg-3'>
                <h6 className='text-lg mb-30 color-white '>Dane</h6>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='menu-footer'>
                      <li className=''>
                        <p className='color-gray-500'>IBAN: {layout.iban}</p>
                      </li>
                      <li className=''>
                        <p className='color-gray-500'>SWIFT: {layout.swift}</p>
                      </li>
                      <li className=''>
                        <p className='color-gray-500'>Santander Bank Polska S.A.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-2'>
                <h6 className='text-lg mb-30 color-white '>Rejestry</h6>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='menu-footer'>
                      <li className=''>
                        <p className='color-gray-500'>NIP: {register.nip}</p>
                      </li>
                      <li className=''>
                        <p className='color-gray-500'>KRS: {register.krs}</p>
                      </li>
                      <li className=''>
                        <p className='color-gray-500'>REGON: {register.regon}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <h4 className='text-lg mb-30 color-white '>Adres</h4>
                <p className='text-sm color-gray-500 '>
                  {address.name}
                  <br />
                  {address.street}
                  <br />
                  {address.zipcode} {address.city}
                  <br />
                  {contact.email}
                  <br />
                  tel: {contact.tel}
                </p>
                <div className='box-socials'>
                  {layout.socialMediaLinks.map((link, index) => (
                      <div
                          key={link.name}
                          className={`d-inline-block mr-${index * 10} wow animate__animated animate__fadeIn`}
                          data-wow-delay={`${index * 0.2}s`}
                      >
                        <Link className='color-gray-500 socialIcon' href={link.url}>
                          <i className={`pi pi-${link.types}`} style={{ fontSize: '1.5rem' }} />
                        </Link>
                      </div>
                  ))}
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
