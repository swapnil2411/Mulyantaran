"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Cpu, Settings, BarChart2 } from "lucide-react"
import { FancyLabel } from "@/components/ui/fancy-label"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const CoreAdvantageSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)


  const [cursorPos, setCursorPos] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(contentRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        })

        gsap.from(imageRef.current, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        })
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  const features = [
    {
      icon: <Cpu className="w-12 h-12 text-mulyantaran-white" />,
      title: "Multi-Exchange Integration",
      desc: "Connect to over 25 major exchanges with a single API key for seamless trading across platforms.",
    },
    {
      icon: <Settings className="w-12 h-12 text-mulyantaran-white" />,
      title: "Customizable Strategy Builder",
      desc: "Create and deploy your own arbitrage strategies with our intuitive drag-and-drop interface.",
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-mulyantaran-white" />,
      title: "Real-Time Analytics",
      desc: "Monitor your performance with comprehensive dashboards and detailed trade reports.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0A0A0A] text-white py-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* Left Content */}
        <div
          ref={contentRef}
          className="space-y-8 max-w-2xl px-6 lg:px-16 mx-auto"
        >
          <div className="flex items-start">

            <FancyLabel text="ArbitraX" imageSrc="/icons/star.svg" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[52px]  font-mulyantaran-light leading-tight text-white">
            What Sets Us Apart
          </h2>

          <p className="text-[#B3B3B3] font-mulyantaran-light text-lg max-w-lg">
            Mulyantaran combines cutting-edge technology with user-friendly
            interfaces to make arbitrage trading accessible to everyone.
          </p>

          <div className="space-y-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h4 className="text-2xl  font-mulyantaran-thin mb-1 text-white">
                    {f.title}
                  </h4>
                  <p className="text-[#B3B3B3] text-base font-mulyantaran-light ">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div
          ref={imageRef}
          className="relative w-full h-full flex justify-end overflow-hidden"
          onMouseMove={(e) => {
            const rect = (e.target as HTMLElement).getBoundingClientRect()
            setCursorPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            })
          }}
          onMouseLeave={() => setCursorPos({ x: -9999, y: -9999 })}
        >
          <Image
            src="/images/arbitx.png"
            alt="Core Advantage Graphic"
            fill
            className="object-cover object-right"
          />

        </div>
      </div>
    </section>
  )
}

export default CoreAdvantageSection
