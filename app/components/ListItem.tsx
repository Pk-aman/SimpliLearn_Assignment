import React from 'react'

interface ListItemProps {
    text: string;
}

function ListItem({ text }: ListItemProps) {
    return (
        <div className='flex items-start gap-4'>
            <div className='w-[3px] h-full min-h-[60px] bg-[#F5AB40] shrink-0 self-stretch rounded-full'></div>
            <p className='text-[15px] md:text-[20px] font-[500] leading-relaxed'>{text}</p>
        </div>
    )
}

export default ListItem
