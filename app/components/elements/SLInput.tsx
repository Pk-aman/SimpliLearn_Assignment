import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface SLInputProps {
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    className?: string;
    style?: React.CSSProperties;
    icon?: string;
    isRequired?: boolean;
    name?: string;
    id?: string;
}

function SLInput({
    value,
    onChange,
    placeholder,
    type = "text",
    className = "",
    style,
    icon,
    isRequired = false,
    name,
    id
}: SLInputProps) {
    return (
        <div className={`relative w-[389px] md:w-[606px] h-[45px] md:h-[81px] ${className}`}>
            {icon && (
                <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Image
                        src={icon}
                        alt=""
                        className="w-4 h-4 md:w-6 md:h-6"
                    />
                </div>
            )}
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={isRequired}
                style={style}
                className={`w-full h-full bg-[#E5E5E5] text-gray-600 placeholder-gray-600 rounded-sm ${icon ? 'pl-10 md:pl-16' : 'pl-4 md:pl-6'} pr-4 md:pr-6 outline-none focus:ring-2 focus:ring-gray-300 transition-all text-[13px] md:text-xl`}
            />
        </div>
    );
}

export default SLInput;
