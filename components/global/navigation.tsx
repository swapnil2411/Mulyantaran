"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, CircleUserRound, CircleUser, UserRound } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
  ]

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  }

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
    exit: { x: "100%", transition: { type: "spring" as const, stiffness: 300, damping: 30 } }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-mulyantaran-black/95 backdrop-blur-md "
          : "bg-mulyantaran-black"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/mulyantaran-logo.png"
              alt="Mulyantaran"
              width={200}
              height={50}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-mulyantaran-white hover:text-mulyantaran-gold transition-colors duration-200 font-mulyantaran-regular  text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-mulyantaran-white border-white border hover:text-mulyantaran-gold hover:bg-mulyantaran-gold/10 rounded-full"
              aria-label="Sign In"
            >
              <UserRound className="w-12 h-12" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-mulyantaran-white"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 lg:hidden z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Icon - top right */}
              <div className="absolute top-5 right-5 z-50">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-mulyantaran-white hover:text-mulyantaran-gold"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8" />
                </Button>
              </div>
              <motion.div
                className="absolute inset-y-0 right-0 w-full bg-mulyantaran-dark-gray/95 backdrop-blur-md"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-6 pt-24">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-mulyantaran-white hover:text-mulyantaran-gold text-xl font-mulyantaran-regular font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-mulyantaran-white hover:text-mulyantaran-gold hover:bg-mulyantaran-gold/10 rounded-full mt-8"
                    aria-label="Sign In"
                  >
                    <User className="w-8 h-8" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}