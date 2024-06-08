'use server'

import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import React from 'react'
import { ContactForm } from '@/components/elements/ContactForm'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import {getInitData} from "@/lib/api/getInitData";

export default function PageContact() {

  const { address, contact, isLoading, error } = getInitData();

  if (isLoading) return <div/>;
  if (error || !address || !contact) return <div/>;

  return (
    <>
      <Head>
        <title>Gamechanger Kontact</title>
      </Head>
      <Layout>
        <div className='row justify-content-center'>
          <div className='col-xxl-4 px-4 mb-100'>
            <div className='text-center'>
              <h3 className='color-linear d-inline-block mb-30 font-l-clamp'>{contact.title}</h3>
              <p className='font-sm-clamp color-gray-500'>
                {contact.description}
              </p>
            </div>
            <div className='text-center mt-30 contact-box '>
              <div className='d-inline-block support text-start'>
                (48) 654-430-309
                <br />
                (01) 6532-430-309
              </div>
              <div className='d-inline-block plane text-start'>kontakt@f-gc.pl</div>
              <div className='d-inline-block location text-start'>
                {address.street}
                <br />
                {address.city}, {address.zipcode}
              </div>
            </div>
          </div>
          <div className='form-contact col-xxl-4 px-4 '>
            <div className='text-center'>
              <h3 className='color-linear d-inline-block mb-10 font-l-clamp'>Napisz do nas</h3>
            </div>
            <ContactForm />
          </div>
          <PartnersLogs />
        </div>
      </Layout>
    </>
  )
}
