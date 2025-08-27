"use client"

import { Instagram, Linkedin, Facebook, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Plans & Pricing", href: "#" },
    { name: "Contact Us", href: "#" },
  ]

  const supportLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Legal Notice", href: "#" },
  ]

  return (
    <footer className="bg-mulyantaran-black border-t border-mulyantaran-light-gray/20">
      <div className="max-w-7xl mx-auto px-4  py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/mulyantaran-logo.png"
                alt="Mulyantaran"
               width={220}
              height={50}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-mulyantaran-text-gray text-lg font-mulyantaran-light leading-relaxed max-w-xs">
              Mulyantaran is revolutionizing arbitrage trading with advanced AI technology and user-friendly tools for
              traders of all experience levels.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-mulyantaran-text-gray/30 flex items-center justify-center hover:border-mulyantaran-gold/50 transition-colors"
              >
                <Instagram className="h-4 w-4 text-mulyantaran-text-gray" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-mulyantaran-text-gray/30 flex items-center justify-center hover:border-mulyantaran-gold/50 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-mulyantaran-text-gray" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-mulyantaran-text-gray/30 flex items-center justify-center hover:border-mulyantaran-gold/50 transition-colors"
              >
                <Facebook className="h-4 w-4 text-mulyantaran-text-gray" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-mulyantaran-white font-mulyantaran-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-mulyantaran-text-gray hover:text-mulyantaran-gold transition-colors font-mulyantaran-light text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-mulyantaran-white font-mulyantaran-semibold text-lg">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-mulyantaran-text-gray hover:text-mulyantaran-gold font-mulyantaran-light transition-colors text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-mulyantaran-white font-mulyantaran-semibold text-lg">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-mulyantaran-text-gray" />
                <span className="text-mulyantaran-text-gray text-lg font-mulyantaran-light">+91 98997 14578</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-mulyantaran-text-gray" />
                <span className="text-mulyantaran-text-gray text-lg font-mulyantaran-light">info@mulyantaran.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-mulyantaran-light-gray/20 mt-12 pt-6">
          <div className="text-center">
            <p className="text-mulyantaran-text-gray text-lg font-mulyantaran-light">© 2025, Mulyantaran</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
