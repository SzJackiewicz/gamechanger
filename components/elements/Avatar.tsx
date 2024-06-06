'use server'

import Image from 'next/image'

type Props = {
  src: string
  alt?: string
}

export const Avatar = ({ src, alt }: Props) => {
  return (
    <div className='avatarWrapper'>
      <Image
        width={100}
        height={100}
        src={src}
        alt={alt || 'Avatar'}
      />
    </div>
  )
}
