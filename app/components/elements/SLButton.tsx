import React from 'react'


interface SLButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
    disabled?: boolean;
}

function SLButton({ text, onClick, className, type = "button", style, disabled }: SLButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`font-semibold px-4 py-1.5 rounded ${className}`}
            style={{ ...style, cursor: disabled ? 'not-allowed' : 'pointer' }}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default SLButton