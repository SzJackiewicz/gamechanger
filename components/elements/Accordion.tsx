import {File} from "@/lib/api/getTeamData";

interface AccordionProps {
  items: File[];
}

const Accordion = ({ items }: AccordionProps) => {

  return (
    <div
      className='accordion'
      id='accordionFaqs'
    >
      {items.map((item, index) => (
            <div key={index} className='accordion-item border-gray-800 wow animate__animated animate__fadeIn'>
              <h2 className='accordion-header'>
                <a href={item.file.url} download>
                  <button className='accordion-button collapsed'>
                    <span className='heading-4 color-white'>{item.name}</span>
                  </button>
                </a>
              </h2>
            </div>
        ))}
    </div>
  )
}

export default Accordion
