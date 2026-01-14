import React from 'react'
import SendEmail from '../SendEmail'

function IntroductionSection() {
    return (
        <div className="px-6 max-w-7xl mx-auto ">
            <SendEmail />
            {/* Text Content */}
            <div className="text-[15px] md:text-[27px] font-[500] mb-8">
                <p>AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents.</p>
                <br />
                <p>But even the most advanced enterprises are asking the same question:</p>

                <div className="text-[25px] md:text-[40px] font-[900] text-center md:py-8 py-5">
                    <p>Which capabilities will matter most,<br className="hidden md:block" /> and how do we build them at scale?</p>
                </div>

                <p>This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what's coming next.</p>
            </div>
            <br />
        </div>
    )
}

export default IntroductionSection
