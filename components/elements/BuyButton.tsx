import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

type BuyButtonProps = {
  slug?: string
  buttonTitle?: string
  title?: string
  price?: string
  cycle?: boolean
}

export const BuyButton = ({ slug, buttonTitle, price, title, cycle }: BuyButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (slug) {
      router.push(slug)
    }
  }

  return (
    <StyledContainer>
      <StyledLogoContainer>
        <Image
          src='/assets/imgs/logos/gclogosygnet.png'
          width={130}
          height={130}
          alt='logo'
          priority
        />
      </StyledLogoContainer>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        {price && (
          <StyledPriceContainer>
            <StyledPrice>{price} zł</StyledPrice>
            {cycle && (
              <StyledCycle>
                <span>na</span>
                <span>miesiąc</span>
              </StyledCycle>
            )}
          </StyledPriceContainer>
        )}
      </StyledTitleContainer>
      <StyledButton onClick={handleClick}>{buttonTitle}</StyledButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  height: 331px;
  padding: 10px 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 30px auto;
`

const StyledLogoContainer = styled.div`
  width: 130px;
  height: 130px;
`
const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 190px;
  height: 90px;
  text-align: center;
  justify-content: center;
`

const StyledCycle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 4px;
  color: whitesmoke;
  font-family:
    Montserrat,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Helvetica Neue,
    Ubuntu,
    sans-serif;
`

const StyledPriceContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const StyledTitle = styled.h4`
  width: 100%;
  overflow: hidden;
  font-size: 16px;
  color: whitesmoke;
  font-weight: 500;
  font-family:
    Montserrat,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Helvetica Neue,
    Ubuntu,
    sans-serif;
  letter-spacing: 0.6pt;
`
const StyledPrice = styled.h3`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  font-size: 28px;
  font-weight: 600;
  color: whitesmoke;
  font-family:
    Montserrat,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Helvetica Neue,
    Ubuntu,
    sans-serif;
`

const StyledButton = styled.button`
  width: 264px;
  height: 44px;
  border-radius: 8px;
  border: none;
  color: whitesmoke;
  background-color: #248d74;
  font-size: 16px;
  letter-spacing: 0.6pt;
  font-weight: 600;
  font-family:
    Montserrat,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Helvetica Neue,
    Ubuntu,
    sans-serif;
  &:hover {
    background-color: #33cc99;
  }
`
