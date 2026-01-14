import React from 'react'
import Image from 'next/image'
import ListItem from '../ListItem'
import SendEmail from '../SendEmail'
import chessPieces from '../../assets/images/chess-pieces.png'

function InsightsSection() {
    return (
        <div className="py-12 md:py-20 bg-white overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center w-full">

                {/* Content Section - Shows on Bottom for Mobile (order-2), Left for Desktop (order-1) */}
                <div className="w-full md:w-2/3 flex justify-center md:justify-end order-2 md:order-1">
                    {/* Inner container to match the max-w-7xl alignment (half of 7xl is roughly 640px + padding) */}
                    <div className="w-full max-w-[720px] px-6 flex flex-col gap-8">
                        <h2 className="text-[24px] md:text-[40px] font-[900] leading-tight" style={{ color: "var(--color-primary-orange)" }}>
                            Go behind the curtain with real examples and high-scale insights
                        </h2>

                        <p className="text-[17px] md:text-[25px] font-[500]">You'll walk away with:</p>

                        <div className="flex flex-col gap-6">
                            <ListItem text="A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months." />
                            <ListItem text="Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure." />
                            <ListItem text="Signals for where capability gaps may already be forming in your organization." />
                            <ListItem text="Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale." />
                            <ListItem text="Actionable insights you can take straight into your next exec meeting." />
                        </div>
                    </div>
                </div>

                {/* Image Section - Shows on Top for Mobile (order-1), Right for Desktop (order-2) */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                    <div className="relative w-full h-[300px] md:h-[600px]">
                        <Image
                            src={chessPieces}
                            alt="Chess Pieces"
                            fill
                            className="object-contain md:object-contain object-center md:object-right"
                        />
                    </div>
                </div>

            </div>
            <div className="mt-4 px-6 max-w-7xl mx-auto">
                <SendEmail />
            </div>
        </div>
    )
}

export default InsightsSection
