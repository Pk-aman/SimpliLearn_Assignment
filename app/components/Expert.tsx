import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ExpertProps {
    image: string | StaticImageData;
    name: string;
    description: string[];
    role?: string;
}

function Expert({ image, name, description, role }: ExpertProps) {
    return (
        <div className='flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start'>
            <div className='shrink-0'>
                <Image
                    src={image}
                    alt={name}
                    className='w-[192px] h-[183px] md:w-[340px] md:h-[325px] rounded-lg object-cover'
                />
            </div>
            <div className='flex flex-col gap-2 text-center md:text-left'>
                <h3 className='text-[22px] md:text-[30px] font-bold' style={{ color: "var(--color-hero-button)" }}>{name}</h3>
                {role && <p className='text-white text-lg font-semibold'>{role}</p>}
                <div className='text-white text-[15px] md:text-[24px] font-[500] leading-[25px] md:leading-[35px]'>
                    {description.map((desc, index) => (
                        <p key={index} className='mb-4'>{desc}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Expert
