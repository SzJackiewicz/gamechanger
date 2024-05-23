import React, { useState } from 'react'
import styled from 'styled-components'

interface PaymentMethod {
  id: number
  stripeLink: string
  supportAmount: string
}

interface SectionData {
  sectionTitle: string
  sectionSubtitle: string
  paymentMethods: PaymentMethod[]
}

const sectionData: SectionData = {
  sectionTitle: 'Darowizna na cele statutowe',
  sectionSubtitle: 'Tu miejsce na tekst zachęcający do wsparcia. Warto napisać jakie korzyści niesie za sobą taka forma wsparcia.',
  paymentMethods: [
    {
      id: 1,
      stripeLink: '/donate',
      supportAmount: '25,00',
    },
    {
      id: 2,
      stripeLink: '/donate',
      supportAmount: '50,00',
    },
    {
      id: 3,
      stripeLink: '/donate',
      supportAmount: '100,00',
    },
    {
      id: 4,
      stripeLink: '/donate',
      supportAmount: 'dowolna',
    },
  ],
}

export const SupportUsSection: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null)

  const handleButtonClick = (id: number) => {
    setActiveButton((prevId) => (prevId === id ? null : id))
  }

  return (
    <StyledSectionWrapper>
      <h3 className='font-xl-clamp color-gray-400 mb-10 main-color-text'>{sectionData.sectionTitle}</h3>
      <p className='font-md-clamp color-gray-400 mb-20'>{sectionData.sectionSubtitle}</p>
      <p className='font-sm-clamp color-gray-400 mb-10 mt-10'>Wybierz kwotę wsparcia:</p>
      <StyledButtonsWrapper>
        {sectionData.paymentMethods.map((method) => (
          <StyledButton
            key={method.id}
            active={activeButton === method.id}
            disabled={activeButton !== null && activeButton !== method.id}
            onClick={() => handleButtonClick(method.id)}
          >
            {method.supportAmount}
          </StyledButton>
        ))}
      </StyledButtonsWrapper>
      <p className='font-sm-clamp color-gray-400 mb-20'>Wybierz sposób wsparcia:</p>
      <StyledRadioWrapper>
        <StyledSupportMethodsWrapper>
          <StyledInput
            type='radio'
            id='supportMethodRecurring'
            name='supportMethod'
            value='recurring'
          />
          <label
            className='font-sm-clamp main-color-text'
            htmlFor='supportMethodRecurring'
          >
            cykliczne
          </label>
        </StyledSupportMethodsWrapper>
        <StyledSupportMethodsWrapper>
          <StyledInput
            type='radio'
            id='supportMethodOneTime'
            name='supportMethod'
            value='one-time'
          />
          <label
            className='font-sm-clamp main-color-text'
            htmlFor='supportMethodOneTime'
          >
            jednorazowe
          </label>
        </StyledSupportMethodsWrapper>
      </StyledRadioWrapper>
    </StyledSectionWrapper>
  )
}

interface StyledButtonProps {
  active: boolean
}

const StyledRadioWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  width: 16px;
`

const StyledSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 722px;
  min-width: 350px;
  margin: 0 auto;
`

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 12px;
  margin: 20px 0;
`

const StyledSupportMethodsWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-content: center;
`

const StyledButton = styled.button<StyledButtonProps>`
  width: 156px;
  height: 50px;
  padding: 6px 0;
  background-color: ${(props) => (props.active ? '#34cc99' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : '#34cc99')};
  gap: 10px;
  border: 2px solid #34cc99;
  border-radius: 50px;
  font-size: 24px;
  text-align: center;

  &:disabled {
    opacity: 0.2;
  }
`

export default SupportUsSection
