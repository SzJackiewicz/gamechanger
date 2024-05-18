'use server'

import { Avatar } from "../elements/Avatar"

type Props = {
  title?: string
  members: {
    name: string
    role?: string
    img: string
  }[]
}

export const BoardMembers = ({ title, members }: Props) => {
  return (
    <>
      <div className='text-center mt-70 mb-20'>
        <h3 className='color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp'>{title}</h3>
      </div>
      <div className='box-features bg-gray-850'>
        <div className='flex flex-row flex-wrap align-items-center justify-content-center '>
          {members?.map((member, index) => (
            <div
              className='borad-member wow animate__animated animate__fadeIn'
              data-wow-delay='0s'
              key={index}
            >
             <Avatar src={member.img} alt={member.role}/>
              <h5 className='color-white mb-15'>{member.name}</h5>
              <p className='text-base color-gray-500'>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
