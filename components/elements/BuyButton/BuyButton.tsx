import React from 'react'
import { useRouter } from 'next/router'

type BuyButtonProps = {
  slug: string
  buttonTitle?: string
  small: boolean
}

export const BuyButton = ({ slug, buttonTitle, small = false }: BuyButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (slug) {
      router.push(slug)
    }
  }

  return (
    <button
      className={`${small} ? styledBuyButtonSmall ? styledBuyButtonLarge`}
      onClick={handleClick}
    >
      {buttonTitle}
    </button>
  )
}
