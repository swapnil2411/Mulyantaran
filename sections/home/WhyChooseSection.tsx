"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { FancyLabel } from "@/components/ui/fancy-label"

// Define types and interfaces
interface FeatureCard {
  title: string
  description: string
  image: string
}

interface WhyChooseSectionProps { }

interface FeatureCardProps {
  feature: FeatureCard
  index: number
}
const features: FeatureCard[] = [
  {
    title: "Advanced Algorithms",
    description: "Our proprietary algorithms scan thousands of trading pairs across multiple exchanges to identify profitable arbitrage opportunities in milliseconds.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a0f0fd98915b6514b1703f30cbab60521c579518?width=674"
  },
  {
    title: "Risk Management",
    description: "Built-in risk management tools protect your capital with customizable stop-loss settings and exposure limits for safer trading.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/8a640fa49d82a7ff0618a98b59b564416d448f06?width=674"
  },
  {
    title: "High-Speed Execution",
    description: "Execute trades across exchanges with ultra-low latency, ensuring you capture fleeting arbitrage opportunities before they disappear.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c7f6b2d58d66ba6b7e4e683285451115055a7efc?width=674"
  }
]
export default function WhyChooseSection({ }: WhyChooseSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const imagesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        const image = imagesRef.current[index]
        gsap.set(image, { top: 236 })

        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          ease: "power2.out",
          duration: 0.5,
          paused: true,
          onComplete: () => {
            gsap.set(card, { clearProps: "all" })
          }
        })

        card.addEventListener("mouseenter", () => {
          gsap.to(image, {
            top: -14,
            duration: 1,
            ease: "bounce.out"
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(image, {
            top: 236,
            duration: 0.5,
            ease: "power2.in"
          })
        })

        card.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const mouseX = e.clientX - rect.left - rect.width / 2
          const mouseY = e.clientY - rect.top - rect.height / 2
          const rotateY = (mouseX / rect.width) * 20
          const rotateX = -(mouseY / rect.height) * 20
          const scale = 1.05

          gsap.to(card, {
            rotationY: rotateY,
            rotationX: rotateX,
            scale: scale,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-mulyantaran-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <FancyLabel text="Agentic AI" imageSrc="/icons/star.svg" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-mulyantaran-light text-mulyantaran-white mb-6"
          >
            Why Choose Mulyantaran?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-mulyantaran-text-gray font-mulyantaran-regular tracking-[-0.54px]"
          >
            Unmatched tools to boost profits and cut risks.
          </motion.p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}

              key={feature.title}
              className="relative group"
            >
              <div className="relative h-[567px] rounded-[30px] p-6 sm:p-8 lg:p-10 flex flex-col justify-end overflow-hidden bg-opacity-50 backdrop-blur-md">


                <div
                  ref={(el) => {
                    if (el) imagesRef.current[index] = el
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-[337px] h-[337px]"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>



                <div className="absolute bottom-0 left-0 right-0 h-[300px] sm:h-[351px] rounded-b-[30px] overflow-hidden">
                  <div className="grid grid-cols-5 w-full h-full">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-full backdrop-blur-[22px] ${i === 0 ? "rounded-bl-[30px]" : i === 4 ? "rounded-br-[30px]" : ""
                          }`}
                        style={{
                          background: "linear-gradient(270deg, rgba(255, 255, 255, 0.14) 0%, rgba(0, 0, 0, 0.14) 29.13%, rgba(255, 255, 255, 0.14) 100%)",
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="absolute inset-0 rounded-b-[30px]"
                    style={{
                      background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.05) 100%)",
                      backdropFilter: "blur(22px)",
                    }}
                  />
                </div>


                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-0">
                      {feature.title.split(' ').map((word, i) => (
                        <span
                          key={i}
                          className="text-2xl sm:text-3xl lg:text-[36px] leading-[1.1] font-mulyantaran-bold tracking-[-1.08px]"
                          style={
                            i === 0
                              ? { color: '#FFF' }
                              : {
                                background: 'linear-gradient(180deg, #FFF 64.74%, #999 124.74%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                              }
                          }
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-[50px] h-[50px] sm:w-[57px] sm:h-[57px] rounded-full cursor-pointer ml-4"
                      style={{
                        background: "radial-gradient(50.91% 97.54% at 50% 2.46%, #EDD3A0 0%, #4C3F29 100%)",
                      }}
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </motion.div>
                  </div>
                  <p className="text-sm sm:text-base lg:text-[18px] leading-normal font-mulyantaran-regular tracking-[-0.54px] text-mulyantaran-text-gray">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


