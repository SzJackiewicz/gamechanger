'use server'

import Brand from '@/components/slider/Brand'
import {getInitHomePageData} from "@/lib/api/homePage";

export const PartnersLogs = () => {
    const { allPartnerIds, isLoading, error } = getInitHomePageData();

    if (isLoading) return <div />;
    if (error) return <div />;

    return (
    <>
      <div className='row align-items-end mt-30'>
        <div className='text-center'>
          <h3 className='color-linear d-inline-block wow animate__animated animate__fadeInUp'>Patroni</h3>
        </div>
        <div
          className='col-lg-3 text-lg-end mt-15 hover-up wow animate__animated animate__fadeIn'
          data-wow-delay='0.2s'
        />
      </div>
      <div className='list-logos mt-20 mb-30'>
        <div className='container'>
          <div className='row'>
            <div
              className='swiper-container swiper-group-1'
              data-wow-delay='.2s'
            >
                {allPartnerIds && <Brand data={allPartnerIds}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
