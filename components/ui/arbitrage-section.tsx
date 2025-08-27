"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play } from "lucide-react"

export function ArbitrageSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 100,
    hours: 75,
    minutes: 60,
    seconds: 45,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("arbitrage-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isPaused])

  const features = ["TRADE. SMARTER. PROFIT", "MAXIMIZE. MOVE. MULTIPLY", "PROFIT THROUGH PRECISION"]

  return (
    <section
      id="arbitrage-section"
      className="relative py-20 bg-mulyantaran-black overflow-hidden"
      style={{
        backgroundImage: `url('/images/chart-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-mulyantaran-black/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                ARBITRAGE.
                <br />
                AMPLIFY.
                <br />
                ACHIEVE.
              </h1>

              <p className="text-lg text-mulyantaran-text-gray max-w-md">
                Start with just $100 in our risk-free, automated arbitrage program.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-mulyantaran-text-gray mb-1">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-mulyantaran-text-gray uppercase tracking-wider">DAYS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-mulyantaran-text-gray mb-1">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-mulyantaran-text-gray uppercase tracking-wider">HOURS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-mulyantaran-text-gray mb-1">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-mulyantaran-text-gray uppercase tracking-wider">MINUTES</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-mulyantaran-text-gray mb-1">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-mulyantaran-text-gray uppercase tracking-wider">SECONDS</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`relative ${isVisible ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            {/* 3D Orbital Ring Design */}
            <div className="relative w-96 h-96 mx-auto">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-mulyantaran-text-gray/30 animate-rotate"
                style={{ animationDuration: "20s" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
              </div>

              {/* Middle ring */}
              <div
                className="absolute inset-4 rounded-full border border-mulyantaran-text-gray/20 animate-rotate"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              >
                <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2 w-2 h-2 bg-mulyantaran-gold rounded-full shadow-lg" />
              </div>

              {/* Inner core */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-mulyantaran-gold/20 to-transparent border border-mulyantaran-gold/30 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-900 to-amber-700 shadow-2xl" />
              </div>

              {/* Orbital line */}
              <div
                className="absolute inset-8 rounded-full border border-white/40"
                style={{ transform: "rotateX(60deg)" }}
              >
                <div
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg animate-rotate"
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </div>

            {/* Feature Points */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-mulyantaran-gold rounded-full" />
                  <span className="text-sm text-white font-medium whitespace-nowrap">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-0 right-0 flex gap-3">
              <Button className="bg-mulyantaran-gold hover:bg-mulyantaran-gold-dark text-black font-semibold px-8 py-3 rounded-full">
                Join Presale
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-mulyantaran-text-gray/30 hover:border-mulyantaran-gold/50 bg-transparent"
                onClick={() => setIsPaused(!isPaused)}
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
