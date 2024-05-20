import Image from 'next/image'
import React from 'react'
import SwiperCore, {Autoplay, Navigation} from 'swiper'

SwiperCore.use([Autoplay, Navigation])

type BrandProps = {
    placeholder: string,
    photo: {
        url: string
    }
}[]

const Brand = ({ data }: { data: BrandProps }) => {
    return (
        <>
            {data && data.length > 0 && (
                <div className='swiper-wrapper pt-5 flex-wrap justify-content-around gap-5'>
                    {data?.map((item, i) => (
                        <div
                            className='flex partner mb-10'
                            key={i}
                        >
                            <Image
                                src={item.photo.url}
                                alt={item.placeholder}
                                width={0}
                                height={0}
                                sizes='100%'
                                style={{width: '100%', height: 'auto', zIndex: '1'}} // optional
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Brand
