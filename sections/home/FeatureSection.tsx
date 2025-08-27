"use client"

import { useLayoutEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ArrowUpRight } from "lucide-react"
import { FancyLabel } from "@/components/ui/fancy-label"

type FeatureItem = {
  title: string
  description: string
  image: string
}

const features: FeatureItem[] = [
  {
    title: "Advanced Algorithms",
    description:
      "Our proprietary algorithms scan thousands of trading pairs across multiple exchanges to identify profitable arbitrage opportunities in milliseconds.",
    image: "/feature-algorithms.png",
  },
  {
    title: "Risk Management",
    description:
      "Built-in risk management tools protect your capital with customizable stop-loss settings and exposure limits for safer trading.",
    image: "/feature-risk.png",
  },
  {
    title: "High-Speed Execution",
    description:
      "Execute trades across exchanges with ultra-low latency, ensuring you capture fleeting arbitrage opportunities before they disappear.",
    image: "/feature-execution.png",
  },
]

export default function FeatureSection() {
  return (
    <section className="relative py-20 bg-mulyantaran-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FancyLabel text="Agentic AI" imageSrc="/icons/star.svg" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-mulyantaran-semibold text-foreground mb-4"
        >
          Why Choose Mulyantaran?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground mb-16"
        >
          Unmatched tools to boost profits and cut risks.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={0.6 + i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, delay }: { feature: FeatureItem; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  const baseY = useRef(0)

  useLayoutEffect(() => {
    const card = cardRef.current
    const img = imgRef.current
    if (!card || !img) return

    const setPositions = () => {
      const h = img.getBoundingClientRect().height || 200
      baseY.current = -(h * 0.40) // show  above the top
      gsap.set(img, { y: baseY.current, x: 0, opacity: 1 })
    }

    setPositions()

    const ro = new ResizeObserver(setPositions)
    ro.observe(img)
    ro.observe(card)

    const enter = () => {
      const h = img.getBoundingClientRect().height || 200
      baseY.current = -(h * 0.80) // show above Card
      gsap.to(img, { y: baseY.current, scale: 1.04, duration: 1, ease: "power3.out" })
    }

    const leave = () => {
      const h = img.getBoundingClientRect().height || 200
      baseY.current = -(h * 0.40)
      gsap.to(img, { y: baseY.current, x: 0, scale: 1, duration: 1, ease: "power3.inOut" })
    }

    const move = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / 14
      const dy = (e.clientY - cy) / 18 // parallax gravity
      gsap.to(img, {
        x: dx,
        y: baseY.current + dy,
        rotation: (dx / 6),
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    card.addEventListener("mouseenter", enter)
    card.addEventListener("mouseleave", leave)
    card.addEventListener("mousemove", move)

    return () => {
      ro.disconnect()
      card.removeEventListener("mouseenter", enter)
      card.removeEventListener("mouseleave", leave)
      card.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 1.11, 0.81, 0.99] }}
      className="relative rounded-[28px] text-left overflow-visible"
    >

      <img
        ref={imgRef}
        src={feature.image}
        alt={feature.title}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-48 h-48 object-contain z-10 will-change-transform pointer-events-none"
        style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,.35))" }}
      />

      <div className="relative z-20 rounded-[28px] p-8 overflow-hidden">

        <div className="absolute inset-0 rounded-[28px] 
     bg-black/20 backdrop-blur-2xl" />
        <div
          className="absolute inset-0 rounded-[28px] mix-blend-screen opacity-[0.35]"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(22px)'
            }}
        />

        <div className="absolute inset-0 rounded-[28px] pointer-events-none shadow-[inset_0_12px_40px_-20px_rgba(0,0,0,.8),inset_0_-20px_60px_-20px_rgba(0,0,0,.9)]" />


        <div className="relative z-30 pt-28">
          <h3 className="text-[26px] leading-tight font-mulyantaran-semibold text-mulyantaran-white mb-3">
            {feature.title}
          </h3>
          <p className="text-mulyantaran-white/70 text-[14px] leading-relaxed mb-8">
            {feature.description}
          </p>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 0 24px rgba(237, 211, 160, .45)" }}
          whileTap={{ scale: 0.95 }}
          className=" z-30 absolute bottom-6 right-6 w-11 h-11 rounded-full 
                     bg-[radial-gradient(100%_100%_at_30%_20%,#F0E0B7_0%,#B08E58_60%,#6E4E26_100%)]
                     flex items-center justify-center shadow-lg"
        >
          <ArrowUpRight className="w-5 h-5 text-black/80" />
        </motion.button>
      </div>
    </motion.div>
  )
}
