"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"

export function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById("statistics-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: "$5.2B+", label: "Total Trading Volume" },
    { value: "150K+", label: "Active Users" },
    { value: "15%", label: "Avg. Monthly Return" },
    { value: "99.9%", label: "Success Rate" },
  ]

  return (
    <section id="statistics-section" className="py-20 bg-mulyantaran-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={clsx(
                "rounded-3xl p-8 gap-[10px] text-center border transition-all duration-500",
                "bg-no-repeat bg-cover bg-center",
                "border-mulyantaran-light-gray/10 hover:border-mulyantaran-gold/40",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{
                transitionDelay: `${index * 120}ms`,
                backgroundImage: "url('/frame.png')", 
              }}
            >
              {/* Gradient big number */}
              <div
                className="text-4xl md:text-6xl leading-tight tracking-tight font-mulyantaran-semibold 
                mb-3 bg-gradient-to-r from-[#EDD3A0] to-[#4C3F29] 
                text-transparent bg-clip-text"
              >
                {stat.value}
              </div>

              {/* White heading */}
              <div className="text-base md:text-lg font-mulyantaran-medium text-mulyantaran-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
