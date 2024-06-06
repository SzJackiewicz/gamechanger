'use server'

import React from 'react'

type BuyButtonProps = {
  children?: React.ReactNode
  small?: boolean
}

export const StripeButtonWrapper = ({ small, children }: BuyButtonProps) => {
  return <div className={`${small} ? styledContainerSmall : styledContainerLarge`}>{children}</div>
}
