import React from "react"

interface PillButtonProps {
    children: React.ReactNode
    icon?: React.ReactNode
    color?: "default" | "red" | "olive" | "yellow"
    className?: string
    onClick?: () => void
}

const colorClasses = {
    default: "text-gray-300 border-gray-500",
    red: "text-[#B85C38] border-[#B85C38]",
    olive: "text-[#8BA360] border-[#8BA360]",
    yellow: "text-[#D4B055] border-[#D4B055]",
}

export function PillButton({
    children,
    icon,
    color = "default",
    className = "",
    onClick
}: PillButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
        inline-flex items-center gap-2
        px-5 py-2
        border-[1.5px] rounded-full
        text-xs font-medium tracking-[0.15em] uppercase
        transition-all duration-200
        hover:bg-white/10
        ${colorClasses[color]}
        ${className}
      `}
        >
            {icon && <span className="w-4 h-4">{icon}</span>}
            {children}
        </button>
    )
}

export default PillButton
