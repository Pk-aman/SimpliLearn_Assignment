'use client'
import React, { useState } from 'react'
import SLInput from './elements/SLInput'
import mail from '../assets/icons/mail.svg'
import SLButton from './elements/SLButton'
import { submitRSVP } from '@/app/actions/rsvp'

function SendEmail() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleOnSubmit = async () => {
        setLoading(true)
        try {
            const result = await submitRSVP(email)

            if (!result.success) {
                // Handle error
                alert(result.message)
                console.log(result.error)
                return
            }

            // Handle success
            alert(result.message)
            setEmail('') 
        } catch (error) {
            console.error('Unexpected error:', error)
            alert('An unexpected error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='py-8 md:py-15'>
            <div className=' flex items-center justify-start gap-4 md:gap-6 flex-wrap'>
                <SLInput
                    placeholder="Enter your work email to confirm your attendance"
                    type="email"
                    icon={mail}
                    isRequired={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <SLButton
                    text={loading ? "Loading..." : "RSVP Now"}
                    className="text-[15px] md:text-[29px] h-[45px] md:h-[81px] w-[139px] md:w-[251px] text-white"
                    type="button"
                    style={{ backgroundColor: "var(--color-primary-orange)" }}
                    onClick={handleOnSubmit}
                    disabled={loading}
                />

            </div>
        </div>
    )
}

export default SendEmail