type Props = {
  optionValue: string
  isActive: boolean
  onOptionClick: () => void
}

export const SupportOption = ({ optionValue, isActive, onOptionClick }: Props) => {
  return (
    <div
      className='col-lg-3 wow animate__animated animate__fadeIn margin-auto'
      data-wow-delay='.2s'
    >
      <div
        onClick={onOptionClick}
        className={
          isActive
            ? 'card-pricing card-pricing-clicked border-gray-800 bg-gray-850 mb-20 center-flex'
            : 'card-pricing border-gray-800 bg-gray-850 mb-20 center-flex'
        }
      >
        <h5 className='main-color-text'>{optionValue}</h5>
      </div>
    </div>
  )
}
