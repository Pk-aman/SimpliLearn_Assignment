import React from 'react'


interface SLButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
}

function SLButton({ text, onClick, className, type = "button", style }: SLButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-white font-semibold px-4 py-1.5 rounded ${className}`}
            style={style}
        >
            {text}
        </button>
    )
}

export default SLButton