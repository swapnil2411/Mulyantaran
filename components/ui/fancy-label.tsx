"use client"

import { ReactNode } from "react"

interface LabelProps {
  text: string
  icon?: ReactNode
  imageSrc?: string
  className?: string
}

// Default sparkle icon that matches the image
const SparkleIcon = () => (
  <div className="flex items-center gap-1">
    <div className="w-3 h-3 bg-[#E8D5A3] transform rotate-45 relative">
      <div className="absolute inset-0 bg-[#E8D5A3] rounded-sm transform rotate-45"></div>
    </div>
    <div className="w-2 h-2 bg-[#E8D5A3] transform rotate-45 relative -ml-1 mt-1">
      <div className="absolute inset-0 bg-[#E8D5A3] rounded-sm transform rotate-45"></div>
    </div>
  </div>
)

export function FancyLabel({ text, icon, imageSrc, className = "" }: LabelProps) {
  return (
    <div className="  flex items-center justify-center">
      <div
        className={`relative inline-flex items-center gap-3 px-8 py-4 border-0  rounded-full overflow-hidden  bg-linear-to-r/srgb from-[#4C3F29] from-60% via- to-[#EDD3A0] to-99% ${className}`}
        style={{
        // backgroundImage: "linear-gradient(to right, #4C3F29  82%, #4C3F29 33%,  #EDD3A0 10%)",
       
          boxShadow: `
            0 4px 20px rgba(0, 0, 0, 0.5),
            inset 0 1px 2px rgba(255, 255, 255, 0.1),
            inset 0 -1px 2px rgba(0, 0, 0, 0.3)
          `
        }}
      >
        {/* Primary radial gradient overlay */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(232, 213, 163, 0.15) 0%, rgba(232, 213, 163, 0.08) 40%, transparent 70%)'
          }}
        />

        {/* Secondary gradient for depth */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 30% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
          }}
        />

        {/* Outer glow effect */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, transparent 60%, rgba(185, 163, 115, 0.15) 80%, rgba(185, 163, 115, 0.05) 100%)'
          }}
        />

        {/* Content */}
        <div className="relative flex items-center gap-3 z-10">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={text}
              className="w-6 h-6 object-contain"
            />
          ) : (
            <div className="text-[#E8D5A3] flex items-center">
              {icon || <SparkleIcon />}
            </div>
          )}
          <span
            className="font-mulyantaran-semibold text-lg tracking-wide"
            style={{
              color: '#ffffff',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
            }}
          >
            {text}
          </span>
        </div>
      </div>
    </div>
  )
}