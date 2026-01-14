import React from 'react'
import SLInput from './elements/SLInput'
import mail from '../assets/icons/mail.svg'
import SLButton from './elements/SLButton'

function SendEmail() {
    return (
        <div className='py-8 md:py-15'>
            <div className=' flex items-center justify-start gap-4 md:gap-6 flex-wrap'>
                    <SLInput
                        placeholder="Enter your work email to confirm your attendance"
                        type="email"
                        icon={mail}
                        isRequired={true}
                    />
                <SLButton
                    text="RSVP Now"
                    className="text-3xl h-[45px] md:h-[81px] w-[139px] md:w-[251px] "
                    type="button"
                    style={{ backgroundColor: "var(--color-primary-orange)" }}
                />

            </div>
        </div>
    )
}

export default SendEmail