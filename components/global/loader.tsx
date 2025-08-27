"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

export function Loader() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const loaderRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)
  const progressTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const radius = 40
    const circumference = 2 * Math.PI * radius

    gsap.set(circleRef.current, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
    })

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev >= 100 ? 100 : prev + 2

        gsap.to(circleRef.current, {
          strokeDashoffset: circumference - (newProgress / 100) * circumference,
          duration: 0.3,
          ease: "power2.out",
        })

        if (progressTextRef.current) {
          progressTextRef.current.textContent = `${newProgress}%`
        }

        if (newProgress >= 100) {
          clearInterval(timer)

          setTimeout(() => {
            const exitTl = gsap.timeline({
              onComplete: () => setIsVisible(false),
            })

            exitTl.to(loaderRef.current, {
              y: "-100%",       
              duration: 1.2,    
              ease: "power4.inOut",
            })
          }, 500)
        }

        return newProgress
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-mulyantaran-black flex items-center justify-center overflow-hidden"
    >
      {/* Logo center */}
      <Image
        src="/images/mulyantaran-logo.png"
        alt="Mulyantaran"
        width={200}
        height={200}
        className="w-60 h-48 object-contain"
      />

      {/* Progress bottom-right */}
      <div className="absolute bottom-8 right-8">
        <div className="relative flex items-center justify-center">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#2c2c2c"
              strokeWidth="8"
              fill="none"
            />
            <circle
              ref={circleRef}
              cx="48"
              cy="48"
              r="40"
               stroke="#A28D62"  
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            {/* <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#ff6f61" />
              </linearGradient>
            </defs> */}
          </svg>

          <div
            ref={progressTextRef}
            className="absolute text-mulyantaran-white text-lg font-mulyantaran-semibold"
          >
            0%
          </div>
        </div>
      </div>
    </div>
  )
}
