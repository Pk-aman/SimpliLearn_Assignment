import React from 'react'

interface AgendaCardProps {
    title: string;
    speaker: string;
    speakerRole?: string;
    description: string;
}

function AgendaCard({ title, speaker, speakerRole, description }: AgendaCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col justify-start items-start gap-4 md:gap-6 h-full ">
            <h3
                className="text-[20px] md:text-[24px] font-[900] leading-snug"
                style={{ color: "var(--color-brand-blue-light)" }}
            >
                {title}
            </h3>

            <div className="mt-auto">
                <p className="font-bold text-[16px] md:text-[18px] text-black mb-1">
                    {speaker}{speakerRole && <span className="font-normal text-gray-700">, {speakerRole}</span>}
                </p>
            </div>

            <p className="text-[14px] md:text-[16px] text-black leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default AgendaCard
