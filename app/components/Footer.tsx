import React from 'react'
import Image from 'next/image'
import SLInput from './elements/SLInput'
import SLButton from './elements/SLButton'
import footerBg from '../assets/images/footer-background.png'
import Logo from '../../public/logo.svg' // Using the same import pattern as LandingImage
import mail from '../assets/icons/mail.svg'

function Footer() {
    return (
        <div className="relative w-full py-12 md:py-20 min-h-[400px] flex flex-col justify-center">
            {/* Background Image */}
            <Image
                src={footerBg}
                alt="Footer Background"
                fill
                className="object-cover object-center"
                priority={false}
            />
            {/* Overlay for better text readability if needed - skipping based on design, but adding slight gradient could help if text is hard to read. Design shows clear image. */}

            <div className="relative z-10 px-6 max-w-7xl mx-auto w-full h-full flex flex-col gap-8 md:gap-12">

                {/* Top Content */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-white text-[19px] md:text-[30px] font-[900]">
                        Space is limited.
                    </h2>

                    <div className='flex items-center justify-start gap-4 md:gap-6 flex-wrap'>
                        <SLInput
                            placeholder="Enter your work email to confirm your attendance"
                            type="email"
                            icon={mail}
                            isRequired={true}
                        />
                        <SLButton
                            text="RSVP Now"
                            className="text-xl md:text-3xl h-[45px] md:h-[81px] w-[139px] md:w-[251px] font-bold"
                            type="button"
                            style={{ backgroundColor: "var(--color-primary-orange)" }}
                        />
                    </div>
                </div>

                {/* Bottom Content - Logo and Copyright */}
                <div className="pt-8 md:pt-16 mt-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 ">
                    <div className="w-[180px] md:w-[250px]">
                        <Image src={Logo} alt="Simplilearn Logo" className="w-full h-auto" />
                    </div>

                    <p className="text-white text-[12px] md:text-[20px]">
                        © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer
