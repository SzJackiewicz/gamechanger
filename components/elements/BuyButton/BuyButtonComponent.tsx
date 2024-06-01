'use server'

import Image from 'next/image'
import { BuyButton } from './BuyButton'

type BuyButtonProps = {
  slug: string
  buttonTitle?: string
  title?: string
  price?: string
  cycle?: boolean
  small: boolean
}

export const BuyButtonComponent = ({ slug, buttonTitle, price, title, cycle, small = false }: BuyButtonProps) => {
  return (
    <div className={`${small} ? styledContainerSmall : styledContainerLarge`}>
      <div className='styledLogoContainer'>
        <Image
          src='/assets/imgs/logos/gclogosygnet.png'
          width={small ? 100 : 130}
          height={small ? 100 : 130}
          alt='logo'
          priority
        />
      </div>
      <div className='styledTitleContainer color-gray-100'>
        <div className='styledTitle color-gray-100'>{title}</div>
        {price && (
          <div className='styledPriceContainer'>
            <h3 className='styledPrice color-gray-100'>{price}</h3>
            {cycle && (
              <div className='styledCycle'>
                <span>na</span>
                <span>miesiąc</span>
              </div>
            )}
          </div>
        )}
      </div>
      <BuyButton
        small={small}
        buttonTitle={buttonTitle}
        slug={slug}
      />
    </div>
  )
}
