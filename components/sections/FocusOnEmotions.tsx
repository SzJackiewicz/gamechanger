'use server'

import { Supporters } from '../slider/Supporters'
import {getInitHomePageData} from "@/lib/api/homePage"

export const FocusOnEmotions = () => {
  const { allFocusonemotionitems, isLoading, error } = getInitHomePageData();

  if (isLoading) return <div />;
  if (error) return <div />;

  return (
    <>
      {allFocusonemotionitems && allFocusonemotionitems.length > 0 && (
      <div className='list-logos mb-30'>
        <div className='container'>
          <div className='row'>
            <div className='swiper-container swiper-group-1'>
              {allFocusonemotionitems && <Supporters title='#FocusOnEmotions' focusOnEmotions={allFocusonemotionitems}/>}
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}
