import React from 'react'
import Expert from '../Expert'
import robLauber from '../../assets/images/rob-lauber.jpg'
import krishna from '../../assets/images/krishna.png'
import sudipto from '../../assets/images/sudipto.png'
import additionalExpertBg from '../../assets/images/additional-exprot-bg.png'

function FeaturedSpeakersSection() {
    return (
        <div className="py-12 md:py-20" style={{ backgroundColor: "var(--color-brand-blue-light)" }}>
            <div className="px-6 max-w-7xl mx-auto">
                <h2 className="text-[32px] md:text-[48px] font-[900] text-[#F5AB40] mb-12">Featured Speakers</h2>

                <div className="flex flex-col gap-12">
                    <Expert
                        image={robLauber}
                        name="Rob Lauber"
                        description={[
                            "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI."
                        ]}
                    />

                    <Expert
                        image={krishna}
                        name="Krishna Kumar"
                        description={[
                            "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today."
                        ]}
                    />

                    <Expert
                        image={sudipto}
                        name="Sudipto Mitra"
                        description={[
                            "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion."
                        ]}
                    />
                </div>

                {/* Additional Expert Perspectives */}
                <div
                    className="mt-16 w-full rounded-xl p-8 md:p-12 relative overflow-hidden"
                    style={{
                        backgroundImage: `url(${additionalExpertBg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="relative z-10">
                        <h3 className="text-[20px] md:text-[30px] font-[900] mb-4" style={{ color: "var(--color-hero-button)" }}>Additional Expert Perspectives</h3>
                        <p className="text-white text-[15px] md:text-[24px] max-w-3xl leading-relaxed">
                            Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedSpeakersSection
