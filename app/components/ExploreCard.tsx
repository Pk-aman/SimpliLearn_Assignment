import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ExploreCardProps {
    image: string | StaticImageData;
    title: string;
    descriptions: string[];
}

function ExploreCard({ image, title, descriptions }: ExploreCardProps) {
    return (
        <div className="w-full bg-white rounded-xl shadow-2xl p-5 md:px-7 md:py-8 flex flex-col gap-4 md:gap-7">
            <div className='flex gap-5 items-center'>
                <Image src={image} alt={title} className='h-[30px] w-[30px] md:h-[36px] md:w-[36px]' />
                <h2 className='font-[700] text-[20px] md:text-[24px]'>{title}</h2>
            </div>
            <div className="">
                {descriptions.map((description, index) => (
                    <p key={index} className='font-[500] text-[16px] md:text-[22px]'>{description}</p>
                ))}
            </div>
        </div>
    )
}

export default ExploreCard