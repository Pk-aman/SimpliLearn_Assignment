import Image from 'next/image'
import landingImage from "../assets/images/landing-image.png"
import Logo from "../../public/logo.svg"
import SLButton from './elements/SLButton'
import calender from "../assets/icons/calender.svg"
import mapPin from "../assets/icons/mapPin.svg"

function LandingImage() {
    return (
        <div className="relative w-full h-[693px]">
            <Image
                src={landingImage}
                alt="Landing Image"
                className="w-full h-full object-cover object-center"
                priority
            />

            {/* Content Container (Sits on top) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="w-full max-w-7xl px-6 h-full relative flex flex-col justify-center">
                    {/* Logo */}
                    <div className="absolute top-6 left-6 md:top-12 md:left-6 w-[200px] md:w-[280px]">
                        <Image src={Logo} alt="Simplilearn Logo" />
                    </div>

                    <div className="max-w-4xl mt-18 md:mt-28">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-4 md:mb-6">
                            <SLButton
                                text="Invite-Only"
                                className="text-black text-lg md:text-2xl font-bold font-[700] px-4 py-1.5 rounded-sm "
                                style={{ backgroundColor: "var(--color-hero-button)" }}
                            />
                            <span className="font-bold font-[700] text-xl md:text-2xl" style={{ color: "var(--color-hero-button)" }}>
                                An Executive <br className="block md:hidden" /> Roundtable • Lunch
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold font-[700] leading-tight mb-2" style={{ color: "var(--color-primary-orange)" }}>
                            The Skills That Matter Next:
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-[300] leading-tight mb-10 md:mb-12" style={{ color: "var(--color-primary-orange)" }}>
                            Preparing Your Workforce <br className="hidden md:block" /> & Leaders for the AI Era
                        </h1>

                        <div className="flex flex-col gap-2 md:gap-4 text-white">
                            <div className="flex items-center gap-2 md:gap-5">
                                <Image src={calender} className="w-4 h-4 md:w-8 md:h-8" alt={''} />
                                <span className="text-[15px] md:text-[27px] font-bold font-[900]">February 20, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-5">
                                <Image src={mapPin} className="w-4 h-4 md:w-8 md:h-8" alt={''} />
                                <span className="text-[15px] md:text-[27px] font-bold font-[900]">Chamberlain’s Steak & Fish House, Dallas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingImage