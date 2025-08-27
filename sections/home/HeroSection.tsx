"use client"

import { useEffect, useState } from "react"
import CountdownTimer from "@/components/countdown-timer"
// import Image from "next/image"
import { motion } from "framer-motion";
import { CandlestickChart } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

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

  const features = ["TRADE. SMARTER. PROFIT", "MAXIMIZE. MOVE. MULTIPLY", "PROFIT THROUGH PRECISION"]

  return (
    <section
      id="arbitrage-section"
      className="relative py-20 bg-mulyantaran-black overflow-hidden min-h-screen"
    >

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 w-[200%] h-full animate-marquee-x"
          style={{
            backgroundImage: `url('/images/chart-background.png'), url('/images/chart-background.png')`,
            backgroundSize: "50% 100%",
            backgroundPosition: "0 0, 100% 0",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>


      <div className="absolute inset-0 bg-mulyantaran-black/30" />

      <div className="relative max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-6">
              <h1
                className="font-mulyantaran-semibold uppercase leading-[0.92] tracking-[-0.07em] text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.6rem]"
              >
                <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
                  ARBITRAGE
                </span>
                <span className="text-[#c4a04d]">.</span>
                <br />
                <span className="text-white">AMPLIFY</span>
                <span className="text-[#c4a04d]">.</span>
                <br />
                <span className="bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
                  ACHIEVE
                </span>
                <span className="text-[#c4a04d]">.</span>
              </h1>
              <p className="text-lg tracking-tighter text-mulyantaran-text-gray font-mulyantaran-regular max-w-96 w-full">
                Start with just $100 in our risk-free, automated arbitrage program.
              </p>
            </div>
            <CountdownTimer />
          </div>

          {/* Right Content */}
          <div
            className={`relative ${isVisible ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div
                className="absolute w-[400px] h-[400px] right-[20rem] animate-orbit"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute w-[120px] h-[120px] bg-gray-700 rounded-full"
                  style={{
                    transform: "translateZ(0px)",
                  }}
                ></div>

                <div
                  className="absolute w-[300px] h-[300px] border-2 border-[#c4a04d] rounded-full"
                  style={{
                    transform: "rotateX(70deg) translateZ(-50px)",
                    borderStyle: "dashed",
                  }}
                ></div>

                <div
                  className="absolute w-[250px] h-[250px] border-2 border-white rounded-full"
                  style={{
                    transform: "rotateX(70deg) translateZ(-20px)",
                    borderStyle: "solid",
                  }}
                ></div>

                <div
                  className="absolute w-[20px] h-[20px] bg-white rounded-full"
                  style={{
                    transform: "translate3d(120px, 0, 50px)",
                  }}
                ></div>
              </div>
            </div>

            {/* Feature Points */}
            <div className="absolute right-0 bottom-0   flex flex-col items-end space-y-4">
             
              <div className="flex flex-col space-y-4">
                {features.map((feature, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                    className="flex items-center gap-3 bg-[#1a1a1a] rounded-full px-4 py-2 text-mulyantaran-white text-sm  shadow-lg"
                  >
                    <div className="w-5 h-5 p-1 flex items-center justify-center rounded-full bg-mulyantaran-white text-mulyantaran-black  ">
                      ✓
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-radial "
                >
                  Join Presale
                </motion.button>
                <div className="ripple p-2">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center bg-[#CBB487] border border-[#97825B] rounded-full w-12 h-12 shadow-md"
                  >
                    <CandlestickChart className="w-6 h-6 text-mulyantaran-white" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}