import React from 'react'
import ExploreCard from '../ExploreCard'
import skillsDecay from '../../assets/icons/skills-decay.svg'
import managerRoleShift from '../../assets/icons/manager-role-shift.svg'
import leaders from '../../assets/icons/leaders.svg'
import frontline from '../../assets/icons/frontline.svg'
import coreHuman from '../../assets/icons/core-human.svg'
import winning from '../../assets/icons/winning.svg'

function ExploreSection() {
    return (
        <div className="md:py-12 py-8" style={{ backgroundColor: "var(--color-explore-bg)" }}>
            <div className="px-6 max-w-7xl mx-auto ">
                <h2 className="text-[24px] md:text-[40px] font-[900] md:py-6 py-3" style={{ color: "var(--color-primary-orange)" }}>What We'll Explore</h2>
                <div className="text-[15px] md:text-[27px] font-[500]">
                    <p>The critical shifts every enterprise must plan for:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <ExploreCard
                        image={skillsDecay}
                        title="Skills Decay"
                        descriptions={["every 2-3 years", "faster for technical skills"]}
                    />
                    <ExploreCard
                        image={managerRoleShift}
                        title="Manager Role Shift"
                        descriptions={["orchestrating", "people + AI agents"]}
                    />
                    <ExploreCard
                        image={leaders}
                        title="Leaders + AI Co-Pilots"
                        descriptions={["requires sensemaking", "and systems thinking"]}
                    />
                    <ExploreCard
                        image={frontline}
                        title="Frontline Capability"
                        descriptions={["now depends", "on digital fluency"]}
                    />
                    <ExploreCard
                        image={coreHuman}
                        title="Core Human Capabilities"
                        descriptions={["analytical reasoning", "and scenario planning"]}
                    />
                    <ExploreCard
                        image={winning}
                        title="Winning Organizations"
                        descriptions={["predict skills", "ahead of demand"]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ExploreSection
