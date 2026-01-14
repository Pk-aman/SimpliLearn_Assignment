import React from 'react'
import AgendaCard from '../AgendaCard'

function EventAgendaSection() {
    return (
        <div className="py-12 md:py-20" style={{ backgroundColor: "var(--color-hero-button)" }}>
            <div className="px-6 max-w-7xl mx-auto">
                <h2
                    className="text-[32px] md:text-[48px] font-[900] mb-8 md:mb-12"
                    style={{ color: "var(--color-brand-blue-light)" }}
                >
                    Event Agenda
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AgendaCard
                        title="Welcome & Opening"
                        speaker="Sudipto Mitra"
                        speakerRole="CRO Simplilearn"
                        description="Why capability-building is now a board-level issue and what's changing in the workforce landscape."
                    />
                    <AgendaCard
                        title="Keynote: What Enterprise Leaders Are Seeing on the Ground"
                        speaker="Rob Lauber"
                        speakerRole="Former CLO McDonald's"
                        description="A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
                    />
                    <AgendaCard
                        title="Lunch & Executive Conversation"
                        speaker="Industry Experts Invited"
                        description="What large enterprise talent ecosystems are learning about capability-building at scale."
                    />
                </div>
            </div>
        </div>
    )
}

export default EventAgendaSection
